import React from "react";
import Menu from "../menu/menu.componente";

import "./pagina.estilo.css";
import BotaoCadastro from "../botao-cadastro/botao-cadastro.componente";

function Pagina({ children }) {
  return (
    <div className="pagina">
      <Menu />
      <main className="pagina-main">
        <BotaoCadastro />
        {children}
      </main>
    </div>
  );
}

export default Pagina;
