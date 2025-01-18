import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CardPalco from "../components/CardPalco";
import CardCidade from "../components/CardCidade";
import CardSitio from "../components/CardSitio";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import marca from "../public/LOGODETALHES.png";
import devassa from "../public/devassa.png";
import kuat from "../public/kuat.png";
import governo from "../public/governo.png";
import fundarpe from "../public/fundarpe.png";
import empetur from "../public/empetur.png";
import sesc from "../public/sesc-senac.png";

export default function Home() {
  useEffect(() => {
    const btnPlayVideo = document.getElementById("btn-play-video");
    const containerVideo = document.getElementById("container-video");

    const btnArrow = document.getElementById("btn-arrow");
    const sectionApresentacao = document.getElementById("apresentacao");

    btnArrow.addEventListener("click", handleClickBtnArrow);

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
            data-image-src="/BGAZUL.png"
          >
            <div className="container d-flex justify-content-center align-items-center">
              <Image
                className="bg-hero-marca"
                src={marca}
                alt="marca são joão"
              ></Image>
            </div>
            <button type="button" id="btn-arrow" className="arrow-down">
              <i className="bx bx-chevron-down bx-fade-down display-1 text-white"></i>
            </button>
          </div>
        </section>
        <div className="divisoria"></div> 

        <section id="programacao">
          <div className="">
            <div className="m-container-palcos-serra d-flex justify-content-center align-items-center flex-column">
              <div className="m-container-titulo">
                <h2 className="m-titulo-secao mt-5 text-center">ATRAÇÕES CONFIRMADAS!</h2>
              </div>
              <div className="container mt-3">

                <div className="tab-content d-flex justify-content-center mb-5">
                  <div
                    className="tab-pane fade show active"
                    id="palcos-tab1-pane"
                    role="tabpanel"
                    aria-labelledby="palcos-tab1"
                    tabIndex="0"
                  >
                    <div className="d-flex justify-content-center flex-wrap">
                      <CardPalco
                        nome={[
                          "Forró Rei do Cangaço",
                          "Forretrô",
                          "Flávio José",
                          "Flávio Leandro",
                          "Amanda Leão",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Sábado"
                        data="15/06"
                      />
                      <CardPalco
                        nome={[
                          "Luizinho Moreno",
                          "Waldonys",
                          "Quinteto Violado",
                          "Assisão",
                          "Walter Lins",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Domingo"
                        data="16/06"
                      />
                      <CardPalco
                        nome={[
                          "Damião Mota",
                          "Rodrigo Raposo",
                          "Cezzinha",
                          "Nena Queiroga",
                          "Igor Henrique",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Sábado"
                        data="22/06"
                      />
                      <CardPalco
                        nome={[
                          "Ciel Santos",
                          "Novinho da Paraíba",
                          "Lady Falcão",
                          "Cristina Amaral",
                          "Marcão Noventa",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Domingo"
                        data="23/06"
                      />
                      <CardPalco
                        nome={[
                          "Daniel Gouveia",
                          "Geraldinho Lins",
                          "Almir Rouche",
                          "Henrique Barbosa",
                          "Azulinho",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Segunda"
                        data="24/06"
                      />
                      <CardPalco
                        nome={[
                          "Pau no Xote",
                          "Michel Diniz",
                          "Irah Caldeira",
                          "Petrúcio Amorin",
                          "Dudu do Acordeon",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Sábado"
                        data="29/06"
                      />
                      <CardPalco
                        nome={[
                          "Anderson Alves",
                          "Nordestinos do Forró",
                          "Morganna Bernardo",
                          "Benil",
                          "Santanna",
                        ]}
                        horario={["12:00", "14:00", "16:00", "18:00", "20:00"]}
                        dia="Domingo"
                        data="30/06"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="palcos-tab2-pane"
                    role="tabpanel"
                    aria-labelledby="palcos-tab2"
                    tabIndex="0"
                  >
                    <div className="d-flex justify-content-center flex-wrap">
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "kaio lima",
                          "banda de pífanos",
                          "Matheus e catirina",
                          "quadrilha folcpopular",
                          "batalhão 44/ matheus e catirina",
                          "renilda cardoso",
                        ]}
                        horario={[
                          "12:30",
                          "13:00",
                          "14:30",
                          "15:00",
                          "15:30",
                          "16:30",
                          "17:30",
                        ]}
                        dia="Sábado"
                        data="15/06"
                      />
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "clara ellys",
                          "banda de pífanos",
                          "Matheus e catirina",
                          "marcos montez",
                          "jamile",
                          "som da terra",
                        ]}
                        horario={[
                          "12:30",
                          "13:00",
                          "15:00",
                          "15:30",
                          "16:30",
                          "17:30",
                          "18:30",
                        ]}
                        dia="Domingo"
                        data="16/06"
                      />
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "carlinho melo",
                          "Matheus e catirina",
                          "quadrilha misturat",
                          "douglas leon",
                          "thalentos",
                        ]}
                        horario={[
                          "12:30",
                          "13:00",
                          "15:00",
                          "15:30",
                          "16:30",
                          "17:30",
                        ]}
                        dia="Sábado"
                        data="22/06"
                      />
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "victor ferrari",
                          "Matheus e catirina",
                          "grupo panpaguarte",
                          "matheus aboiador, biu lourenço e lunas costas",
                          "zé barreto",
                          "joãozinho de exu",
                        ]}
                        horario={[
                          "12,30",
                          "13:00",
                          "15:00",
                          "15:30",
                          "16:30",
                          "17:30",
                          "18:30",
                        ]}
                        dia="Domingo"
                        data="23/06"
                      />
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "kabras da peste",
                          "Matheus e catirina",
                          "quadrilha folcpopular",
                          "batalhão 44/ Matheus e catirina",
                          "farra dos tops",
                          "valdinho paes",
                        ]}
                        horario={[
                          "12:30",
                          "13:00",
                          "15:00",
                          "15:30",
                          "16:30",
                          "17:30",
                          "18:30",
                        ]}
                        dia="Segunda"
                        data="24/06"
                      />
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "samara costa",
                          "Matheus e catirina",
                          "quadrilha misturart",
                          "joãozinho e banda",
                          "eu, tu e elas",
                        ]}
                        horario={[
                          "12:30",
                          "13:00",
                          "15:00",
                          "15:30",
                          "16:00",
                          "17:30",
                        ]}
                        dia="Sábado"
                        data="29/06"
                      />
                      <CardPalco
                        nome={[
                          "Matheus e catirina",
                          "emerson cavalcante",
                          "Matheus e catirina",
                          "quadrilha riacho das almas",
                          "neno do acordeon",
                        ]}
                        horario={["12:30", "13:00", "15:00", "15:30", "16:00"]}
                        dia="Domingo"
                        data="25/06"
                      />
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
                      nome={[
                        "Apresentações Escolar",
                        "Leninho Filho",
                        "Dadal Forró de Três",
                      ]}
                      horario={["15:30", "18:30", "20:30"]}
                      dia="Sítio dos Remédios"
                      data="11/06"
                    />

                    <CardSitio
                      nome={[
                        "Apresentações Escolar",
                        "Programação Religiosa",
                        "Emerson Cavalcante",
                        "André Ferraz",
                      ]}
                      horario={["15:30", "18:30", "20:00", "21:30"]}
                      dia="Cajazeiras"
                      data="13/06"
                    />
                    <CardSitio
                      nome={[
                        "Matheus e Catirina",
                        "Quadrilha  Gonzagão de Areias",
                        "Michel Diniz",
                        "Anny Sales",
                      ]}
                      horario={["18:00", "18:30", "19:00", "20:30"]}
                      dia="Areias"
                      data="14/06"
                    />
                    <CardSitio
                      nome={[
                        "Quadrilha folcpopular",
                        "Manoel da Concertina",
                        "Wanessa Roger",
                      ]}
                      horario={["20:00", "21:00", "22:30"]}
                      dia="Encruzilhada"
                      data="19/06"
                    />
                    <CardSitio
                      nome={[
                        "Apresentações Escolar",
                        "Gil Teclas",
                        "Higor Henrique",
                      ]}
                      horario={["15:30", "19:00", "21:00"]}
                      dia="Boas Novas"
                      data="20/06"
                    />
                    <CardSitio
                      nome={[
                        "Quadrilha Junina é por amor",
                        "Trio nildo e seu reginal",
                        "Geraldinho Lins",
                      ]}
                      horario={["19:00", "20:00", "21:30"]}
                      dia="Sapucarana"
                      data="26/06"
                    />

                    <CardCidade
                      nome={["João Gomes", "MAIS ATRAÇÕES EM BREVE!"]}
                      horario={["", ""]}
                      dia="Centro da Cidade"
                      data="07/07"
                    />
                  </div>
                </div>
              </div>
              <div className="divisoria"></div>
            </div>
          </div>
        </section>

        <div className="divisoria"></div>
     
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
