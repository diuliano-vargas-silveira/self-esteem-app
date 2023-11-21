import React, { useEffect, useState } from "react";
import { iconeUsuario } from "../../assets";

import "./edicao-perfil.estilo.css";

const FORMULARIO = {
  nome: {
    name: "nome",
    value: "",
  },
  email: {
    name: "email",
    type: "email",
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
  const [imagem, setImagem] = useState();
  const [isCarregado, setIsCarregado] = useState(false);

  useEffect(() => {
    if (!isCarregado) {
      setIsCarregado();
      const email = localStorage.getItem("usuario");
    }
  }, [isCarregado]);

  function handleChange({ target: { name, value } }) {
    setFormulario({ ...formulario, [name]: { ...FORMULARIO[name], value } });
  }

  async function handleChangeImagem({ target: { files } }) {
    const arquivoSelecionado = files[0];
    console.log(files);

    let reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(arquivoSelecionado);
    setImagem(files);
  }

  return (
    <main className="edicao">
      <section className="perfil-sessao">
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
        <input
          className="perfil-input"
          {...formulario.email}
          onChange={handleChange}
        />
      </section>
    </main>
  );
}

export default EdicaoPerfil;
