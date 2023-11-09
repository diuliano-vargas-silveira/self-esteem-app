import React from "react";

import { iconeInstagram } from "../../assets";
import LinkMenu from "../link-menu/link-menu.componente";

import ROTAS from "../../contantes/rotas";

import "./menu.estilo.css";

function Menu() {
  return (
    <aside className="menu">
      <header>
        <img
          src={iconeInstagram}
          alt="icone instagram"
          className="menu-icone-instagram"
        />
      </header>
      <nav>
        <ul className="menu-navegacao">
          {ROTAS.MENU.map((rota, index) => (
            <LinkMenu {...rota} key={index} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
