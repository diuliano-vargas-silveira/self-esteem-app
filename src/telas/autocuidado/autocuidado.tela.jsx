import React from "react";
import Pagina from "../../componentes/pagina/pagina.componente";
import Card from "../../componentes/card/card.componente";

import DICAS from "../../contantes/autoCuidado";

import { imagemLogo } from "../../assets";

import "./autocuidado.estilo.css";

function AutoCuidado() {
  return (
    <Pagina>
      <section className="auto-cuidado">
        <img src={imagemLogo} alt="Logo do site Seld esteem" />
        <div className="container">
          {DICAS.map((dica) => (
            <Card key={dica.id} {...dica} />
          ))}
        </div>
      </section>
    </Pagina>
  );
}

export default AutoCuidado;
