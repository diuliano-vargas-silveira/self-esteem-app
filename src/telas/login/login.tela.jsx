import React, { useState } from "react";
import Header from "../../componentes/header/header.componente";
import Input from "../../componentes/input/input.componente";

const FORMULARIO = {
  email: {
    name: "email",
    placeholder: "hello@reallygreatsite.com",
    label: "NOMEMAILE",
    type: "email",
  },
  senha: {
    name: "senha",
    placeholder: "********",
    label: "SENHA",
    type: "password",
  },
};

function Login() {
  const [formulario, setFormulario] = useState({ ...FORMULARIO });

  function handleChange({ target: { name, value } }) {
    setFormulario({ ...formulario, [name]: { ...FORMULARIO[name], value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="autorizacao">
      <Header />
      <section className="cadastro">
        <h1>Faça seu Login.</h1>
        <span>Que bom te ter novamente por aqui!</span>

        <form onSubmit={handleSubmit}>
          <Input {...formulario.email} onChange={handleChange} />
          <Input {...formulario.senha} onChange={handleChange} />

          <button type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
