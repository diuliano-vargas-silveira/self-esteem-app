import React from "react";
import Pagina from "../../componentes/pagina/pagina.componente";

import { imagemLogo } from "../../assets";

import "./meditacoes.estilo.css";

function Meditacoes() {
  return (
    <Pagina>
      <section className="meditacoes">
        <img src={imagemLogo} alt="Logo do site Seld esteem" />

        <p>Uma Jornada de Meditação para Elevar a Autoestima.</p>
        <p>
          Descubra a força da tranquilidade interior e da aceitação pessoal
          enquanto mergulha na meditação.
        </p>
      </section>
    </Pagina>
  );
}

export default Meditacoes;
