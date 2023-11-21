import React, { useEffect, useState } from "react";
import { iconeUsuario } from "../../assets";
import { useUserApi } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import ROTAS from "../../contantes/rotas";

import "./edicao-perfil.estilo.css";

const FORMULARIO = {
  nome: {
    name: "nome",
    value: "",
  },
  descricao: {
    name: "descricao",
    value: "",
  },
};

function EdicaoPerfil() {
  const [formulario, setFormulario] = useState({ ...FORMULARIO });
  const [imagePreview, setImagePreview] = useState();
  const [email] = useState(localStorage.getItem("usuario"));
  const [imagem, setImagem] = useState();
  const [isCarregado, setIsCarregado] = useState(false);

  const { getUserByEmail, editarUsuario } = useUserApi();
  const navigate = useNavigate();

  useEffect(() => {
    async function adicionarFormulario(email) {
      const usuario = await getUserByEmail(email);

      if (usuario) {
        setFormulario({
          nome: { ...FORMULARIO.nome, value: usuario.nome },
          descricao: { ...FORMULARIO.descricao, value: usuario.descricao },
        });
      }
    }

    if (!isCarregado && email) {
      setIsCarregado(true);

      adicionarFormulario(email);
    }
  }, [isCarregado, getUserByEmail, email]);

  function handleChange({ target: { name, value } }) {
    setFormulario({ ...formulario, [name]: { ...FORMULARIO[name], value } });
  }

  async function handleChangeImagem({ target: { files } }) {
    const arquivoSelecionado = files[0];

    let reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(arquivoSelecionado);
    setImagem(files);
  }

  async function handleEditar(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foto", imagem[0]);
    formData.append("email", email);
    formData.append("nome", formulario.nome.value);
    formData.append("descricao", formulario.descricao.value);

    const response = await editarUsuario(formData);

    if (response) {
      alert("Usuário editado com sucesso!");
      navigate(ROTAS.MENU[4].path);
    }
  }

  return (
    <main className="edicao">
      <form
        className="perfil-sessao"
        enctype="multipart/form-data"
        onSubmit={handleEditar}
      >
        <label htmlFor="image">
          <img
            src={imagePreview ? imagePreview : iconeUsuario}
            alt="icone de usuário"
            className="imagem-usuario"
          />
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleChangeImagem}
          alt=""
          className="edicao-imagem"
        />

        <input
          className="perfil-input nome"
          {...formulario.nome}
          onChange={handleChange}
        />
        <input
          className="perfil-input"
          {...formulario.descricao}
          onChange={handleChange}
        />
        <span className="perfil-input">{localStorage.getItem("usuario")}</span>

        <button className="perfil-submit" type="submit">
          Editar
        </button>
      </form>
    </main>
  );
}

export default EdicaoPerfil;
