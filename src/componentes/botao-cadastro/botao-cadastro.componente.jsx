import React from "react";
import { Link } from "react-router-dom";

import "./botao-cadastro.estilo.css";

function BotaoCadastro() {
  return (
    <Link className="botao-cadastro" to="/cadastro">
      Fazer Cadastro
    </Link>
  );
}

export default BotaoCadastro;
