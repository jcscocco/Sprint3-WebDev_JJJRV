"use client";

import { useState } from "react";

export default function PrototypeSection() {
  // qual apresentação está aberta: null (fechado), 0 (versão 1), 1 (versão 2) ou 2 (versão 3)
  const [presentAberta, setPresentAberta] = useState(null);

  // qual imagem do array atual está sendo mostrada
  const [imgIndex, setImgIndex] = useState(0);

 const present1 = [
  "/images/.presentation/p1/1-1.png",
  "/images/.presentation/p1/1-2.png",
  "/images/.presentation/p1/1-3.png",
  "/images/.presentation/p1/1-4.png",
  "/images/.presentation/p1/1-5.png",
  "/images/.presentation/p1/1-6.png",
  "/images/.presentation/p1/1-7.png",
  "/images/.presentation/p1/1-8.png",
  "/images/.presentation/p1/1-9.png",
];

const present2 = [
  "/images/.presentation/p2/2-1.png",
  "/images/.presentation/p2/2-2.png",
  "/images/.presentation/p2/2-3.png",
  "/images/.presentation/p2/2-4.png",
  "/images/.presentation/p2/2-5.png",
  "/images/.presentation/p2/2-6.png",
  "/images/.presentation/p2/2-7.png",
  "/images/.presentation/p2/2-8.png",
  "/images/.presentation/p2/2-9.png",
];

const present3 = [
  "/images/.presentation/p3/3-1.png",
  "/images/.presentation/p3/3-2.png",
  "/images/.presentation/p3/3-3.png",
  "/images/.presentation/p3/3-4.png",
  "/images/.presentation/p3/3-5.png",
  "/images/.presentation/p3/3-6.png",
  "/images/.presentation/p3/3-7.png",
  "/images/.presentation/p3/3-8.png",
  "/images/.presentation/p3/3-9.png",
  "/images/.presentation/p3/3-10.png",
];

  // escolhe qual array usar, dependendo de qual apresentação está aberta
  let imagensAtuais = present1;

  if (presentAberta === 1) {
    imagensAtuais = present2;
  }

  if (presentAberta === 2) {
    imagensAtuais = present3;
  }

  const totalDeImagens = Math.max(imagensAtuais.length, 1);

  function abrirVersao1() {
    setPresentAberta(0);
    setImgIndex(0);
  }

  function abrirVersao2() {
    setPresentAberta(1);
    setImgIndex(0);
  }

  function abrirVersao3() {
    setPresentAberta(2);
    setImgIndex(0);
  }

  function fecharCarousel() {
    setPresentAberta(null);
  }

  function proximaImagem() {
    // resto da divisão: se chegar no fim do array, volta pro índice 0 sozinho
    setImgIndex((imgIndex + 1) % totalDeImagens);
  }

  function imagemAnterior() {
    // soma o tamanho antes do resto pra nunca dar número negativo
    setImgIndex((imgIndex - 1 + totalDeImagens) % totalDeImagens);
  }

  return (
    <section id="prototipo" className="secao">
      <h2 className="titulo2">Prototipos</h2>
      <p className="texto">Conheca todas as versoes de VisuAll.</p>
      <h2 className="trad">Traducao de Libras em tempo real</h2>

      <div className="versions">
        <div className="version">
          <h3>Versao 1.0</h3>
          <p>
            Versao inicial com interpretacao em tempo real do alfabeto em Libras.
          </p>
          <button className="visualize1" onClick={abrirVersao1}>
            Visualizar Slides para Banca 1
          </button>
        </div>

        <div className="version">
          <h3>Versao 2.0</h3>
          <p>
            Versao atual que interpreta sinais de Libras gerais, utilizando
            movimentos manuais e faciais.
          </p>
          <button className="visualize2" onClick={abrirVersao2}>
            Visualizar Slides para Banca 2
          </button>
        </div>

        <div className="version">
          <h3>Versao 3.0</h3>
          <p>
            Versao com aplicativo Android funcional, utilizando Kotlin,
            CameraX e MediaPipe Holistic.
          </p>
          <button className="visualize3" onClick={abrirVersao3}>
            Visualizar Slides para Banca 3
          </button>
        </div>
      </div>

      <div className={`carousel ${presentAberta === null ? "hide" : ""}`}>
        <img src={imagensAtuais[imgIndex]} alt="Slide da apresentação" />
        <div className="botoes">
          {imagensAtuais.length > 1 && (
            <>
              <button onClick={imagemAnterior}>Anterior</button>
              <button onClick={proximaImagem}>Próxima</button>
            </>
          )}
          <button onClick={fecharCarousel}>Fechar</button>
        </div>
      </div>
    </section>
  );
}
