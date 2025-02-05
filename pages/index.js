import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CardPalco from "../components/CardPalco";
import CardBloco from "../components/CardBloco";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
import marcaNathally from '../public/marca-nathally.png'
import marcaTvJornal from '../public/marca-tvjornal.png'
import VideoPlayer from "../components/VideoSection";


export default function Home() {
  useEffect(() => {
    const btnArrow = document.getElementById("btn-arrow");
    const sectionApresentacao = document.getElementById("apresentacao");

    function handleClickBtnArrow() {
      sectionApresentacao.scrollIntoView();
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
  <title>Carnaval 2025 - Bezerros-PE</title>
  <meta name="title" content="Carnaval 2025 - Bezerros-PE"></meta>
  <link rel="preload" as="style" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />



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

        <section id='apresentacao'>
          <div className='d-flex w-100 justify-content-center flex-column align-items-center'>
            <div className='container d-flex flex-column justify-content-center align-items-center text-center mt-0 m-5 text-white'>
              <div className='mt-5 logog'></div>
              <br></br>
              <p className='m-apresentacao-texto'> Bem-vindos ao maior e melhor carnaval do interior do Brasil: o Carnaval do Papangu em Bezerros - Pernambuco. Os ritmos que unem gerações e tradição embalam a folia mais tradicional, autêntica, segura e familiar dos festejos carnavalescos. </p>
              <p
               className='m-apresentacao-texto'> Você é nosso convidado especial para conhecer a magia dos nossos papangus, suas cores, ritmos, alegria contagiante e uma experiência que vai ficar para sempre em sua memória. BEZERROS ESPERA POR VOCÊ!!! </p>
               <br></br>
               <div className="button-container">
  <a className="m-btn-historia m-apresentacao-texto" href="/historia">HISTÓRIA</a>
  <a className="m-btn-historia m-apresentacao-texto" href="/servicos">SERVIÇOS</a>
  <a className="m-btn-historia m-apresentacao-texto" href="/faq">FAQ</a>
</div>

            </div>
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
              <a className="m-btn-baile m-apresentacao-botao" href="https://www.sympla.com.br/evento/21-baile-municipal-de-bezerros/2818440?qrcode=true&share_id=whatsapp " target="_blank">COMPRE SEU INGRESSO</a>
              

</div>

            </div>
          </div>
          </section>

          <div className='divisoria-laranja'></div>

<section id='homenageado' className='pt-4'>
  <div className='container d-flex justify-content-center align-items-center flex-column'>

    <div className="container-homenageado">
      <br></br>
    <div className="container-foto d-flex justify-content-center align-items-center">
                            <img src="/maestros.png" className="imagem-artista historia"></img>
                        </div>
      <div className="container-texto mt-5">
        <p className="texto-artista"> O Carnaval do Papangu 2025 presta sua homenagem aos músicos e maestros que são pessoas fundamentais para abrilhantar, com suas orquestras e alegorias, os sons e ritmos que embalam o maior e melhor carnaval do interior do Brasil, na Terra do Papangu, preservando nossa arte, cultura e história. Os “ritmos que unem gerações e tradição” promovem a capacidade musical de perpetuar o espírito carnavalesco da essência de cada folião, conectando passado, presente e futuro ao grande anfitrião dos festejos de momo: o Papangu. </p>
        <p className="texto-artista">Bezerros lhe espera de braços abertos para fazer uma viagem sonora aos ritmos carnavalescos que homenageiam nossos mestres da música que são, acima de tudo, professores de crianças, jovens, adultos e idosos, numa celebração atemporal da musicalidade bezerrense, pernambucano e brasileira.</p>
      </div>
    </div>

  </div>
</section>

<div className='divisoria'></div>

        <section id="programacao">
  <div className="">
    <div className="m-container-palcos-serra d-flex justify-content-center align-items-center flex-column">
      <div className="m-container-titulo">
        <h2 className="m-titulo-secao mt-5 text-center">ATRAÇÕES CONFIRMADAS</h2>
      </div>
      <div className="container mt-3">
        

        <div className="">
        <div className="container-programacao tab-content d-flex justify-content-center mb-5">
        <img src="/PROGRAMACAO.png" className="imagem-artista"></img>
      </div>
      </div>
    </div>

    <div className="divisoria"></div>

    <div className="d-flex justify-content-center align-items-center flex-column m-container-palcos-cidade">
      <h3 className="m-titulo-programacao">PRÉVIAS CARNAVAL DO PAPANGU</h3>
      <ul className="nav nav-tabs justify-content-center" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active m-button-programacaobloco" id="tab-02-02" data-bs-toggle="tab" data-bs-target="#pane-26-02" type="button" role="tab" aria-controls="pane-26-02" aria-selected="true">02/02</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-09-02" data-bs-toggle="tab" data-bs-target="#pane-27-02" type="button" role="tab" aria-controls="pane-27-02" aria-selected="false">09/02</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-16-02" data-bs-toggle="tab" data-bs-target="#pane-28-02" type="button" role="tab" aria-controls="pane-28-02" aria-selected="false">16/02</button>
      </li>
  
    </ul>

    <div className="tab-content d-flex justify-content-center mb-5">
      <div className="tab-pane fade show active" id="pane-26-02" role="tabpanel" aria-labelledby="tab-26-02">
        <div className=" d-flex justify-content-center flex-wrap">
          <CardBloco nome="Orquesta de Frevo + Pagode" horario="15 horas" dia="DOMINGO" categoria="PRÉVIA" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-27-02" role="tabpanel" aria-labelledby="tab-27-02">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="Orquesta de Frevo + Pagode" horario="15 horas" dia="DOMINGO" categoria="PRÉVIA" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-28-02" role="tabpanel" aria-labelledby="tab-28-02">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="Orquesta de Frevo + Pagode" horario="15 horas" dia="DOMINGO" categoria="PRÉVIA" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        </div>
      </div>
          </div>
  </div>

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
          <iframe loading='lazy' className='container mb-5' width="100%" height="100%" src="https://www.google.com/maps/d/embed?mid=1FuFypVAyPR2kLnJPcIWUAxT3uaPzzs8&ehbc=2E312F"></iframe>
        </div>
        </section>
      
    
      

        
        <div className="divisoria"></div>
      </main>
      <Footer />
    </>
  );
}
