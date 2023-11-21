import React, { useState } from "react";
import Header from "../../componentes/header/header.componente";
import Input from "../../componentes/input/input.componente";
import { useUserApi } from "../../api/user.api";
import { Link } from "react-router-dom";
import ROTAS from "../../contantes/rotas";
import { useNavigate } from "react-router-dom";

import "./cadastro.estilo.css";

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

  const navigate = useNavigate();

  const { createUser } = useUserApi();

  function handleChange({ target: { name, value } }) {
    setFormulario({ ...formulario, [name]: { ...FORMULARIO[name], value } });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: formulario.nome.value,
      email: formulario.email.value,
      password: formulario.senha.value,
    };
    const response = await createUser(data);

    if (response.status === 200) {
      alert("Usuário criado com sucesso");
      navigate(ROTAS.LOGIN.path);
    }
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
          <Link to={ROTAS.LOGIN.path}>Já tenho conta</Link>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default Cadastro;
