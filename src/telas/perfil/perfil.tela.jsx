import React, { useEffect, useState } from "react";
import Pagina from "../../componentes/pagina/pagina.componente";
import SessaoPefil from "./sessao-perfil/sessao-perfil.componente";

import "./perfil.estilo.css";
import { useUserApi } from "../../api/user.api";

function Perfil() {
  const [usuario, setUsuario] = useState();

  const { getUserByEmail } = useUserApi();

  useEffect(() => {
    const getUsuario = async (email) => {
      const usuarioResponse = await getUserByEmail(email);
      if (usuarioResponse) {
        setUsuario(usuarioResponse);
      }
    };

    const email = localStorage.getItem("usuario");

    if (!usuario && email) {
      getUsuario(email);
    }
  }, [getUserByEmail, usuario]);

  return (
    <Pagina className="perfil-main">
      <div className="perfil">
        {!usuario ? (
          <span>Faça login ou cadastre-se para ver seu perfil!</span>
        ) : (
          <SessaoPefil {...usuario} />
        )}
      </div>
    </Pagina>
  );
}

export default Perfil;
