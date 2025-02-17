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
              <CardPalco nome={["ORQUESTRA CENTENÁRIA, CÔNEGO ALEXANDRE CAVALCANTI + GRUPO CULTURAL FOLCPOPULAR", "XAND AVIÃO", "TAYARA ANDREZA"]} horario={["19:00", "21:00", "23:00"]} dia="SÁBADO" data="01/03" />
              <CardPalco nome={["HENRIQUE BARBOSA", "ALMIR ROUCHE", "ANDRÉ RIO", "ELBA RAMALHO", "LADY FALCÃO", "GERALDINHO LINS", "LENINE E SPOK FREVO"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]} dia="DOMINGO" data="02/03" />
              <CardPalco nome={["MAESTRO FORRÓ", "ANDRÉ MARRETA", "REVELAÇÃO", "MARROM BRASILEIRO", "MORGANA BERNARDO", "CIEL SANTOS", "DILSINHO"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]} dia="SEGUNDA" data="03/03" />
              <CardPalco nome={["HIGOR HENRIQUE", "GERLANE LOPES", "NAÇÃO ZUMBI", "MARCÃO NOVENTA", "FELIPE AMOROM", "CLARA SOBRAL", "MARIA CLARA"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]} dia="TERÇA" data="04/03" />
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
    <CardPalco nome={["OFICINA AGRESTE FREVO", "GUSTAVO TRAVASSOS", "BRUNINHO LIMA", "ACADEMIA DA BERLINDA", "LUIZINHO MORENO", "DUDU DO ACORDEON"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]} dia="DOMINGO" data="02/03" />
    <CardPalco nome={["RODRIGO RAPOSO", "WALTER LINS", "CRISTINA AMARAL", "BATERIA CABULOSA", "MAZZAMORRA", "RETRODAC"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]} dia="SEGUNDA" data="03/03" />
    <CardPalco nome={["SILVÉRIO PESSOA", "IRAH CALDEIRA", "DOUGLAS LEON", "ZÉ BARRETO", "NENA QUEIROGA", "ANDERSON ALVES"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]} dia="TERÇA" data="04/03" />
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
    <CardPalco nome={["SOM BRASIL", "BENIL", "RAFA MESQUITA", "SAMARA COSTA", "LABAREDAS", "EMERSON CAVALCANTI"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]} dia="DOMINGO" data="02/03" />
    <CardPalco nome={["MICHEL DINIZ", "MEGA PLAY", "JAMILE OLIVEIRA", "O CONDE", "O PELOTÃO", "VICTOR FERRARI"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]} dia="SEGUNDA" data="03/03" />
    <CardPalco nome={["CLARA ELLYS", "BANDA PINGUIM", "DAVI FIRMA", "SEDUTORA", "FARINGES DA PAIXÃO", "WANESSA ROGER"]} horario={["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]} dia="TERÇA" data="04/03" />
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
    <CardPalco nome={["ORQUESTRA TUPY", "ORQUESTRA FREVO E CIA", "ORQUESTRA DO BIU", "ORQUESTRA ZENÓBIO TORRES", "ORQUESTRA FREVART"]} horario={["09:00", "11:00", "13:00", "15:00", "17:00"]} dia="DOMINGO" data="02/03" />
    <CardPalco nome={["ORQUESTRA FREVO NO PÉ", "ANNY SALLES", "FÁBIO DA GM", "EVERTON LEO", "VITINHO KABULOSO", "KELVIS DURAN"]} horario={["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"]} dia="SEGUNDA" data="03/03" />
    <CardPalco nome={["ORQUESTRA DO RAIMUNDO", "ORQUESTRA FREVO SERRANO", "AMANnda LEÃO", "TIPO 3", "GRUPO TÔ NA SUA", "100XTRESSE"]} horario={["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"]} dia="TERÇA" data="04/03" />
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
    <CardPalco nome={["PAU NO XOTE", "TRIO LAMPIÃO A GÁS", "PATRÍCIA ALVES", "TRIO ZEZINHO SANFONEIRO"]} horario={["10:00", "12:00", "14:00", "16:00"]} dia="DOMINGO" data="02/03" />
    <CardPalco nome={["TRIO CHINELO DE PALHA", "MANOEL DA CONCERTINA", "DADAL FORRÓ DE TRÊS", "RINALDO XAVIER"]} horario={["10:00", "12:00", "14:00", "16:00"]} dia="SEGUNDA" data="03/03" />
    <CardPalco nome={["CABILÁ E TAMBORETE DE FORRÓ", "TRIO KABRAS DA PESTE", "RENILDA CARDOSO", "TRIO ASA BRANCA"]} horario={["10:00", "12:00", "14:00", "16:00"]} dia="TERÇA" data="04/03" />
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
    <CardPalco nome={["ORQUESTRA FREVO NO PÉ", "ORQUESTRA CABELO DE FOGO", "ORQUESTRA DO RONALDINHO", "ORQUESTRA MAGNATAS"]} horario={["10:00", "12:00", "14:00", "16:00"]} dia="DOMINGO" data="02/03" />
    <CardPalco nome={["ORQUESTRA DO RAIMUNDO", "ORQUESTRA OFICINA AGRESTE FREVO", "ORQUESTRA VASSOURINHAS"]} horario={["10:00", "12:00", "14:00"]} dia="SEGUNDA" data="03/03" />
    <CardPalco nome={["ORQUESTRA AMIGOS DO FREVO", "ORQUESTRA CHARANGA PAPANGU", "ORQUESTRA FREVO E CIA"]} horario={["10:00", "12:00", "14:00"]} dia="TERÇA" data="04/03" />
  </div>
</div>
</div> 
</div>
</div>
</div>
    <div className="divisoria"></div>
      </section>


      <section id="blocos">

    <div className="d-flex justify-content-center align-items-center flex-column m-container-palcos-cidade">
      <h3 className="m-titulo-programacao">BLOCOS</h3>
      <ul className="nav nav-tabs justify-content-center" role="tablist">
      <li className="nav-item" role="presentation">
  <button className="nav-link active m-button-programacaobloco" id="tab-02-02" data-bs-toggle="tab" data-bs-target="#pane-02-02" type="button" role="tab" aria-controls="pane-02-02" aria-selected="true">02/02</button>
</li>
<li className="nav-item" role="presentation">
  <button className="nav-link m-button-programacaobloco" id="tab-09-02" data-bs-toggle="tab" data-bs-target="#pane-09-02" type="button" role="tab" aria-controls="pane-09-02" aria-selected="false">09/02</button>
</li>
<li className="nav-item" role="presentation">
  <button className="nav-link m-button-programacaobloco" id="tab-16-02" data-bs-toggle="tab" data-bs-target="#pane-16-02" type="button" role="tab" aria-controls="pane-16-02" aria-selected="false">16/02</button>
</li>
<li className="nav-item" role="presentation">
  <button className="nav-link m-button-programacaobloco" id="tab-22-02" data-bs-toggle="tab" data-bs-target="#pane-22-02" type="button" role="tab" aria-controls="pane-22-02" aria-selected="false">22/02</button>
</li>
<li className="nav-item" role="presentation">
  <button className="nav-link m-button-programacaobloco" id="tab-23-02" data-bs-toggle="tab" data-bs-target="#pane-23-02" type="button" role="tab" aria-controls="pane-23-02" aria-selected="false">23/02</button>
</li>
<li className="nav-item" role="presentation">
  <button className="nav-link m-button-programacaobloco" id="tab-26-02" data-bs-toggle="tab" data-bs-target="#pane-26-02" type="button" role="tab" aria-controls="pane-26-02" aria-selected="false">26/02</button>
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
<li className="nav-item" role="presentation">
  <button className="nav-link m-button-programacaobloco" id="tab-09-03" data-bs-toggle="tab" data-bs-target="#pane-09-03" type="button" role="tab" aria-controls="pane-09-03" aria-selected="false">09/03</button>
</li>

    </ul>

    <div className="tab-content d-flex justify-content-center mb-5">

    <div className="tab-pane fade show active" id="pane-02-02" role="tabpanel" aria-labelledby="tab-02-02">
        <div className=" d-flex justify-content-center flex-wrap">
        <CardBloco nome="Orquesta de Frevo + Pagode" horario="15 horas" dia="DOMINGO" categoria="PRÉVIA" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        </div>
      
      </div>

      <div className="tab-pane fade" id="pane-09-02" role="tabpanel" aria-labelledby="tab-09-02">
        <div className=" d-flex justify-content-center flex-wrap">
          <CardBloco nome="Orquesta de Frevo + Pagode" horario="15:00" dia="DOMINGO" categoria="PRÉVIA" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-16-02" role="tabpanel" aria-labelledby="tab-16-02">
        <div className=" d-flex justify-content-center flex-wrap">
          <CardBloco nome="Orquesta de Frevo + Pagode" horario="15:00" dia="DOMINGO" categoria="PRÉVIA" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-22-02" role="tabpanel" aria-labelledby="tab-22-02">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="TROÇA ANACONSERVADORA DA PSICODEDELIA" horario="14:00" dia="SÁBADO" categoria="BLOCO" localizacao="Rua Rufina Borba" mapa="Rua Rufina Borba" />
        <CardBloco nome="ACORDA BEZERROS " horario="23:00" dia="SÁBADO" categoria="BLOCO" localizacao="Rua 15 de Novembro" mapa="Rua 15 de Novembro" />
        </div>
      </div>


      <div className="tab-pane fade" id="pane-23-02" role="tabpanel" aria-labelledby="tab-23-02">
    <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="PIOR É NADA" horario="14:30" dia="DOMINGO" categoria="BLOCO" localizacao="Rua Nestor César ao lado do açude de toinho do couro" mapa="Rua Nestor César" />
        <CardBloco nome="BLOCO INFANTIL BRINCANDO DE SER CRIANÇA" horario="15:00" dia="DOMINGO" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
    </div>
</div>

<div className="tab-pane fade" id="pane-26-02" role="tabpanel" aria-labelledby="tab-26-02">
    <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="EDUCARNAVAL" horario="19:00" dia="QUARTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
    </div>
</div>

<div className="tab-pane fade" id="pane-27-02" role="tabpanel" aria-labelledby="tab-27-02">
    <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="FOLIA DA BOA IDADE" horario="13:30" dia="QUINTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="RISOTRIL" horario="17:30" dia="QUINTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="NOVIOS" horario="19:00" dia="QUINTA" categoria="BLOCO" localizacao="Rua Gercino Ferreira da Silva" mapa="Rua Gercino Ferreira da Silva" />
        <CardBloco nome="CORREDORES NOTURNOS DE BEZERROS" horario="19:30" dia="QUINTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="BLOCO NA BATIDA E NO FREVO" horario="20:00" dia="QUINTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="VAI DAR TUDO CERTO" horario="21:00" dia="QUINTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="ÓIA O CHICO" horario="21:30" dia="QUINTA" categoria="BLOCO" localizacao="Praça São Sebastião (Restaurante Lá em Casa)" mapa="Restaurante Lá em Casa" />
    </div>
</div>

<div className="tab-pane fade" id="pane-28-02" role="tabpanel" aria-labelledby="tab-28-02"> 
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="EDUPAPANGU I" horario="08:00" dia="SEXTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="EDUPAPANGU II" horario="14:00" dia="SEXTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="BLOCO TO NO SUAS (CIDADANIA) " horario="15:00" dia="SEXTA" categoria="BLOCO" localizacao=" Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="BATATÃO FOLIA" horario="18:00" dia="SEXTA" categoria="BLOCO" localizacao="Praça do Santo Antônio" mapa="Praça do Santo Antônio" />
        <CardBloco nome="SEGURA O CEGO" horario="18:00" dia="SEXTA" categoria="BLOCO" localizacao="Praça Centenária" mapa="Praça Centenária" />
        <CardBloco nome="BALÉ DA KIKA" horario="19:00" dia="SEXTA" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="OS FESTEIROS" horario="19:30" dia="SEXTA" categoria="BLOCO" localizacao="Rua João Correia da Silva" mapa="Rua João Correia da Silva" />
        <CardBloco nome="CAFOFO" horario="20:00" dia="SEXTA" categoria="BLOCO" localizacao="Rua Presidente Kenedy, Bairro São Sebastião" mapa="Rua Presidente Kenedy, Bairro São Sebastião" />
        </div>
      </div>


<div className="tab-pane fade" id="pane-01-03" role="tabpanel" aria-labelledby="tab-01-03">
    <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="ESQUENTA PARA SEU ZÉ PEREIRA" horario="14:00" dia="SÁBADO" categoria="BLOCO" localizacao="Rua 09 de Janeiro" mapa="Rua 09 de Janeiro" />
        <CardBloco nome="A CASA CAIU" horario="15:00" dia="SÁBADO" categoria="BLOCO" localizacao="Rua São Sebastião (Centro) - Sapucarana" mapa="Rua São Sebastião" />
        <CardBloco nome="AS CATRAIAS DO CRUZEIRO" horario="15:00" dia="SÁBADO" categoria="BLOCO" localizacao="Campo do Cruzeiro" mapa="Campo do Cruzeiro" />
        <CardBloco nome="A LIGA DO CRUZEIRO" horario="16:00" dia="SÁBADO" categoria="BLOCO" localizacao="Praça Imaculada Conceição - Bairro do Cruzeiro" mapa="Praça Imaculada Conceição" />
        <CardBloco nome="BIU LOLA" horario="18:00" dia="SÁBADO" categoria="BLOCO" localizacao="Amarílis Recepção" mapa="Amarílis Recepção" />
        <CardBloco nome="LIBERA O TOIN" horario="19:30" dia="SÁBADO" categoria="BLOCO" localizacao="Rua Princesa Isabel, Rua da Palmeira, Rua Professor Amaral - Centenária" mapa="Rua Princesa Isabel" />
        <CardBloco nome="BLOCO DO ZÉ PEREIRA" horario="19:00" dia="SÁBADO" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="BLOCO DO EU SOZINHO" horario="20:30" dia="SÁBADO" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
    </div>
</div>

<div className="tab-pane fade" id="pane-02-03" role="tabpanel" aria-labelledby="tab-02-03">
    <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="GRUPO CULTURAL BOI ESTRELA" horario="08:00" dia="DOMINGO" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="BLOCO DO PAPANGU" horario="11:00" dia="DOMINGO" categoria="BLOCO" localizacao="Praça São Sebastião" mapa="Praça São Sebastião" />
        <CardBloco nome="BLOCO BOI CHORÃO" horario="10:00" dia="DOMINGO" categoria="BLOCO" localizacao="Ponte do Rosário - Passagem Molhada" mapa="Ponte do Rosário" />
        <CardBloco nome="RESSUSCITA FACILITA" horario="14:00" dia="DOMINGO" categoria="BLOCO" localizacao="Praça Hilário Ribas - Boas Novas" mapa="Praça Hilário Ribas" />
    </div>
</div>

<div className="tab-pane fade" id="pane-03-03" role="tabpanel" aria-labelledby="tab-03-03">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="BLOCO SEGURA O OVO" horario="10:00" dia="SEGUNDA" categoria="BLOCO" localizacao="Colégio Quadra Radar" mapa="Colégio Quadra Radar" />
        <CardBloco nome="O URSO DE VOCÊS" horario="10:00" dia="SEGUNDA" categoria="BLOCO" localizacao="Rua doutor José Maria 336" mapa="Rua doutor José Maria 336" />
        <CardBloco nome="CAJAZEIRAS FOLIA" horario="10:00" dia="SEGUNDA" categoria="BLOCO" localizacao="Praça de Cajazeiras" mapa="Praça de Cajazeiras" />
        <CardBloco nome="BLOCO DO GUARANI" horario="18:30" dia="SEGUNDA" categoria="BLOCO" localizacao="Rua Antônio Bezerra da Silva (Centro)" mapa="Rua Antônio Bezerra da Silva (Centro)" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-04-03" role="tabpanel" aria-labelledby="tab-04-03">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="FUTEBOL DO PAPANGU" horario="08:00" dia="TERÇA" categoria="EVENTO" localizacao="ESTÁDIO TENENTE LUIZ GONZAGA" mapa="ESTÁDIO TENENTE LUIZ GONZAGA" />
        <CardBloco nome="CARNAVAL CAJAZEIRAS" horario="09:00" dia="TERÇA" categoria="CARNAVAL" localizacao="CAJAZEIRAS" mapa="CAJAZEIRAS" />
        <CardBloco nome="OS 100 FUTURO" horario="10:00" dia="TERÇA" categoria="BLOCO" localizacao="Rua Sigismundo Gonçalves, número 173 Centro" mapa="Rua Sigismundo Gonçalves, número 173 Centro" />
        <CardBloco nome="BLOQUINHO CONCENTRA, MAS NÃO SAI" horario="10:00" dia="TERÇA" categoria="BLOCO" localizacao="Avenida professor Amaral 57" mapa="Avenida professor Amaral 57" />
        <CardBloco nome="BALANÇA O SACO" horario="10:00" dia="TERÇA" categoria="BLOCO" localizacao="Quadra do colégio Radar" mapa="Quadra do colégio Radar" />
        <CardBloco nome="CANA CAIANA" horario="10:00" dia="TERÇA" categoria="BLOCO" localizacao="Restaurante lá em casa" mapa="Restaurante lá em casa" />
        <CardBloco nome="KENGAS DA COHAB" horario="17:00" dia="TERÇA" categoria="BLOCO" localizacao="PRAÇA DA COHAB" mapa="PRAÇA DA COHAB" />
        <CardBloco nome="KENGAS DA GAMILEIRA" horario="17:30" dia="TERÇA" categoria="BLOCO" localizacao="Praça Santo Antônio" mapa="Praça Santo Antônio" />
        <CardBloco nome="AS MELINDROSAS" horario="20:00" dia="TERÇA" categoria="BLOCO" localizacao="Rua Nove de Janeiro" mapa="Rua Nove de Janeiro" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-05-03" role="tabpanel" aria-labelledby="tab-05-03">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="PEIXADA DA CONFRA" horario="13:00" dia="QUARTA" categoria="EVENTO" localizacao="Em frente a CONFRARIA BEZERROS (rua da matriz) colado ao banco SICOOB" mapa="Em frente a CONFRARIA BEZERROS (rua da matriz) colado ao banco CIOOB" />
        <CardBloco nome="BACALHAU DO LULA VASSOUREIRO" horario="19:30" dia="QUARTA" categoria="BLOCO" localizacao="PRAÇA SÃO SEBASTIÃO" mapa="PRAÇA SÃO SEBASTIÃO" />
        </div>
      </div>

      <div className="tab-pane fade" id="pane-09-03" role="tabpanel" aria-labelledby="tab-09-03">
        <div className="d-flex justify-content-center flex-wrap">
        <CardBloco nome="CARNAVAL DO SANTO AMARO 2" horario="14:00" dia="DOMINGO" categoria="CARNAVAL" localizacao="Rua do Imperador" mapa="Rua do Imperador SANTO AMARO 2" />
        <CardBloco nome="SÓ AS CINZAS" horario="16:00" dia="DOMINGO" categoria="BLOCO" localizacao="Praça Centenária" mapa="Praça Centenária" />
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
