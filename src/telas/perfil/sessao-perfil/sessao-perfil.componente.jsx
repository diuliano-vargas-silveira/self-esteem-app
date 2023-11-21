import React from "react";
import { Link } from "react-router-dom";
import ROTAS from "../../../contantes/rotas";

import { iconeEdit, iconeUsuario } from "../../../assets";

import "./sessao-perfil.estilo.css";

function SessaoPefil({ nome, descricao, email, imagem }) {
  return (
    <section className="perfil-sessao">
      <Link to={ROTAS.EDICAO_PERFIL.path} className="perfil-botao">
        <img
          src={imagem ? imagem : iconeUsuario}
          alt="icone de usuário"
          className="perfil-imagem"
        />
        <img src={iconeEdit} alt="icone de editar" className="perfil-edit" />
      </Link>
      <h1>{nome}</h1>
      <p>{descricao}</p>
      <span>{email}</span>
      <p>
        "Você é única, especial e incrível exatamente do jeitinho que é. Se ame,
        celebre suas qualidades, abrace suas imperfeições e permita que a beleza
        autêntica que existe em você brilhe sempre."
      </p>
    </section>
  );
}

export default SessaoPefil;
