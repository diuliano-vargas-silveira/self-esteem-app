import React, { useState } from "react";
import Header from "../../componentes/header/header.componente";
import Input from "../../componentes/input/input.componente";
import { Link } from "react-router-dom";
import ROTAS from "../../contantes/rotas";
import { useNavigate } from "react-router-dom";
import { useUserApi } from "../../api/user.api";

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

  const navigate = useNavigate();

  const { login } = useUserApi();

  function handleChange({ target: { name, value } }) {
    setFormulario({ ...formulario, [name]: { ...FORMULARIO[name], value } });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: formulario.email.value,
      senha: formulario.senha.value,
    };

    const response = await login(data);

    if (response) {
      alert("Login com sucesso!");
      localStorage.setItem("usuario", formulario.email.value);
      navigate(ROTAS.MENU[0].path);
    }
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
          <Link to={ROTAS.CADASTRO.path}>Não tenho conta ainda</Link>

          <button type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
