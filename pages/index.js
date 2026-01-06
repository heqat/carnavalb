import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react"; // Juntei os imports
import CardPalco from "../components/CardPalco";
import CardBloco from "../components/CardBloco";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { artistas } from "../components/data/artistasConfirmados"; // Verifique se o caminho está certo
import marca from "../public/marcasembezerros.png";
import marcaFundarpe from '../public/marca-fundarpe.png'
import marcaEmpetur from '../public/marca-empetur.png'
import marcaSecCultura from '../public/marca-seccultura.png'
import marcaSecTurismo from '../public/marca-secturismo.png'
import marcaDtel from '../public/marca-dtel.png'
import marcaSesc from '../public/marca-sesc.png'
import marcaCoca from '../public/marca-cocacola.png'
import marcaPitu from '../public/marca-pitu.png'
import marcaDevassa from '../public/marca-devassa.png'
import marcaPrefeitura from '../public/marca-prefeitura.png'
import VideoPlayer from "../components/VideoSection";

export default function Home() {

  const [busca, setBusca] = useState("");

  const [abaAtiva, setAbaAtiva] = useState('apresentacao');

  const artistasFiltrados = artistas.filter((artista) =>
    artista.nome.toLowerCase().includes(busca.toLowerCase())
  );

  useEffect(() => {
    const btnArrow = document.getElementById("btn-arrow");
    const sectionApresentacao = document.getElementById("apresentacao");
      
    function handleClickBtnArrow() {
      if(sectionApresentacao) {
        sectionApresentacao.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (btnArrow) {
      btnArrow.addEventListener("click", handleClickBtnArrow);
    }

    return () => {
      if (btnArrow) {
        btnArrow.removeEventListener("click", handleClickBtnArrow);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Carnaval 2026 - Bezerros-PE</title>
        <meta name="title" content="Carnaval 2026 - Bezerros-PE"></meta>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      </Head>

      <Navbar />

      <main>
        <section id="hero">
          <div
            className="bg-hero"
            data-parallax="scroll"
            data-image-src="/estacao.jpg"
          >
            <div className="container d-flex justify-content-center align-items-center">
              <Image
                className="bg-hero-marca"
                src={marca}
                alt="marca carnaval"
              ></Image>
            </div>
            <button type="button" id="btn-arrow" className="arrow-down">
              <i className="bx bx-chevron-down bx-fade-down display-1 text-white"></i>
            </button>
          </div>
        </section>
        
        <div className="divisoria"></div>

      <section 
          className={`hero-interativo d-flex flex-column align-items-center ${abaAtiva === 'apresentacao' ? 'bg-festa' : 'bg-homenageado'}`}
          style={{ minHeight: '85vh' }}
      >
        
                <div className="container d-flex justify-content-center pt-5 pb-4 position-relative" style={{ zIndex: 10 }}>
            <div className="toggle-container shadow-sm">
                <button 
                    className={`toggle-btn ${abaAtiva === 'apresentacao' ? 'ativo' : ''}`}
                    onClick={() => setAbaAtiva('apresentacao')}
                >
                    🎭 A FESTA
                </button>
                <button 
                    className={`toggle-btn ${abaAtiva === 'homenageado' ? 'ativo' : ''}`}
                    onClick={() => setAbaAtiva('homenageado')}
                >
                    🎶 HOMENAGEADOS
                </button>
            </div>
        </div>

   
        <div className="conteudo-fixo d-flex align-items-center justify-content-center w-100 flex-grow-1">
                              {abaAtiva === 'apresentacao' && (
                <div className="fade-in-animation w-100">
                     <div className='d-flex w-100 justify-content-center flex-column align-items-center'>
                        <div className='container d-flex flex-column justify-content-center align-items-center text-center text-white'>
                            <div className='mt-2 logog'></div>
                            <br></br>
                            <p className='m-apresentacao-texto'> 
                                Bem-vindos ao maior e melhor carnaval do interior do Brasil: o Carnaval do Papangu em Bezerros - Pernambuco. 
                                Os ritmos que unem gerações e tradição embalam a folia mais tradicional, autêntica, segura e familiar dos festejos carnavalescos. 
                            </p>
                            <p className='m-apresentacao-texto'> 
                                Você é nosso convidado especial para conhecer a magia dos nossos papangus, suas cores, ritmos, alegria contagiante 
                                e uma experiência que vai ficar para sempre em sua memória. BEZERROS ESPERA POR VOCÊ!!! 
                            </p>
                            <br></br>
                            <div className="button-container">
                                <a className="m-btn-historia m-apresentacao-texto" href="/historia">HISTÓRIA</a>
                                <a className="m-btn-historia m-apresentacao-texto" href="/servicos">SERVIÇOS</a>
                                <a className="m-btn-historia m-apresentacao-texto" href="/faq">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {abaAtiva === 'homenageado' && (
                <div className="fade-in-animation w-100">
                     <div className='container d-flex justify-content-center align-items-center flex-column'>
                        <div className="container-homenageado text-center text-white">
                            <br></br>
                            <div className="container-foto d-flex justify-content-center align-items-center mb-4">
                                <img src="/maestros.png" className="imagem-artista historia img-fluid" style={{maxHeight: '300px'}} alt="Maestros Homenageados"></img>
                            </div>
                            <div className="container-texto mt-3">
                                <p className="texto-artista"> 
                                    O Carnaval do Papangu 2025 presta sua homenagem aos músicos e maestros que são pessoas fundamentais para abrilhantar, 
                                    com suas orquestras e alegorias, os sons e ritmos que embalam o maior e melhor carnaval do interior do Brasil, 
                                    na Terra do Papangu, preservando nossa arte, cultura e história. Os “ritmos que unem gerações e tradição” promovem 
                                    a capacidade musical de perpetuar o espírito carnavalesco da essência de cada folião, conectando passado, 
                                    presente e futuro ao grande anfitrião dos festejos de momo: o Papangu. 
                                </p>
                                <p className="texto-artista">
                                    Bezerros lhe espera de braços abertos para fazer uma viagem sonora aos ritmos carnavalescos que homenageiam nossos 
                                    mestres da música que são, acima de tudo, professores de crianças, jovens, adultos e idosos, numa celebração atemporal 
                                    da musicalidade bezerrense, pernambucano e brasileira.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
      </section>


        <div className='divisoria'></div>

        <VideoPlayer />

        <div className='divisoria'></div>

        <section id="baile">
            <div className='d-flex w-100 justify-content-center flex-column align-items-center'>
                <div className='container d-flex flex-column justify-content-center align-items-center text-center mt-0 m-5 text-white'>
                    <div className='mt-5 logo-baile'></div>
                    <br></br>
                    <p className='m-baile-texto'>Já imaginou vivenciar uma noite de música vibrante, cores, ritmos e alegria em uma só festa? Vista sua fantasia e venha participar do mais tradicional baile carnavalesco do interior de Pernambuco. Este ano, nossa festa celebra a arte, história e tradição do nosso anfitrião, no fantástico ateliê do Papangu de Bezerros - Pernambuco. Participe conosco e se conecte ao universo do maior e melhor carnaval do interior do Brasil: o Carnaval do Papangu!!!</p>
                    <br></br>
                    <div className="button-container">
                        <a className="m-btn-baile m-apresentacao-botao" href="/baile-municipal">SAIBA MAIS!</a>
                        <a className="m-btn-baile m-apresentacao-botao" href="https://www.sympla.com.br/evento/21-baile-municipal-de-bezerros/2818440?qrcode=true&share_id=whatsapp " target="_blank">COMPRE SEU INGRESSO</a>
                    </div>
                </div>
            </div>
        </section>

        <div className='divisoria-laranja'></div>

              <section id="programacao" className="w-100 py-5">
            <div className="container">
                
                <div className="text-center mb-5">
                    <h1 className="m-titulo-secao">ATRAÇÕES</h1>
                </div>
                
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8 col-12">
                        <div className="input-group input-group-lg sombra-suave">
                            <span className="input-group-text bg-white border-0 ps-4">🔍</span>
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Quem você quer ver?"
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                style={{ borderRadius: '0 30px 30px 0', outline: 'none' }} 
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
                        <div className="text-center mt-3 w-100" style={{opacity: 0.8}}>
                            <p className='text-white'>Nenhum artista encontrado com "{busca}"</p>
                        </div>
                    )}
                </div>

            </div>
        </section>

        <div className="divisoria"></div>
        
        <section id='mapa'>
            <div className='d-flex flex-column justify-content-center align-items-center m-container-mapa'>
                <h2 className='m-titulo-secao mt-4 mb-4'>
                    <div className='ilustracao mapa'></div>
                    MAPA
                </h2>
              <iframe loading='lazy' className='mb-5 map-frame' width="100%" height="100%" src="https://www.google.com/maps/d/embed?mid=1FuFypVAyPR2kLnJPcIWUAxT3uaPzzs8&ehbc=2E312F"></iframe> </div>
        </section>

        <div className="divisoria"></div> 
{/*         <section>
            <div className='container d-flex flex-wrap align-items-center justify-content-center mt-3 pb-3'>
                <p className='texto-patrocinio mt-4 mb-4'>PATROCÍNIO:</p>
                <div className='container mb-4 d-flex flex-wrap gap-5 align-items-center justify-content-center'>
                    <Image src={marcaDevassa} height={100} alt="Devassa"></Image>
                    <Image src={marcaCoca} height={100} alt="Coca Cola"></Image>
                    <div className='border border-bottom border-1 w-100'></div>
                    <Image src={marcaPitu} height={50} alt="Pitu"></Image>
                    <Image src={marcaDtel} height={50} alt="Dtel"></Image>
                    <div className='border border-bottom border-1 w-100'></div>
                </div>

                <p className='texto-patrocinio'>APOIO INSTITUCIONAL:</p>
                <div className='container d-flex flex-wrap gap-5 align-items-center justify-content-center mb-5'>
                    <Image src={marcaFundarpe} height={80} alt="Fundarpe"></Image>
                    <Image src={marcaEmpetur} height={80} alt="Empetur"></Image>
                    <Image src={marcaSecCultura} height={80} alt="Sec Cultura"></Image>
                    <Image src={marcaSesc} height={80} alt="Sesc"></Image>
                </div>
                <div className='border border-bottom border-1 w-100'></div>

                <p className='texto-patrocinio'>REALIZAÇÃO:</p>
                <div className='container d-flex flex-wrap gap-5 align-items-center justify-content-center mb-5'>
                    <Image src={marcaPrefeitura} alt='marca prefeitura' height={100} />
                </div>
            </div>
        </section>

        <div className="divisoria"></div>
        */}

      </main>
      <Footer />
    </>
  );
}