import React from "react";

import "./card.estilo.css";

function Card({ mensagem, variacao }) {
  return <div className={`item ${variacao}`}>{mensagem}</div>;
}

export default Card;
