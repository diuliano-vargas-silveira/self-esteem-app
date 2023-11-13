import React, { useState } from "react";

import { iconeInstagram, iconeInteracaoMenu } from "../../assets";
import LinkMenu from "../link-menu/link-menu.componente";

import ROTAS from "../../contantes/rotas";

import "./menu.estilo.css";

function Menu() {
  const [ativado, setAtivado] = useState(false);

  return (
    <aside
      className="menu"
      onMouseMove={() => setAtivado(true)}
      onMouseLeave={() => setAtivado(false)}
    >
      <header>
        <img
          src={iconeInteracaoMenu}
          alt="icone instagram"
          className="menu-icone"
        />
        <img
          src={iconeInstagram}
          alt="icone instagram"
          className="menu-icone"
        />
      </header>
      <nav>
        <ul className="menu-navegacao">
          {ROTAS.MENU.map((rota, index) => (
            <LinkMenu {...rota} key={index} ativado={ativado} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
