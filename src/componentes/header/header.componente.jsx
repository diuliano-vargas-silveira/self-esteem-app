import React from "react";
import ROTAS from "../../contantes/rotas";
import { Link } from "react-router-dom";
import { iconeInteracaoMenu } from "../../assets";

import "./header.estilo.css";

function Header() {
  return (
    <header className="header">
      <Link to={ROTAS.MENU[0].path}>
        <img src={iconeInteracaoMenu} alt="icone menu" className="menu-icone" />
      </Link>
    </header>
  );
}

export default Header;
