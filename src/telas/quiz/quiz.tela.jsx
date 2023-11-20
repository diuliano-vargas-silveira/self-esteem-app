import React, { useEffect, useState } from "react";
import Pagina from "../../componentes/pagina/pagina.componente";

import PERGUNTAS_QUIZ from "../../contantes/perguntasQuiz";
import { selecionar5PerguntasAleatoriamente } from "../../utils/selecionar5PerguntasAleatoriamente";

function Quiz() {
  const [perguntasSelecionadas, setPerguntasSelecionadas] = useState();
  const [respostas, setRespostas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  useEffect(() => {
    if (!perguntasSelecionadas) {
      setPerguntasSelecionadas(selecionar5PerguntasAleatoriamente());
    }
  }, [perguntasSelecionadas]);

  function handleClickSelecionarPergunta(perguntaComResposta) {
    setRespostas([...respostas, perguntaComResposta]);
  }

  function renderizarQuiz() {
    if (perguntasSelecionadas) {
      const perguntaSelecionada =
        PERGUNTAS_QUIZ[perguntasSelecionadas[perguntaAtual]];

      return (
        <section>
          <span>{perguntaSelecionada.pergunta}</span>
          <ul>
            {perguntaSelecionada.opcoes.map((resposta, index) => {
              function selecionarResposta() {
                handleClickSelecionarPergunta({
                  ...perguntaSelecionada,
                  resposta,
                });
              }

              return (
                <li key={index}>
                  <button onClick={selecionarResposta}>{resposta}</button>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
  }

  return (
    <Pagina>
      <section className="quiz">
        <h1>VAMOS DESCOBRIR O QUANTO VOCÊ SE CONHECE?</h1>
        {renderizarQuiz()}
      </section>
    </Pagina>
  );
}

export default Quiz;
