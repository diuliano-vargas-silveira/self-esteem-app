import React, { useState } from "react";
import Header from "../../componentes/header/header.componente";
import Input from "../../componentes/input/input.componente";

import "./cadastro.estilo.css";
import { useUserApi } from "../../api/user.api";

const FORMULARIO = {
  nome: {
    name: "nome",
    placeholder: "Jiara Martins",
    label: "NOME",
  },
  email: {
    name: "email",
    placeholder: "hello@reallygreatsite.com",
    label: "EMAIL",
    type: "email",
  },
  senha: {
    name: "senha",
    placeholder: "********",
    label: "SENHA",
    type: "password",
  },
};

function Cadastro() {
  const [formulario, setFormulario] = useState({ ...FORMULARIO });

  const { createUser } = useUserApi();

  function handleChange({ target: { name, value } }) {
    setFormulario({ ...formulario, [name]: { ...FORMULARIO[name], value } });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      nome: formulario.nome,
      email: formulario.email,
      senha: formulario.senha,
    };
    const response = await createUser(data);
    console.log(response);
  }

  return (
    <div className="autorizacao">
      <Header />
      <section className="cadastro">
        <h1>Faça seu Cadastro.</h1>
        <span>Oiee, seja bem vinda gata garota!</span>

        <form onSubmit={handleSubmit}>
          <Input {...formulario.nome} onChange={handleChange} />
          <Input {...formulario.email} onChange={handleChange} />
          <Input {...formulario.senha} onChange={handleChange} />

          <button type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
}

export default Cadastro;
