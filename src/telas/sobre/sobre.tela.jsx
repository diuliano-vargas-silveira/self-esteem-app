import React from "react";
import Pagina from "../../componentes/pagina/pagina.componente";

import { imagemLogo } from "../../assets";

import "./sobre.estilo.css";

function Sobre() {
  return (
    <Pagina>
      <section className="sobre">
        <img src={imagemLogo} alt="Logo do site Seld esteem" />
        <p>
          Seja bem-vinda a um refúgio de autoestima e bem-estar, criado com você
          em mente. Aqui, dedicamos nosso espaço à promoção de uma autoimagem
          positiva e ao fortalecimento emocional das mulheres. Sabemos que a
          jornada da autoaceitação pode ser desafiadora em um mundo onde as
          redes sociais muitas vezes pintam imagens distorcidas da realidade.
        </p>
        <p>
          Obrigada por se juntar a nós. Estamos ansiosos para caminhar ao seu
          lado enquanto exploramos a importância da autoestima, da saúde
          emocional e da verdadeira aceitação. Sinta-se em casa, pois este é um
          local onde a autenticidade e o amor-próprio florescem. Com carinho,
          Nathalia Machado
        </p>
      </section>
    </Pagina>
  );
}

export default Sobre;
