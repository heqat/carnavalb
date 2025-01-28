import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CardPalco from "../components/CardPalco";
import CardCidade from "../components/CardCidade";
import CardBloco from "../components/CardBloco";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import marca from "../public/LOGO.png";
import devassa from "../public/devassa.png";
import kuat from "../public/kuat.png";
import governo from "../public/governo.png";
import fundarpe from "../public/fundarpe.png";
import empetur from "../public/empetur.png";
import sesc from "../public/sesc-senac.png";


export default function Home() {
  useEffect(() => {
    const btnPlayVideo = document.getElementById('btn-play-video');
    const containerVideo = document.getElementById('container-video');

    btnPlayVideo.addEventListener('click', handlePlayVideo);

    function handlePlayVideo() {
      event.preventDefault();
      btnPlayVideo.style.display = 'none';
      containerVideo.innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/PhFFVDyrG4s?autoplay=1" title="Clipe carnaval" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }

    const btnArrow = document.getElementById('btn-arrow');
    const sectionApresentacao = document.getElementById('apresentacao');

    btnArrow.addEventListener('click', handleClickBtnArrow);

    function handleClickBtnArrow() {
      sectionApresentacao.scrollIntoView();
    }


  });
  return (
    <>
      <Head>
        <title>Carnaval 2025 - Bezerros-PE</title>
        <meta name="title" content="Carnaval 2025 - Bezerros-PE"></meta>
      </Head>

      <Navbar />

      <main>
        <section id="hero">
          <div
            className="bg-hero"
            data-parallax="scroll"
            data-image-src="/papangus-igreja.jpg"
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

        <section id='clipe'>
          <div id='container-video' className='d-flex justify-content-center align-items-center container-video' data-parallax="scroll" data-image-src="/papangu-video.jpg">
            <button id='btn-play-video' type='button' className='m-btn-play-video'>
              <i className='bx bx-play-circle bx-tada text-white display-1'></i>
            </button>
          </div>
        </section>

        <div className='divisoria'></div>

        <section id="baile">
        <div className='d-flex w-100 justify-content-center flex-column align-items-center'>
            <div className='container d-flex flex-column justify-content-center align-items-center text-center mt-0 m-5 text-white'>
              <div className='mt-5 papangu'></div>
              <br></br>
              <p className='m-baile-texto'>Descubra a magia do carnaval de Bezerros - uma festa única repleta de cultura, tradição, muita animação e claro, papangus!</p>
              <p
               className='m-baile-texto'> Venha se encantar com os papangus, foliões, as cores vibrantes e a alegria contagiante desta festa inesquecível!</p>
               <br></br>
               <div class="button-container">
               <a class="m-btn-baile m-apresentacao-texto" href="/baile-municipal">MAIS INFORMAÇÕES!</a>
  <a class="m-btn-baile m-apresentacao-texto" href="/baile-municipal/#ingressos-baile">COMPRE SEU INGRESSO</a>

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

        <p className="texto-artista">J. Borges, Patrimônio Vivo de Pernambuco, é o mestre do cordel e o xilogravurista brasileiro mais reconhecido no mundo. O bezerrense homenageado do Carnaval do Papangu 2024, Folia, mistério e magia, nasceu em 1935 e iniciou sua jornada de cordelista aos 20 anos de idade, criando figuras a partir das histórias e lendas populares do cenário nordestino.</p>
        <p className="texto-artista">Nos anos 70, Borges ganhou visibilidade nacional, descoberto por colecionadores, marchands e artistas como Ariano Suassuna, Jota passou a ser expoente da xilogravura, e sua arte ganhou o mundo. A aproximação entre Ariano e Borges resultou em trabalhos expressivos, o artista foi parte importante para o movimento armorial, criado e defendido por Ariano como um produto artístico que ultrapassava as barreiras regionais apesar de sua essência popular nordestina.</p>
        <p className="texto-artista">Jota aponta Suassuna como divisor de águas de sua carreira, responsabilizando-o pelos passeios do “popular” pelos corredores intelectuais da elite nacional e internacional.</p>
        <p className="texto-artista">Os apaixonados pela cultura nordestina, amantes do cordel e da xilogravura, contam com o memorial de J. Borges,  reduto artístico familiar, santuário regional, localizado em Bezerros, alguns sortudos conseguem desfrutar de momentos inspiradores e conversas longas e descontraídas com o Mestre Borges.</p>
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
              <CardPalco nome={["Exemplo"]} horario={["14:00"]} dia="SEGUNDA" data="01/01" />
              <CardPalco nome={["Exemplo"]} horario={["14:00"]} dia="SEGUNDA" data="01/01" />
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
              <CardPalco nome={[]} horario={[]} dia="" data="" />
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
              <CardPalco nome={[]} horario={[]} dia="" data="" />
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
              <CardPalco nome={[]} horario={[]} dia="" data="" />
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
              <CardPalco nome={[]} horario={[]} dia="" data="" />
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
              <CardPalco nome={[]} horario={[]} dia="" data="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="divisoria"></div>

    <div className="d-flex justify-content-center align-items-center flex-column m-container-palcos-cidade">
      <h3 className="m-titulo-programacao">SÍTIO À CIDADE</h3>
      <div className="container mt-3">
        <div className="container-card">
          <div className="d-flex justify-content-center flex-wrap">
            <CardBloco
              nome={["Apresentações Escolar", "Leninho Filho", "Dadal Forró de Três"]}
              horario={["15:30", "18:30", "20:30"]}
              dia="Sítio dos Remédios"
              data="11/06"
            />
            <CardBloco
              nome={["Apresentações Escolar", "Programação Religiosa", "Emerson Cavalcante", "André Ferraz"]}
              horario={["15:30", "18:30", "20:00", "21:30"]}
              dia="Cajazeiras"
              data="13/06"
            />
            <CardBloco
              nome={["Matheus e Catirina", "Quadrilha Gonzagão de Areias", "Michel Diniz", "Anny Sales"]}
              horario={["18:00", "18:30", "19:00", "20:30"]}
              dia="Areias"
              data="14/06"
            />
            <CardBloco
              nome={["Quadrilha folcpopular", "Manoel da Concertina", "Wanessa Roger"]}
              horario={["20:00", "21:00", "22:30"]}
              dia="Encruzilhada"
              data="19/06"
            />
            <CardBloco
              nome={["Apresentações Escolar", "Gil Teclas", "Higor Henrique"]}
              horario={["15:30", "19:00", "21:00"]}
              dia="Boas Novas"
              data="20/06"
            />
            <CardBloco
              nome={["Quadrilha Junina é por amor", "Trio nildo e seu reginal", "Geraldinho Lins"]}
              horario={["19:00", "20:00", "21:30"]}
              dia="Sapucarana"
              data="26/06"
            />
            <CardBloco nome={["João Gomes", "MAIS ATRAÇÕES EM BREVE!"]} horario={["", ""]} dia="Centro da Cidade" data="07/07" />
          </div>
        </div>
      </div>
      <div className="divisoria"></div>
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
