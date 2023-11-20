import React, { useEffect, useState } from "react";
import Pagina from "../../componentes/pagina/pagina.componente";
import SessaoPefil from "./sessao-perfil/sessao-perfil.componente";

import "./perfil.estilo.css";

function Perfil() {
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    if (localStorage.getItem("usuario")) {
      setUsuario("");
    }
  }, []);

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
