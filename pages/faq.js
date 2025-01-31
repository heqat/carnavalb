import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function perguntas() {
    return (
        <>
            <Head>
                <title>FAQ - Carnaval do Papangu 2025</title>
                <meta name="title" content="FAQ - Carnaval do Papangu 2025" />

                <meta property="og:url" content="https://carnaval.bezerros.pe.gov.br/faq" />
                <meta property="og:title" content="FAQ - Carnaval do Papangu 2025" />
                <meta property="twitter:url" content="https://carnaval.bezerros.pe.gov.br/faq" />
                <meta property="twitter:title" content="FAQ - Carnaval do Papangu 2025" />
            </Head>

            <Navbar />

            <main>
            <section id="faq" className="pb-5 d-flex flex-column align-items-center">
    {/* Elemento papangu centralizado */}

          <div className="container d-flex justify-content-center align-items-center flex-column">
                <br></br>
                <br></br>
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
                    QUAIS SERÃO OS DIAS DE FESTA DO CARNAVAL 2025 DE BEZERROS?
                  </button>
                </h2>
                <div
                  id="flush-collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading1"
                  data-bs-parent="#accordionFlushExample"
                  
                >
                  <div className="accordion-body">
                    01, 02, 03, 04 e 05 de março de 2025.
                    
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading2">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                    Que horas devo chegar no DOMINGO DO PAPANGU?
                  </button>
                </h2>
                <div id="flush-collapse2" className="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Para o visitante que deseja prestigiar a folia do papangu, o conselho é: chegar cedinho, por volta das 8h os mascarados já circulam por toda cidade em direção a concentração na Praça São Sebastião.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading3">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                    Como será a estrutura da festa?
                  </button>
                </h2>
                <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">A estrutura completa da festa pode ser conferida no <a href='#mapa'>mapa.</a></div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading4">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                    Com que roupa eu vou?
                  </button>
                </h2>
                <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Use roupas leves e confortáveis, o clima está bem quente e a grande concentração de pessoas deixam o local ainda mais abafado.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading5">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                    Posso circular com recipientes de vidro nas imediações do palco principal?
                  </button>
                </h2>
                <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não é permitido.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading6">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                    Onde será o local de apoio para emergências?
                  </button>
                </h2>
                <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Teremos 4 pontos de apoio:
                    <ul>
                      <li>Pronto atendimento médico - ao lado da matriz;</li>
                      <li>⁠Ponto de remoção - atrás do palco do QG do frevo;</li>
                      <li>⁠Ponto de remoção - atrás do palco da centenária;</li>
                      <li>⁠Ponto de remoção - em frente à casa da mulher e UPA 24h em pleno funcionamento.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading7">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                    Onde posso encontrar artesanato e ou acessórios carnavalescos para aquisição?
                  </button>
                </h2>
                <div id="flush-collapse7" className="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">A Vitrine Criativa, espaço destinado a comercialização de artesanato local, ficará no corredor da folia, nas imediações da Praça da Bandeira, na lateral esquerda da Igreja Matriz, no sentido de quem vai em direção ao QG do Frevo.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading8">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                    Há algum ponto de apoio para mamães com bebês de colo?
                  </button>
                </h2>
                <div id="flush-collapse8" className="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">O fraldário estará localizado na praça da bandeira.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='divisoria'></div>
            </main>
            <Footer />
        </>
    )
}