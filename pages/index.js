import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CardPalco from "../components/CardPalco";
import CardBloco from "../components/CardBloco";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import marca from "../public/LOGO.png";
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
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


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
              <div className='mt-5 papangu'></div>
              <br></br>
              <p className='m-apresentacao-texto'>Descubra a magia do carnaval de Bezerros - uma festa única repleta de cultura, tradição, muita animação e claro, papangus!</p>
              <p
               className='m-apresentacao-texto'> Venha se encantar com os papangus, foliões, as cores vibrantes e a alegria contagiante desta festa inesquecível!</p>
               <br></br>
               <div class="button-container">
  <a class="m-btn-historia m-apresentacao-texto" href="/historia">HISTÓRIA</a>
  <a class="m-btn-historia m-apresentacao-texto" href="/servicos">SERVIÇOS</a>
  <a class="m-btn-historia m-apresentacao-texto" href="/faq">FAQ</a>
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
              <p className='m-baile-texto'>Descubra a magia do carnaval de Bezerros - uma festa única repleta de cultura, tradição, muita animação e claro, papangus!</p>
              <p
               className='m-baile-texto'> Venha se encantar com os papangus, foliões, as cores vibrantes e a alegria contagiante desta festa inesquecível!</p>
               <br></br>
               <div class="button-container">
               <a class="m-btn-baile m-apresentacao-botao" href="/baile-municipal">SAIBA MAIS</a>
  <a class="m-btn-baile m-apresentacao-botao" href="/baile-municipal/#ingressos-baile">COMPRE SEU INGRESSO</a>

</div>

            </div>
          </div>
          </section>

          <div className='divisoria'></div>

<section id='homenageado' className='pt-4'>
  <div className='container d-flex justify-content-center align-items-center flex-column'>

    <div className="container-homenageado">
      <div className="container-foto">
        <img src="/homenageado.png" className="imagem-artista"></img>
      </div>
      <div className="container-texto mt-5">
        <h2 className="m-titulo-secao text-center programacao">HOMENAGEADO</h2>

        <p className="texto-artista"> EM BREVE... </p>
    
      </div>
    </div>

  </div>
</section>

