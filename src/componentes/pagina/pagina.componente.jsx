import React from "react";
import Menu from "../menu/menu.componente";

import "./pagina.estilo.css";

function Pagina({ children }) {
  return (
    <div className="pagina">
      <Menu />
      <main className="pagina-main">{children}</main>
    </div>
  );
}

export default Pagina;
