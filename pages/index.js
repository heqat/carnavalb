import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { artistas } from "../components/data/artistasConfirmados";
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
  const router = useRouter(); // Inicializa o router
  const [busca, setBusca] = useState("");
  const [abaAtiva, setAbaAtiva] = useState("apresentacao");
  const [slideBaile, setSlideBaile] = useState(0); // 0 = Capa, 1 = Detalhes
  const [abaBaile, setAbaBaile] = useState("atracoes"); // 'atracoes' ou 'ingressos'
  const [videoRodando, setVideoRodando] = useState(false);

  useEffect(() => {
    if (router.isReady && router.query.busca) {
      setBusca(router.query.busca);
    }
  }, [router.isReady, router.query.busca]);

  const artistasFiltrados = artistas.filter((artista) =>
    artista.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const handleScrollDown = () => {
    const nextSection = document.getElementById("baile");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                🎶 HOMENAGEADOS
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
                      Brasil: o Carnaval do Papangu em Bezerros - Pernambuco. Os
                      ritmos que unem gerações e tradição embalam a folia mais
                      tradicional, autêntica, segura e familiar.
                    </p>
                    <p className="m-apresentacao-texto">
                      Você é nosso convidado especial para conhecer a magia dos
                      nossos papangus, suas cores, ritmos e alegria contagiante.
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
                          src="https://www.youtube.com/embed/SEU_ID_AQUI?autoplay=1"
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
              <div className="fade-in-animation w-100">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="container-homenageado text-center text-white">
                    <div className="container-foto d-flex justify-content-center align-items-center mb-3">
                      <img
                        src="/maestros.png"
                        className="imagem-artista historia img-fluid"
                        style={{ maxHeight: "35vh" }}
                        alt="Maestros Homenageados"
                      ></img>
                    </div>
                    <div
                      className="container-texto mt-2"
                      style={{ maxWidth: "900px" }}
                    >
                      <p className="texto-artista">
                        O Carnaval do Papangu 2025 presta sua homenagem aos
                        músicos e maestros que são pessoas fundamentais para
                        abrilhantar, com suas orquestras e alegorias, os sons e
                        ritmos que embalam o maior e melhor carnaval do interior
                        do Brasil.
                      </p>
                      <p className="texto-artista">
                        Bezerros lhe espera de braços abertos para fazer uma
                        viagem sonora aos ritmos carnavalescos que homenageiam
                        nossos mestres da música, numa celebração atemporal da
                        musicalidade pernambucana.
                      </p>
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
          {/* BOTÃO DE NAVEGAÇÃO */}
          <button
            className={`btn-corner-toggle ${slideBaile === 1 ? "voltar" : ""}`}
            onClick={() => {
              if (slideBaile === 0) {
                setSlideBaile(1);
                setAbaBaile("detalhes"); // já garante tela 2 em detalhes
              } else {
                setSlideBaile(0);
              }
            }}
          >
            <i
              className={`bx ${
                slideBaile === 0 ? "bx-right-arrow-alt" : "bx-left-arrow-alt"
              }`}
            ></i>
          </button>

          {/* VIEWPORT DO SLIDER */}
          <div className="baile-viewport">
            <div
              className="baile-slider-wrapper"
              style={{ transform: `translateX(-${slideBaile * 100}vw)` }}
            >
              {/* --- TELA 1 DO BAILE (CAPA) --- */}
              <div className="baile-slide">
                {/* REMOVIDO d-flex do container para não quebrar o Grid */}
                <div className="container h-100 position-relative">
                  {/* row h-100 para centralizar verticalmente as colunas */}
                  <div className="row h-100 align-items-center justify-content-center">
                    {/* COLUNA ESQUERDA (Texto) */}
                    <div className="col-12 col-lg-6 text-center text-lg-start mb-5 mb-lg-0 fade-in-animation">
                      <div className="logo-baile mx-auto mx-lg-0"></div>

                      <p className="m-baile-texto">
                        Prepare sua fantasia! O baile mais tradicional do
                        interior está de volta. Uma noite de frevo, cultura e
                        alegria no Clube Literário.
                      </p>

                      <div className="button-container-baile d-flex justify-content-center justify-content-lg-start">
                        <a
                          className="m-btn-baile destaque"
                          href="https://www.sympla.com.br"
                          target="_blank"
                        >
                          GARANTIR INGRESSO
                        </a>
                      </div>
                    </div>

                    {/* COLUNA DIREITA (Card) */}
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center fade-in-animation">
                      <div className="baile-lineup-card shadow-lg">
                        <div className="lineup-header">
                          <i className="bx bxs-music"></i> LINE-UP
                        </div>
                        <div className="lineup-list">
                          <span>ALCEU VALENÇA</span>
                          <span>ELBA RAMALHO</span>
                          <span>MAESTRO FORRÓ</span>
                          <span>ORQ. TROPICANA</span>
                        </div>
                        <div className="lineup-footer">
                          *Programação sujeita a alterações
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- TELA 2 --- */}
              <div className="baile-slide">
                <div className="baile-card-vidro">
                  <div className="baile-controls">
                    <div className="toggle-container">
                      <button
                        className={`toggle-btn ${
                          abaBaile === "detalhes" ? "ativo" : ""
                        }`}
                        onClick={() => setAbaBaile("detalhes")}
                      >
                        ℹ️ DETALHES GERAIS
                      </button>
                      <button
                        className={`toggle-btn ${
                          abaBaile === "homenageado" ? "ativo" : ""
                        }`}
                        onClick={() => setAbaBaile("homenageado")}
                      >
                        🌟 HOMENAGEADO
                      </button>
                    </div>
                  </div>

                  {abaBaile === "detalhes" && (
                    <div className="baile-tab-content info-grid fade-in-animation">
                      {/* ... seu conteúdo */}
                    </div>
                  )}

                  {abaBaile === "homenageado" && (
                    <div className="baile-tab-content homenageado-layout fade-in-animation">
                      {/* ... seu conteúdo */}
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

        <section id="programacao" className="w-100 py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="m-titulo-secao">ATRAÇÕES</h1>
            </div>

            <div className="row justify-content-center mb-4">
              <div className="col-md-8 col-12">
                <div className="input-group input-group-lg sombra-suave">
                  <span className="input-group-text bg-white border-0 ps-4">
                    🔍
                  </span>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Quem você quer ver?"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    style={{ borderRadius: "0 30px 30px 0", outline: "none" }}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              {artistasFiltrados.length > 0 ? (
                artistasFiltrados.map((artista) => (
                  <span key={artista.id} className="tag-artista">
                    {artista.nome}
                  </span>
                ))
              ) : (
                <div
                  className="text-center mt-3 w-100"
                  style={{ opacity: 0.8 }}
                >
                  <p className="text-white">
                    Nenhum artista encontrado com "{busca}"
                  </p>
                </div>
              )}
            </div>
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
      </main>
      <Footer />
    </>
  );
}
