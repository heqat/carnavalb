import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CardPalco from "../components/CardPalco";
import CardCidade from "../components/CardCidade";
import CardSitio from "../components/CardSitio";
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
              <a className='m-btn-historia m-apresentacao-texto' href="/historia">Conheça a história</a>
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
            <CardSitio
              nome={["Apresentações Escolar", "Leninho Filho", "Dadal Forró de Três"]}
              horario={["15:30", "18:30", "20:30"]}
              dia="Sítio dos Remédios"
              data="11/06"
            />
            <CardSitio
              nome={["Apresentações Escolar", "Programação Religiosa", "Emerson Cavalcante", "André Ferraz"]}
              horario={["15:30", "18:30", "20:00", "21:30"]}
              dia="Cajazeiras"
              data="13/06"
            />
            <CardSitio
              nome={["Matheus e Catirina", "Quadrilha Gonzagão de Areias", "Michel Diniz", "Anny Sales"]}
              horario={["18:00", "18:30", "19:00", "20:30"]}
              dia="Areias"
              data="14/06"
            />
            <CardSitio
              nome={["Quadrilha folcpopular", "Manoel da Concertina", "Wanessa Roger"]}
              horario={["20:00", "21:00", "22:30"]}
              dia="Encruzilhada"
              data="19/06"
            />
            <CardSitio
              nome={["Apresentações Escolar", "Gil Teclas", "Higor Henrique"]}
              horario={["15:30", "19:00", "21:00"]}
              dia="Boas Novas"
              data="20/06"
            />
            <CardSitio
              nome={["Quadrilha Junina é por amor", "Trio nildo e seu reginal", "Geraldinho Lins"]}
              horario={["19:00", "20:00", "21:30"]}
              dia="Sapucarana"
              data="26/06"
            />
            <CardCidade nome={["João Gomes", "MAIS ATRAÇÕES EM BREVE!"]} horario={["", ""]} dia="Centro da Cidade" data="07/07" />
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

        <section id="faq" className="pb-5">
          <div className="container d-flex justify-content-center align-items-center flex-column">
            <h2 className="m-titulo-secao-maior mt-5 mb-5">
              PERGUNTAS E RESPOSTAS
            </h2>
            <h2 className="m-titulo-secao-menor mt-5 mb-5">FAQ</h2>
            <div
              className="container accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading1">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse1"
                    aria-expanded="false"
                    aria-controls="flush-collapse1"
                  >
                    QUAIS SERÃO OS DIAS DE FESTA DO SÃO JOÃO 2024 DE BEZERROS?
                  </button>
                </h2>
                <div
                  id="flush-collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    SÃO JOÃO NOS DISTRITOS:
                    <ul>
                      <li>Sítio dos Remédios (11/06)</li>
                      <li>Areias (13/06)</li>
                      <li>Cajazeiras (14/06)</li>
                      <li>Encruzilhada (19/06)</li>
                      <li>Boas Novas (20/06)</li>
                      <li>Sapucarana (26/06)</li>
                    </ul>
                    SÃO JOÃO NA SERRA NEGRA (Pólo da Serra):
                    <ul>
                      <li>15/06, 16/06, 22/06, 23/06, 24/06, 29/06 e 30/06</li>
                    </ul>
                    SÃO JOÃO NA CIDADE (Rua da Matriz):
                    <ul>
                      <li>07/07</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading2">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse2"
                    aria-expanded="false"
                    aria-controls="flush-collapse2"
                  >
                    COMO SERÁ A ESTRUTURA DA FESTA?
                  </button>
                </h2>
                <div
                  id="flush-collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading2"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Confira nosso <a href="#mapa">mapa</a> com as informações
                    necessárias para localizações durante o período junino.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading3">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse3"
                    aria-expanded="false"
                    aria-controls="flush-collapse3"
                  >
                    ÔNIBUS E MICRO ÔNIBUS PODEM SUBIR PARA A SERRA NEGRA NOS
                    DIAS DE EVENTO?
                  </button>
                </h2>
                <div
                  id="flush-collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading3"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não pode. De acordo com o Art. 2 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      {" "}
                      Decreto Nº 2.643/2024
                    </a>
                    , fica proibido o transporte coletivo por meio de ônibus e
                    micro-ônibus para o evento na Serra Negra.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading4">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    ONDE POSSO ESTACIONAR MEU CARRO DE FORMA GRATUITA NA SERRA
                    NEGRA?
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading4"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Os estacionamentos permitidos estarão sinalizados ao longo
                    da via, como também podem ser localizados no{" "}
                    <a href="#mapa">mapa</a>.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading5">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse5"
                    aria-expanded="false"
                    aria-controls="flush-collapse5"
                  >
                    POSSO ENTRAR COM COOLER, ISOPOR OU CAIXA TÉRMICA NO POLO DO
                    SÃO JOÃO NA SERRA NEGRA?
                  </button>
                </h2>
                <div
                  id="flush-collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading5"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não pode. De acordo com o item I do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibida ao público e aos
                    comerciantes a utilização de cooler, isopor e caixa térmica
                    para comidas e bebidas, bem como todo e qualquer objeto que
                    de alguma forma atrapalhe, dificulte ou impeça o fluxo de
                    pessoas em todo o espaço das festividades.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading6">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse6"
                    aria-expanded="false"
                    aria-controls="flush-collapse6"
                  >
                    RECIPIENTES DE VIDRO SÃO PERMITIDOS NO POLO DO SÃO JOÃO NA
                    SERRA NEGRA?
                  </button>
                </h2>
                <div
                  id="flush-collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading6"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não é permitido. De acordo com o item IV do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibida ao público e aos
                    comerciantes a utilização e comercialização de bebidas e
                    comidas em recipientes de vidros. Verifique no{" "}
                    <a href="#mapa">mapa</a> o local para fazer a troca de
                    recipientes de vidro por recipientes de plástico.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading7">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse7"
                    aria-expanded="false"
                    aria-controls="flush-collapse7"
                  >
                    MESAS E CADEIRAS SÃO PERMITIDAS NA ÁREA DO EVENTO DO SÃO
                    JOÃO NA SERRA NEGRA?
                  </button>
                </h2>
                <div
                  id="flush-collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading7"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não é permitido. De acordo com o item II do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibida a utilização de mesas,
                    cadeiras e afins por parte do público em geral, bem como
                    pelos comerciantes nas proximidades e arredores das
                    barracas.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading8">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse8"
                    aria-expanded="false"
                    aria-controls="flush-collapse8"
                  >
                    DROGAS ILÍCITAS, ARMAS DE FOGO E ARMAS BRANCAS SÃO
                    PERMITIDAS DENTRO DO EVENTO?
                  </button>
                </h2>
                <div
                  id="flush-collapse8"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading8"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não pode. De acordo com o item V do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibido armas de fogo, armas
                    brancas, drogas e menores desacompanhados de pessoas
                    responsáveis.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading9">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse9"
                    aria-expanded="false"
                    aria-controls="flush-collapse9"
                  >
                    É PERMITIDA A ENTRADA E USO DO CAPACETE DENTRO DA ÁREA DO
                    EVENTO NA SERRA NEGRA?
                  </button>
                </h2>
                <div
                  id="flush-collapse9"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading9"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não é permitido. De acordo com o item III do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibido a entrada e a circulação de
                    pessoas portando capacete.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading10">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse10"
                    aria-expanded="false"
                    aria-controls="flush-collapse10"
                  >
                    QUAL SERÁ O LOCAL DE APOIO PARA EMERGÊNCIA NO SÃO JOÃO DA
                    SERRA NEGRA?
                  </button>
                </h2>
                <div
                  id="flush-collapse10"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading10"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Todos os equipamentos de saúde do município tiveram suas
                    equipes reforçadas, bem como terão centros de apoio montados
                    para atender as demandas do São João. Os pontos de podem ser
                    encontrados nas duas entradas do evento e próximo a
                    Igrejinha da Vila, conforme localização no{" "}
                    <a href="#mapa">mapa</a>.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading11">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse11"
                    aria-expanded="false"
                    aria-controls="flush-collapse11"
                  >
                    ONDE POSSO ENCONTRAR MATERIAIS DE ARTESANATO E CULTURA LOCAL
                    DA CIDADE DE BEZERROS?
                  </button>
                </h2>
                <div
                  id="flush-collapse11"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Durante o São João na Serra Negra 2024 haverá a
                    comercialização de peças exclusivas dos artesãos locais.
                    Tanto os turistas quanto os bezerrenses podem encontrar esse
                    espaço na Vitrine Criativa, com localização conforme o{" "}
                    <a href="#mapa">mapa</a>.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading12">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse12"
                    aria-expanded="false"
                    aria-controls="flush-collapse12"
                  >
                    POSSO LIGAR QUALQUER TIPO DE SOM OU PAREDÕES, DENTRO E NO
                    ENTORNO, DO EVENTO E DOS ESTACIONAMENTOS?
                  </button>
                </h2>
                <div
                  id="flush-collapse12"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading12"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não pode. De acordo com o item VII do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibido o uso de qualquer tipo de
                    som e paredões dentro, no entorno do evento e nos
                    estacionamentos.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading13">
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse13"
                    aria-expanded="false"
                    aria-controls="flush-collapse13"
                  >
                    É PERMITIDO A UTILIZAÇÃO DE FOGOS DE ARTIFÍCIO DENTRO E NO
                    ENTORNO, DO EVENTO E DOS ESTACIONAMENTOS?
                  </button>
                </h2>
                <div
                  id="flush-collapse13"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading13"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Não, não pode. De acordo com o item III do Art. 4 do{" "}
                    <a
                      href="DECRETO-N.2.643-DE-03-DE-JUNHO-DE-2024.pdf"
                      target="_blank"
                    >
                      Decreto Nº 2.643/2024
                    </a>
                    , está terminantemente proibido a utilização de fogos de
                    artifícios por particulares.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divisoria"></div>
      </main>
      <Footer />
    </>
  );
}
