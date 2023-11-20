import React from "react";

import "./modal.estilo.css";

function Modal({ onClickSair }) {
  return (
    <div className="modal">
      <h2 className="modal-titulo">
        O intuito é fazer com que você tire uns minutos para entender e pensar
        um pouquinho sobre si mesma.
      </h2>
      <p className="modal-texto">
        Lembrar seus gostos, imaginar histórias e ver como reagiria, entender
        que você tem potencial sobre as coisas e o que falta é acreditar em sí
        mesma!
      </p>
      <button className="modal-button" onClick={onClickSair}>
        Obrigada por ter participado!
      </button>
    </div>
  );
}

export default Modal;
