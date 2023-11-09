import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./link-menu.estilo.css";

function LinkMenu({ nome, getIcone, path }) {
  const location = useLocation();
  const className = path === location.pathname ? "link-menu-ativo" : "";

  return (
    <li>
      <Link to={path} className={`link-menu link-menu-texto ${className}`}>
        {getIcone("link-menu-imagem")}
        <span>{nome}</span>
      </Link>
    </li>
  );
}

export default LinkMenu;
