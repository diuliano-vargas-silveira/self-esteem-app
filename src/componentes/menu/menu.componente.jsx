import React, { useState } from "react";

import {
  iconeAjudaPsicologica,
  iconeDesconectar,
  iconeInstagram,
  iconeInteracaoMenu,
} from "../../assets";
import LinkMenu from "../link-menu/link-menu.componente";
import { useNavigate } from "react-router-dom";
import ROTAS from "../../contantes/rotas";

import "./menu.estilo.css";

function Menu() {
  const [ativado, setAtivado] = useState(false);

  const navigate = useNavigate();

  function handleClickMenu() {
    setAtivado(!ativado);
  }

  function handleClickSair() {
    localStorage.clear();

    navigate(ROTAS.LOGIN.path);
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
          className="link-header"
        >
          <img
            src={iconeInstagram}
            alt="icone instagram"
            className="menu-icone"
          />
        </a>
        <a href="tel:+55 51 9999-4950" className="link-header">
          <img
            src={iconeAjudaPsicologica}
            alt="icone ajuda psicológica"
            className="menu-icone"
          />
        </a>
        <button onClick={handleClickSair} className="menu-botao link-header">
          <img
            src={iconeDesconectar}
            alt="sair da conta"
            className="menu-icone"
          />
        </button>
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
