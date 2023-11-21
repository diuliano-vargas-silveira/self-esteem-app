import React from "react";
import Menu from "../menu/menu.componente";
import BotaoCadastro from "../botao-cadastro/botao-cadastro.componente";

import "./pagina.estilo.css";

function Pagina({ className, children }) {
  return (
    <div className="pagina">
      <Menu />
      <main className={`pagina-main ${className}`}>
        {!localStorage.getItem("usuario") && <BotaoCadastro />}
        {children}
      </main>
    </div>
  );
}

export default Pagina;
