import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { artistas } from "../components/data/artistasConfirmados";
// Importante: O componente novo deve ser importado aqui
import JustifiedText from "../components/JustifiedText";

import marca from "../public/marcasembezerros.png";
import marcaFundarpe from "../public/marca-fundarpe.png";
import marcaEmpetur from "../public/marca-empetur.png";
import marcaSecCultura from "../public/marca-seccultura.png";
import marcaSecTurismo from "../public/marca-secturismo.png";
import marcaDtel from "../public/marca-dtel.png";
import marcaSesc from "../public/marca-sesc.png";
import marcaCoca from "../public/marca-cocacola.png";
import marcaPitu from "../public/marca-pitu.png";
import marcaDevassa from "../public/marca-devassa.png";
import marcaPrefeitura from "../public/marca-prefeitura.png";

export default function Home() {
  const router = useRouter();
  const [busca, setBusca] = useState("");
  const [abaAtiva, setAbaAtiva] = useState("apresentacao");
  const [slideBaile, setSlideBaile] = useState(0); // 0 = Capa, 1 = Detalhes
  const [abaBaile, setAbaBaile] = useState("atracoes"); // 'atracoes' ou 'ingressos'
  const [videoRodando, setVideoRodando] = useState(false);

  const [mediaCaracteres, setMediaCaracteres] = useState(45);

  const baileViewportRef = useRef(null);

  useEffect(() => {
    const ajustarAltura = () => {
      const viewport = baileViewportRef.current;
      const isMobile = window.innerWidth < 992;

      if (viewport && isMobile) {
        // Pega o slide atual
        const slides = viewport.querySelectorAll(".baile-slide");
        const slideAtivo = slides[slideBaile];

        if (slideAtivo) {
          // Vamos medir o primeiro filho direto (o container ou o card)
          const conteudo = slideAtivo.firstElementChild;

          if (conteudo) {
            // Pega a altura total do elemento
            const alturaConteudo = conteudo.offsetHeight;

            // Adiciona uma folga generosa (100px) para compensar paddings do pai e sombras
            // Essa folga extra é o que vai impedir o corte embaixo
            viewport.style.height = `${alturaConteudo + 100}px`;
          }
        }
      } else if (viewport) {
        viewport.style.height = "";
      }
    };

    ajustarAltura();
    window.addEventListener("resize", ajustarAltura);

    // Pequenos delays para garantir que a renderização terminou
    const timer1 = setTimeout(ajustarAltura, 50);
    const timer2 = setTimeout(ajustarAltura, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", ajustarAltura);
    };
  }, [slideBaile, abaBaile]); // Mantém as dependências

  useEffect(() => {
    const definirMedia = () => {
      if (window.innerWidth < 768) {
        setMediaCaracteres(45);
      } else {
        setMediaCaracteres(75);
      }
    };

    definirMedia();
    window.addEventListener("resize", definirMedia);

    return () => window.removeEventListener("resize", definirMedia);
  }, []);

  const artistasFiltrados = artistas.filter((artista) => {
    return artista.nome.toLowerCase().includes(busca.toLowerCase());
  });

  const handleScrollDown = () => {
    const nextSection = document.getElementById("baile");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalResultados = artistasFiltrados.length;

  const organizarLineup = (listaDeArtistas) => {
    const linhas = [];
    let linhaAtual = [];
    let caracteresNaLinha = 0;

    const poucosResultados = listaDeArtistas.length <= 6;

    listaDeArtistas.forEach((artista) => {
      const tamanhoNome = artista.nome.length;

      if (poucosResultados && linhaAtual.length >= 2) {
        linhas.push(linhaAtual);
        linhaAtual = [];
        caracteresNaLinha = 0;
      }

      if (
        linhaAtual.length > 0 &&
        caracteresNaLinha + tamanhoNome > mediaCaracteres
      ) {
        linhas.push(linhaAtual);
        linhaAtual = [];
        caracteresNaLinha = 0;
      }

      linhaAtual.push(artista.nome);
      caracteresNaLinha += tamanhoNome + 3; // + separador " • "
    });

    if (linhaAtual.length > 0) {
      linhas.push(linhaAtual);
    }

    return linhas;
  };

  const lineupOrganizado = organizarLineup(artistasFiltrados);

  return (
    <>
      <Head>
        <title>Carnaval 2026 - Bezerros-PE</title>
        <meta name="title" content="Carnaval 2026 - Bezerros-PE"></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main>
        <section
          className={`hero-interativo d-flex flex-column align-items-center ${
            abaAtiva === "apresentacao" ? "bg-festa" : "bg-homenageado"
          }`}
        >
          <div
            className="container d-flex justify-content-center mt-3 position-relative"
            style={{ zIndex: 10, flex: "0 0 auto" }}
          >
            <div className="toggle-container shadow-sm">
              <button
                className={`toggle-btn ${
                  abaAtiva === "apresentacao" ? "ativo" : ""
                }`}
                onClick={() => setAbaAtiva("apresentacao")}
              >
                🎭 A FESTA
              </button>
              <button
                className={`toggle-btn ${
                  abaAtiva === "homenageado" ? "ativo" : ""
                }`}
                onClick={() => setAbaAtiva("homenageado")}
              >
                🎉 HOMENAGEADA
              </button>
            </div>
          </div>

          <div className="container conteudo-fixo w-100 flex-grow-1 d-flex justify-content-center position-relative">
            {abaAtiva === "apresentacao" && (
              <div className="fade-in-animation w-100">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 col-12 text-white text-center mb-4 mb-lg-0">
                    <div className="logog mx-auto mb-3"></div>
                    <p className="m-apresentacao-texto">
                      Bem-vindos ao maior e melhor carnaval do interior do
                      Brasil: o Carnaval do Papangu em Bezerros - Pernambuco.
                      Repleto de “História, Movimento e Encanto”, o nosso
                      carnaval é autêntico, multicultural, seguro, familiar,
                      inclusivo, sustentável e diverso.
                    </p>
                    <p className="m-apresentacao-texto">
                      Você é nosso convidado especial para conhecer de perto a
                      magia dos nossos papangus.
                      <strong> BEZERROS ESPERA POR VOCÊ!!! </strong>
                    </p>
                    <div className="button-container justify-content-center mt-3">
                      <a className="m-btn-historia" href="/historia">
                        HISTÓRIA
                      </a>
                      <a className="m-btn-historia" href="/servicos">
                        SERVIÇOS
                      </a>
                      <a className="m-btn-historia" href="/faq">
                        FAQ
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="video-wrapper shadow-lg">
                      {!videoRodando ? (
                        <div
                          className="video-capa d-flex justify-content-center align-items-center flex-column"
                          onClick={() => setVideoRodando(true)}
                        >
                          <button className="m-btn-play-video">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              fill="white"
                              className="bi bi-play-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.89 2.59a.5.5 0 0 1 0 .814l-3.89 2.59a.5.5 0 0 1-.52-.038l-.001-4.016z" />
                            </svg>
                          </button>
                          <span className="texto-ver-video mt-3">
                            ASSISTA AO VÍDEO
                          </span>
                        </div>
                      ) : (
                        <iframe
                          className="hero-video-frame"
                          src="https://www.youtube.com/embed/U3bWmghjFoE?si=osIz3G4vE0rtyJRe?autoplay=1"
                          title="Vídeo Carnaval Bezerros"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {abaAtiva === "homenageado" && (
              <div className="fade-in-animation w-100 h-100">
                <div className="row align-items-center justify-content-center h-100">
                  <div className="col-lg-12 col-12 d-flex justify-content-center">
                    {" "}
                    <div className="hero-homenageado-wrapper">
                      <div className="hero-homenageado-foto"></div>

                      <div className="hero-homenageado-card text-white text-center">
                        <div className="homenageado-header">
                          <div className="homenageado-nome">
                            <h3>MILEIDE</h3>
                          </div>

                          <div className="homenageado-spacer"></div>

                          <div className="homenageado-selo">
                            <span className="badge-patrimonio">
                              HOMENAGEADA 2026
                            </span>
                          </div>
                        </div>

                        <div className="hero-homenageado-texto">
                          <p className="texto-artista">
                            O Carnaval do Papangu 2026 presta homenagem a
                            Mileide Santos, artista da terra que comanda o grupo
                            FolcPopular há 25 anos. À frente de um projeto
                            transformador, Mileide impacta a vida de pessoas
                            apaixonadas pela dança e pela cultura popular, que
                            ajudam a embalar o maior e melhor carnaval do
                            interior do Brasil.
                          </p>
                          <p className="texto-artista">
                            Bezerros lhe espera de braços abertos para curtir
                            com a gente uma festa plural, feita para todos os
                            públicos e para todas as formas de viver o Carnaval.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="arrow-down"
            onClick={handleScrollDown}
          >
            <i className="bx bx-chevron-down bx-fade-down display-1 text-white"></i>
          </button>
        </section>
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
        <section id="baile">
          <div className="baile-viewport" ref={baileViewportRef}>
            {" "}
            {slideBaile === 1 && (
              <button
                className="btn-corner-toggle voltar"
                onClick={() => setSlideBaile(0)}
              >
                <i className="bx bx-left-arrow-alt"></i>
              </button>
            )}
            <div
              className="baile-slider-wrapper"
              style={{ transform: `translateX(-${slideBaile * 100}vw)` }}
            >
              <div className="baile-slide">
                <div className="container position-relative d-flex flex-column justify-content-center">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-12 text-white text-center mb-4 mb-lg-0 fade-in-animation">
                      <div className="logo-baile mx-auto mb-3"></div>

                      <p className="m-baile-texto">
                        Bezerros possui um dos mais tradicionais e autênticos
                        bailes carnavalescos do interior de Pernambuco,
                        celebrando emoções, histórias, saudades, cores, ritmos e
                        alegria no Carnaval do Papangu. Este ano, o evento tem
                        como tema “O encanto do Papangu no país do frevo e do
                        futebol” e presta homenagem aos profissionais de dança
                        (artistas, educadores, coreógrafos e grupos culturais)
                        como instrumentos de força cultural, formação cidadã e
                        expressão coletiva.
                      </p>

                      <div className="button-container-baile d-flex justify-content-center gap-3 mt-3">
                        <a
                          className="m-btn-baile destaque"
                          href="https://www.sympla.com.br/evento/22-baile-municipal-de-bezerros/3269711r"
                          target="_blank"
                        >
                          GARANTIR INGRESSO
                        </a>

                        <button
                          className="m-btn-baile"
                          onClick={() => {
                            setSlideBaile(1);
                            setAbaBaile("detalhes");
                          }}
                        >
                          MAIS INFORMAÇÕES
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center fade-in-animation">
                      <div className="baile-lineup-card"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="baile-slide">
                <div className="baile-card-vidro">
                  <div className="baile-controls">
                    <div className="toggle-container">
                      <button
                        className={`toggle-btn ${
                          abaBaile === "detalhes" ? "ativob" : ""
                        }`}
                        onClick={() => setAbaBaile("detalhes")}
                      >
                        ℹ️ DETALHES GERAIS
                      </button>
                      <button
                        className={`toggle-btn ${
                          abaBaile === "homenageado" ? "ativob" : ""
                        }`}
                        onClick={() => setAbaBaile("homenageado")}
                      >
                        🌟 HOMENAGEADOS
                      </button>
                    </div>
                  </div>

                  {abaBaile === "detalhes" && (
                    <div className="baile-tab-content detalhes-duas-colunas fade-in-animation">
                      <div className="detalhes-col">
                        <h4>LOCAL E DATA</h4>
                        <p>
                          Clube Literário Rui Barbosa - Bairro do Cruzeiro.{" "}
                        </p>
                        <p>Sábado, dia 07/02, a partir das 21h </p>

                        <h4>INGRESSOS</h4>
                        <p>
                          Vendas pelo Sympla e em Point Card Bezerros (Auciene
                          dos Cartões), Rua Coronel Bezerra, Centro,
                          Bezerros.{" "}
                        </p>
                        <p>
                          {" "}
                          Obs.: Para os ingressos "Área Comum (Social)" a
                          entrada será mediante a entrega de 1Kg de alimento não
                          perecível
                        </p>
                      </div>

                      <div className="detalhes-col">
                        <h4>MESAS E CAMAROTES </h4>
                        <p>
                          Para aquisição de mesas e camarotes consultar
                          disponibilidade em Point Card Bezerros (Auciene dos
                          Cartões).
                        </p>
                        <p> </p>
                      </div>
                    </div>
                  )}

                  {abaBaile === "homenageado" && (
                    <div className="baile-tab-content homenageado-layout fade-in-animation">
                      <div className="homenageado-bio">
                        <h3>PROFISSIONAIS DE DANÇA</h3>
                        <span className="badge-patrimonio">
                          HOMENAGEADOS 2026
                        </span>
                        <div className="hero-homenageado-texto">
                          <p className="texto-artista">
                            O Baile Municipal deste ano é um tributo a quem
                            transforma o Carnaval em experiência. Profissionais
                            da dança que fazem da música um gesto coletivo, do
                            corpo uma linguagem e da folia uma manifestação
                            artística que pulsa nas ruas.
                          </p>
                          <p className="texto-artista">
                            {" "}
                            A homenagem se estende a nomes que há anos ajudam a
                            construir o espetáculo do Carnaval do Papangu, como
                            Jefferson, Bruno, Ianka, Ana Paula, Carlos Marques,
                            Clécio, Silvani Kika, Marcos Tota, Luizinho Moreno,
                            Equilaine, Jonathan, Arthur Bruno e Cláudio.
                            Artistas que, com presença e dedicação, seguem
                            levando movimento, identidade e emoção para a festa.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>

        {/* --- SEÇÃO PROGRAMAÇÃO --- */}
        <section id="programacao" className="py-5">
          <div className="container">
            <h2 className="m-titulo-programacao mb-5">ATRAÇÕES CONFIRMADAS</h2>

            {/* BARRA DE BUSCA 
            <div className="search-container-center mb-5">
              <div className="search-box-individual">
                <i className="bx bx-search"></i>
                <input
                  type="text"
                  placeholder="Pesquisar atração..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
            </div>
            */}

            <div className="lineup-poster-container">
              {lineupOrganizado.map((linha, index) => (
                <JustifiedText
                  key={index}
                  text={linha.join(" • ")}
                  className="text-white"
                />
              ))}
            </div>
          </div>
        </section>
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>

        <section
          id="bloco"
          className="bloco-section d-flex align-items-center justify-content-center text-center"
        >
          <div className="container">
            <h2 className="m-titulo-programacao mb-4 text-white">BLOCOS</h2>
            <p className="bloco-aviso text-white">MAIS INFORMAÇÕES EM BREVE!</p>
          </div>
        </section>

        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>

        <section id="mapa">
          <div className="d-flex flex-column justify-content-center align-items-center m-container-mapa">
            <h2 className="m-titulo-secao mt-4 mb-4">
              <div className="ilustracao mapa"></div>
              MAPA
            </h2>
            <iframe
              loading="lazy"
              className="mb-5 map-frame"
              src="https://www.google.com/maps/d/embed?mid=1FuFypVAyPR2kLnJPcIWUAxT3uaPzzs8&ehbc=2E312F"
            ></iframe>
          </div>
        </section>

        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>

        <section id="patrocinio" className="py-4">
          <div className="container d-flex justify-content-center">
            <Image
              src="/regua.png"
              alt="Patrocinadores, Apoio e Realização"
              width={1200}
              height={300}
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "800px",
              }}
            />
          </div>
        </section>

        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
      </main>
      <Footer />
    </>
  );
}
