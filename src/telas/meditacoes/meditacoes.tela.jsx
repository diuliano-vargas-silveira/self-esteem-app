import React from "react";
import Pagina from "../../componentes/pagina/pagina.componente";

import { imagemLogo } from "../../assets";

import "./meditacoes.estilo.css";

const PLAYLIST_URL =
  "https://open.spotify.com/embed/show/4yeL7ZeiSsPkary3gGzjOx?utm_source=generator";

function Meditacoes() {
  function renderizarAudioSpotify() {
    return (
      <iframe
        title="Spotify Embed"
        style={{ borderRadius: "12px", marginTop: "5%" }}
        src={PLAYLIST_URL}
        width="50%"
        height="300px"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
      ></iframe>
    );
  }

  return (
    <Pagina>
      <section className="meditacoes">
        <img src={imagemLogo} alt="Logo do site Seld esteem" />

        <p>Uma Jornada de Meditação para Elevar a Autoestima.</p>
        <p>
          Descubra a força da tranquilidade interior e da aceitação pessoal
          enquanto mergulha na meditação.
        </p>
        {renderizarAudioSpotify()}
      </section>
    </Pagina>
  );
}

export default Meditacoes;
