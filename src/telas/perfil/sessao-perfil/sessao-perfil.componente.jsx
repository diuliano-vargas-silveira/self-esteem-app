import React from "react";
import { iconeEdit, iconeUsuario } from "../../../assets";

function SessaoPefil({ nome, descricao, email }) {
  return (
    <section className="perfil-sessao">
      <button className="perfil-botao">
        <img src={iconeUsuario} alt="icone de usuário" />
        <img src={iconeEdit} alt="icone de editar" className="perfil-edit" />
      </button>
      <h1>Nathalia Machado</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste
        adipisci. Accusantium ipsa inventore cumque delectus, repudiandae ea
        debitis dolorum quaerat excepturi, quam accusamus voluptatibus facere
        aut tempora ullam voluptas.
      </p>
      <span>nathalia@email.com</span>
      <p>
        "Você é única, especial e incrível exatamente do jeitinho que é. Se ame,
        celebre suas qualidades, abrace suas imperfeições e permita que a beleza
        autêntica que existe em você brilhe sempre."
      </p>
    </section>
  );
}

export default SessaoPefil;
