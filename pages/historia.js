import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Historia() {
  const [activeId, setActiveId] = useState("");

  const slides = [
    {
      id: "origem",
      ano: "1900",
      titulo: "A Origem",
      texto:
        "Em meados dos anos de 1900, alguns amigos tiveram a ideia de fazer uma simples brincadeira: sair às ruas da cidade com roupas arranjadas e o rosto totalmente coberto para ninguém identificar quem estava por trás da fantasia. Os 'mascarados' passavam de casa em casa pedindo angu de milho, criando um mistério delicioso sobre suas identidades.",
    },
    {
      id: "nome",
      ano: "O NOME",
      titulo: "Surge o Papangu",
      texto:
        "O tempo passou e a brincadeira ganhou vida entre os moradores. Quando os mascarados surgiam nas ruas para pedir a comida, as crianças gritavam para seus familiares: 'Lá vem os papa-angu!'. Foi dessa expressão popular que surgiu o tradicional nome do Papangu, hoje o grande anfitrião do carnaval de Bezerros.",
    },
    {
      id: "hoje",
      ano: "HOJE",
      titulo: "Patrimônio Cultural",
      texto:
        "Saindo em blocos ou sozinhos, os Papangus deram origem ao maior e melhor bloco de carnaval do interior do Brasil. O anfitrião foi declarado Patrimônio Cultural Imaterial de Pernambuco, eternizado em fantasias, xilogravuras e músicas que traduzem nossa riqueza cultural para os quatro cantos do mundo.",
    },
    {
      id: "fase1",
      ano: "FASES 1-2",
      titulo: "Do Angu ao Papel",
      texto:
        "A história registra seis fases de evolução. A 1ª fase (1900) era a busca pelo angu, servido puro ou com carne. A 2ª fase marca o surgimento da máscara confeccionada improvisadamente com papel de embrulhar charque, feita de forma simples, sem qualquer preocupação com a beleza estética.",
    },
    {
      id: "fase3",
      ano: "FASES 3-4",
      titulo: "Tecidos e Cores",
      texto:
        "A 3ª fase dá vida à máscara de tecido, inicialmente produzida criativamente com fronhas de travesseiro. Já na 4ª fase, a folia ganha cores vibrantes a partir da introdução da técnica do papel colê, permitindo novas formas de expressão.",
    },
    {
      id: "fase5",
      ano: "FASES 5-6",
      titulo: "A Arte Final",
      texto:
        "O famoso 'Cabeção' entra na 5ª fase, levando alegria em seus traços exagerados. Por fim, chegamos a todo o encantamento da 6ª fase, com as máscaras de papel machê, verdadeiras obras de arte que são as mais tradicionais e valorizadas nos dias de hoje.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    slides.forEach((slide) => {
      const element = document.getElementById(slide.id);
      if (element) observer.observe(element);
    });

    const footerElement = document.getElementById("footer");
    if (footerElement) observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>História - Carnaval 2026</title>
      </Head>

      <Navbar />

      <div className="historia-wrapper">
        <div className="background-fixed"></div>
        <div className="background-overlay"></div>

        <div className="scroll-indicators">
          {slides.map((slide) => (
            <a href={`#${slide.id}`} key={slide.id} className="indicator-group">
              <span className="indicator-label">{slide.titulo}</span>
              <div
                className={`indicator-dot ${
                  activeId === slide.id ? "active" : ""
                }`}
              ></div>
            </a>
          ))}

          {/* Indicador do Footer */}
          <a href="#footer" className="indicator-group">
            <span className="indicator-label">Rodapé</span>
            <div
              className={`indicator-dot ${
                activeId === "footer" ? "active" : ""
              }`}
            ></div>
          </a>
        </div>

        {/* --- SLIDES --- */}
        {slides.map((slide) => (
          <section id={slide.id} key={slide.id} className="historia-section">
            <div className="historia-card">
              <span className="historia-ano">{slide.ano}</span>
              <h2 className="historia-titulo">{slide.titulo}</h2>
              <p className="historia-texto">{slide.texto}</p>

              <img
                src="/ornamento.svg"
                alt="Detalhe"
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "-30px",
                  width: "100px",
                  opacity: 0.2,
                  transform: "rotate(-15deg)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </section>
        ))}

        <section
          id="footer"
          className="historia-section"
          style={{ height: "auto", padding: 0, minWidth: "100vw" }}
        >
          <div style={{ width: "100%" }}>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
