import React, { useState } from "react";

import { iconeInstagram, iconeInteracaoMenu } from "../../assets";
import LinkMenu from "../link-menu/link-menu.componente";

import ROTAS from "../../contantes/rotas";

import "./menu.estilo.css";

function Menu() {
  const [ativado, setAtivado] = useState(false);

  function handleClickMenu() {
    setAtivado(!ativado);
  }

  return (
    <aside className={`menu menu-${ativado ? "ativado" : ""}`}>
      <header className="menu-header">
        <button onClick={handleClickMenu} className="menu-botao">
          <img
            src={iconeInteracaoMenu}
            alt="icone menu"
            className="menu-icone"
          />
        </button>
        <a
          href="https://www.instagram.com/ofc_selfesteem?igshid=dnA2Z3pqaXBwaDQy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={iconeInstagram}
            alt="icone instagram"
            className="menu-icone"
          />
        </a>
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
