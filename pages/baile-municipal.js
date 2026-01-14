import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BaileMunicipal() {
  return (
    <>
      <Head>
        <title>Baile Municipal - Carnaval do Papangu 2026</title>
        <meta
          name="title"
          content="Baile Municipal - Carnaval do Papangu 2026"
        />

        <meta
          property="og:url"
          content="https://carnaval.bezerros.pe.gov.br/baile-municipal"
        />
        <meta
          property="og:title"
          content="Baile Municipal - Carnaval do Papangu 2026"
        />
        <meta
          property="twitter:url"
          content="https://carnaval.bezerros.pe.gov.br/baile-municipal"
        />
        <meta
          property="twitter:title"
          content="Baile Municipal - Carnaval do Papangu 2025"
        />
      </Head>

      <Navbar />

      <main>
        <section id="baile-municipal">
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <p></p>
            <div className="container-textobaile">
              <img
                src="/marcabaile.png"
                alt="Marca Baile Municipal"
                className="baile-marca"
              ></img>
              <p></p>
              <p className="m-text-historia">
                Já imaginou vivenciar uma noite de música vibrante, cores,
                ritmos e alegria em uma só festa? Vista sua fantasia e venha
                participar do mais tradicional baile carnavalesco do interior de
                Pernambuco. Este ano, nossa festa celebra a arte, história e
                tradição do nosso anfitrião, no fantástico ateliê do Papangu de
                Bezerros - Pernambuco. Participe conosco e se conecte ao
                universo do maior e melhor carnaval do interior do Brasil: o
                Carnaval do Papangu!!! Com o tema “O Fantástico Ateliê do
                Papangu”, o baile remonta à criatividade dos artesãos na
                confecção das máscaras dos papangus, expressando toda a riqueza
                artística e cultural do nosso carnaval e da nossa gente.
              </p>{" "}
              <img
                src="/BAILETEMA.png"
                alt="Tema"
                className="mt-4 mb-4 tema-baile"
              />
              <p className="m-text-historia">
                Sábado, dia 22 de fevereiro de 2025, no Clube Literário Rui
                Barbosa - Bairro do Cruzeiro, a partir das 21h, Bezerros espera
                por você no 21º Baile Municipal. Juntos, vamos celebrar momentos
                de saudades, boas lembranças, emoção e a alegria contagiante do
                nosso papangu.{" "}
              </p>
              <br></br>
              <p className="m-text-titulo text-center">ATRAÇÕES</p>
              <ul>
                <li className="baile-list">Ciel Santos;</li>
                <li className="baile-list">Almir Rouche;</li>
                <li className="baile-list">Rafa Mesquita;</li>
                <li className="baile-list">Bateria Cabulosa;</li>
                <li className="baile-list">
                  Orquestra Centenária Cônego Alexandre Cavalcanti.{" "}
                </li>
              </ul>
            </div>

            <br></br>
            <br></br>

            <div className="container-textobaile d-flex justify-content-center align-items-center flex-column">
              <img
                src="/BAILEHOMENAGEADOS.png"
                alt="Homenageados"
                className="mt-4 mb-4 tema-baile"
              />
              <img
                src="/BAILECLAUDIO.png"
                alt="Homenageado"
                className="container-fotobaile"
              />
              <p className="m-text-historia">
                Claudio Sérgio da Rocha, mais conhecido como Claudio das
                máscaras, gravataense de nascimento e bezerrense de coração; há
                mais de 20 anos se dedica a produção e divulgação das máscaras
                de papangus, personagem principal do carnaval de Bezerros. Suas
                peças vão do utilitário ao decorativo em várias formas e
                tamanhos, usando diversas matérias primas em sua confecção,
                como: papel machê, papel colê (papietagem), fibra de vidro, tela
                de metal e couro de bode. O mesmo usa de sua criatividade para
                manter à tradição cultural viva e notória dos papangus de
                Bezerros.
              </p>
              <img
                src="/BAILEJOSY.png"
                alt="Homenageada"
                className="container-fotobaile"
              />
              <p className="m-text-historia mt-3">
                Josy Santos, artesã bezerrense, trabalha com máscaras de
                papangus em diversos tamanhos e peças decorativas e utilitárias,
                como: chaveiro, ímãs, brincos, colares, quadros, porta
                controles, porta chaves, etc. Profissional prendada e criativa
                começou com bordados e crochê pela AAB (Associação dos Artesãos
                de Bezerros), em seguida resolveu trabalhar com máscaras de
                papangus ao observar os artesãos mascreiros da cidade. O
                acabamento e a pintura das suas obras são caprichosos e
                diferenciados. A artesã conta com a colaboração do seu esposo
                para manter essa tradição.
              </p>
            </div>
          </div>
          <p></p>

          <section id="ingressos-baile">
            <div className="container-ingresso">
              <img
                src="/INGRESSOS.png"
                alt="Homenageados"
                className="mt-4 mb-4 tema-baile"
              />

              <ul>
                <li className="baile-list">
                  INGRESSO INTEIRA: <span className="baile-valor">R$50.</span>
                </li>
                <li className="baile-list">
                  INGRESSO SOCIAL:{" "}
                  <span className="baile-valor">R$30 + 1kg de alimento.</span>
                </li>
                <li className="baile-list">
                  INGRESSO MEIA: <span className="baile-valor">R$25.</span>
                </li>
              </ul>
              <p className="m-text-historia text-center">
                Para aquisição de mesas e camarotes consultar disponibilidade em
                Point Card Bezerros - Auciene dos Cartões.
              </p>

              <p className="m-text-historia text-center">
                Os ingressos podem ser adquiridos em Point Card Bezerros -
                Auciene dos Cartões, na R. Coronel Bezerra, Centro, ou{" "}
                <a
                  className="m-text-historia"
                  href="https://www.sympla.com.br/evento/21-baile-municipal-de-bezerros/2818440"
                  target="_blank"
                >
                  on-line através do Sympla.
                </a>
              </p>
            </div>
            <br></br>
          </section>
          <div className="divisoria"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