<div className='divisoria'></div>

        <section id="programacao">
  <div className="">
    <div className="m-container-palcos-serra d-flex justify-content-center align-items-center flex-column">
      <div className="m-container-titulo">
        <h2 className="m-titulo-secao mt-5 text-center">PROGRAMAÇÃO</h2>
        <h3 className="m-titulo-programacao">POLO</h3>
      </div>
      <div className="container mt-3">
        <ul className="nav nav-tabs justify-content-center" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active m-button-programacao palcos"
              id="palcos-qg-tab"
              data-bs-toggle="tab"
              data-bs-target="#palcos-qg-pane"
              type="button"
              role="tab"
              aria-controls="palcos-qg-pane"
              aria-selected="true"
            >
              PALCO QG DO FREVO
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link m-button-programacao palcos"
              id="palcos-cultural-tab"
              data-bs-toggle="tab"
              data-bs-target="#palcos-cultural-pane"
              type="button"
              role="tab"
              aria-controls="palcos-cultural-pane"
              aria-selected="false"
            >
              PALCO CULTURAL
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link m-button-programacao palcos"
              id="palcos-centenaria-tab"
              data-bs-toggle="tab"
              data-bs-target="#palcos-centenaria-pane"
              type="button"
              role="tab"
              aria-controls="palcos-centenaria-pane"
              aria-selected="false"
            >
              PALCO CENTENÁRIA
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link m-button-programacao palcos"
              id="palcos-sebastiao-tab"
              data-bs-toggle="tab"
              data-bs-target="#palcos-sebastiao-pane"
              type="button"
              role="tab"
              aria-controls="palcos-sebastiao-pane"
              aria-selected="false"
            >
              PALCO SÃO SEBASTIÃO
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link m-button-programacao palcos"
              id="palcos-forro-tab"
              data-bs-toggle="tab"
              data-bs-target="#palcos-forro-pane"
              type="button"
              role="tab"
              aria-controls="palcos-forro-pane"
              aria-selected="false"
            >
              PALCO FORRÓ DO PAPANGU
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link m-button-programacao palcos"
              id="palcos-espaco-tab"
              data-bs-toggle="tab"
              data-bs-target="#palcos-espaco-pane"
              type="button"
              role="tab"
              aria-controls="palcos-espaco-pane"
              aria-selected="false"
            >
              PALCO ESPAÇO DO FREVO
            </button>
          </li>
        </ul>

        <div className="tab-content d-flex justify-content-center mb-5">
          <div
            className="tab-pane fade show active"
            id="palcos-qg-pane"
            role="tabpanel"
            aria-labelledby="palcos-qg-tab"
            tabIndex="0"
          >
            <div className="d-flex justify-content-center flex-wrap">
              <CardPalco nome={["EM BREVE"]} horario={["HORÁRIO"]} dia="DOMINGO" data="01/03" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="palcos-cultural-pane"
            role="tabpanel"
            aria-labelledby="palcos-cultural-tab"
            tabIndex="0"
          >
            <div className="d-flex justify-content-center flex-wrap">
            <CardPalco nome={["EM BREVE"]} horario={["HORÁRIO"]} dia="DOMINGO" data="01/03" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="palcos-centenaria-pane"
            role="tabpanel"
            aria-labelledby="palcos-centenaria-tab"
            tabIndex="0"
          >
            <div className="d-flex justify-content-center flex-wrap">
            <CardPalco nome={["EM BREVE"]} horario={["HORÁRIO"]} dia="DOMINGO" data="01/03" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="palcos-sebastiao-pane"
            role="tabpanel"
            aria-labelledby="palcos-sebastiao-tab"
            tabIndex="0"
          >
            <div className="d-flex justify-content-center flex-wrap">
            <CardPalco nome={["EM BREVE"]} horario={["HORÁRIO"]} dia="DOMINGO" data="01/03" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="palcos-forro-pane"
            role="tabpanel"
            aria-labelledby="palcos-forro-tab"
            tabIndex="0"
          >
            <div className="d-flex justify-content-center flex-wrap">
            <CardPalco nome={["EM BREVE"]} horario={["HORÁRIO"]} dia="DOMINGO" data="01/03" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="palcos-espaco-pane"
            role="tabpanel"
            aria-labelledby="palcos-espaco-tab"
            tabIndex="0"
          >
            <div className="d-flex justify-content-center flex-wrap">
            <CardPalco nome={["EM BREVE"]} horario={["HORÁRIO"]} dia="DOMINGO" data="01/03" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="divisoria"></div>

    <div className="d-flex justify-content-center align-items-center flex-column m-container-palcos-cidade">
      <h3 className="m-titulo-programacao">BLOCOS</h3>
      <ul className="nav nav-tabs justify-content-center" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active m-button-programacaobloco" id="tab-26-02" data-bs-toggle="tab" data-bs-target="#pane-26-02" type="button" role="tab" aria-controls="pane-26-02" aria-selected="true">26/02</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-27-02" data-bs-toggle="tab" data-bs-target="#pane-27-02" type="button" role="tab" aria-controls="pane-27-02" aria-selected="false">27/02</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-28-02" data-bs-toggle="tab" data-bs-target="#pane-28-02" type="button" role="tab" aria-controls="pane-28-02" aria-selected="false">28/02</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-01-03" data-bs-toggle="tab" data-bs-target="#pane-01-03" type="button" role="tab" aria-controls="pane-01-03" aria-selected="false">01/03</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-02-03" data-bs-toggle="tab" data-bs-target="#pane-02-03" type="button" role="tab" aria-controls="pane-02-03" aria-selected="false">02/03</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-03-03" data-bs-toggle="tab" data-bs-target="#pane-03-03" type="button" role="tab" aria-controls="pane-03-03" aria-selected="false">03/03</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-04-03" data-bs-toggle="tab" data-bs-target="#pane-04-03" type="button" role="tab" aria-controls="pane-04-03" aria-selected="false">04/03</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-button-programacaobloco" id="tab-05-03" data-bs-toggle="tab" data-bs-target="#pane-05-03" type="button" role="tab" aria-controls="pane-05-03" aria-selected="false">05/03</button>
      </li>
    </ul>

    <div className="tab-content d-flex justify-content-center mb-5">
      <div className="tab-pane fade show active" id="pane-26-02" role="tabpanel" aria-labelledby="tab-26-02">
        <div className=" d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="QUARTA-FEIRA" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-27-02" role="tabpanel" aria-labelledby="tab-27-02">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="12:00" dia="QUINTA-FEIRA" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-28-02" role="tabpanel" aria-labelledby="tab-28-02">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="SEXTA-FEIRA" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-01-03" role="tabpanel" aria-labelledby="tab-01-03">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="SÁBADO" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-02-03" role="tabpanel" aria-labelledby="tab-02-03">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="DOMINGO" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-03-03" role="tabpanel" aria-labelledby="tab-03-03">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="SEGUNDA" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-04-03" role="tabpanel" aria-labelledby="tab-04-03">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="TERÇA" categoria="BLOCO" localizacao="Localização" mapa="#" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-05-03" role="tabpanel" aria-labelledby="tab-05-03">
        <div className="d-flex justify-content-center flex-wrap">
          <CardBloco nome="EM BREVE" horario="Horário" dia="QUARTA-FEIRA" categoria="BLOCO" localizacao="Localização" mapa="#" />
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
