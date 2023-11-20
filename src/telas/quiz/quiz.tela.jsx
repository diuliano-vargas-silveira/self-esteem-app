import React, { useEffect, useState } from "react";
import Pagina from "../../componentes/pagina/pagina.componente";
import Modal from "../../componentes/modal/modal.componente";
import PERGUNTAS_QUIZ from "../../contantes/perguntasQuiz";

import { selecionar5PerguntasAleatoriamente } from "../../utils/selecionar5PerguntasAleatoriamente";

import "./quiz.estilo.css";

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

    setPerguntaAtual(perguntaAtual + 1);
  }

  function renderizarQuiz() {
    if (perguntasSelecionadas) {
      const perguntaSelecionada =
        PERGUNTAS_QUIZ[perguntasSelecionadas[perguntaAtual]];

      return (
        <>
          <span className="quiz-pergunta">{perguntaSelecionada.pergunta}</span>
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
        </>
      );
    }
  }

  return (
    <Pagina>
      <section className="quiz">
        <h1 className="quiz-titulo">
          VAMOS DESCOBRIR O QUANTO VOCÊ SE CONHECE?
        </h1>
        {perguntaAtual !== 5 && renderizarQuiz()}
        {perguntaAtual === 5 && <Modal />}
      </section>
    </Pagina>
  );
}

export default Quiz;
