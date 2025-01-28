import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BaileMunicipal() {

    return (
        <>
            <Head>
                <title>Baile Municipal - Carnaval do Papangu 2024</title>
                <meta name="title" content="Baile Municipal - Carnaval do Papangu 2024" />

                <meta property="og:url" content="https://carnaval.bezerros.pe.gov.br/baile-municipal" />
                <meta property="og:title" content="Baile Municipal - Carnaval do Papangu 2024" />
                <meta property="twitter:url" content="https://carnaval.bezerros.pe.gov.br/baile-municipal" />
                <meta property="twitter:title" content="Baile Municipal - Carnaval do Papangu 2024" />
            </Head>

            <Navbar />

            <main>

                <section id="baile-municipal">
                    <div className=" d-flex flex-column justify-content-center align-items-center text-center">
                        <img src="/marca-baile3.png" alt="Marca Baile Municipal" className="baile-marca"></img>
                        <div className="container">
                            <h1 className="m-titulo-secao text-white">20º BAILE MUNICIPAL DE BEZERROS</h1>
                            <p className="m-text-historia">No sábado, dia 27 de janeiro de 2024, no Centro Literário Rui Barbosa, no Bairro do Cruzeiro, a partir das 21h. Bezerros espera por você para vivenciar momentos de saudades, boas lembranças, emoção e alegria no baile mais tradicional do interior.</p>
                        </div>

                        <img src="/atracoes.png" alt="Ingressos" className='mt-4 mb-4 divisoria-baile'></img>

                        <div className="container">
                            <p className="m-text-historia text-center">Apresentando:</p>
                            <img src="/artistas-baile.png" alt="Atrações" className='mt-4 mb-4 baile-atracoes divisoria-baile'></img>

                            <ul>
                                <li className="baile-list">Morganna Bernado;</li>
                                <li className="baile-list">Maestro Forró;</li>
                                <li className="baile-list">Nonô Germano;</li>
                                <li className="baile-list">Orquestra Cônego Alexandre Cavalcanti.</li>
                            </ul>

                        </div>

                        <img src="/ingressos.png" alt="Ingressos" className='mt-4 mb-4 divisoria-baile'></img>

                        <div className="container">
                            <p className="m-text-historia text-center">Valores:</p>
                            <ul>
                                <li className="baile-list">DIA DO EVENTO: <span className="baile-valor">27/01/2024.</span></li>
                                <li className="baile-list">INGRESSO INTEIRA: <span className="baile-valor">R$60.</span></li>
                                <li className="baile-list">INGRESSO SOCIAL: <span className="baile-valor">R$40 + 1kg de alimento.</span></li>
                                <li className="baile-list">INGRESSO MEIA: <span className="baile-valor">R$ 30.</span></li>
                            </ul>
                            <p className="m-text-historia text-center">Para aquisição de mesas e camarotes consultar disponibilidade em Auciene dos Cartões.</p>

                            <p className="m-text-historia text-center">Os ingressos podem ser adquiridos em Auciene dos Cartões ou <a className="m-text-historia" href="https://www.sympla.com.br/evento/20-baile-municipal-de-bezerros/2293408" target="_blank">on-line através do Sympla.</a></p>
                        </div>

                        <img src="/titulo-homenageada.png" alt="Homenageada" className='mt-4 mb-4 divisoria-baile' />

                        <div className="container d-flex justify-content-center align-items-center flex-column">
                            <img src="/homenageada.png" alt="Homenageada" className='mt-4 mb-4 divisoria-baile' />

                            <p className="m-text-historia">A homenageada do Baile Municipal de Bezerros 2024, é a bezerrense  Josefa Maria da Conceição, a conhecida Zeza Costureira, que ainda muito jovem, aos 19 anos, viu sua carreira iniciada organicamente, ao seguir os passos de sua mãe. Dona Maria Costureira enxergou na filha o talento para o ofício, e logo, fez de Zeza sua ajudante, um passo para ela praticar e aperfeiçoar suas habilidades na arte de transformar tecidos em roupa.</p>
                            <p className="m-text-historia mt-3">Nos anos 90, o trabalho de Zeza já despertava o interesse de estilistas renomados e carnavalescos da região, foi quando ela aceitou o convite para trabalhar com Alexandre Filho, estilista de sucesso da época. Naquele tempo sua carreira se voltou por completo para a confecção de fantasias e aquela foi a oportunidade para despertar seu espírito criativo e sua visão harmônica na composição de elementos, cores e texturas. Foram mais de 20 anos ao lado de Alexandre para finalmente alçar-se numa carreira independente.</p>
                            <p className="m-text-historia mt-3">Com uma carreira sólida, baseada na experiência diária e no reconhecimento popular, o nicho de Zeza ganhou maior visibilidade e seu nome era sinônimo de perfeição no quesito fantasia premiada, uma referência em toda região. Ela confeccionou muitas produções vencedoras de concursos, vestia e veste muitos foliões de tradição, blocos e grupos folclóricos da cidade como o Papanguarte e o Folcpopular, clientes fiéis que levam a arte bezerrense de todas as formas para os quatro cantos do Brasil.</p>
                        </div>
                    </div>

                    <section id="ingressos-baile">
                <div className="container d-flex justify-content-center align-items-center flex-column">
                            <img src="/homenageada.png" alt="Homenageada" className='mt-4 mb-4 divisoria-baile' />

                            <p className="m-text-historia">A homenageada do Baile Municipal de Bezerros 2024, é a bezerrense  Josefa Maria da Conceição, a conhecida Zeza Costureira, que ainda muito jovem, aos 19 anos, viu sua carreira iniciada organicamente, ao seguir os passos de sua mãe. Dona Maria Costureira enxergou na filha o talento para o ofício, e logo, fez de Zeza sua ajudante, um passo para ela praticar e aperfeiçoar suas habilidades na arte de transformar tecidos em roupa.</p>
                            <p className="m-text-historia mt-3">Nos anos 90, o trabalho de Zeza já despertava o interesse de estilistas renomados e carnavalescos da região, foi quando ela aceitou o convite para trabalhar com Alexandre Filho, estilista de sucesso da época. Naquele tempo sua carreira se voltou por completo para a confecção de fantasias e aquela foi a oportunidade para despertar seu espírito criativo e sua visão harmônica na composição de elementos, cores e texturas. Foram mais de 20 anos ao lado de Alexandre para finalmente alçar-se numa carreira independente.</p>
                            <p className="m-text-historia mt-3">Com uma carreira sólida, baseada na experiência diária e no reconhecimento popular, o nicho de Zeza ganhou maior visibilidade e seu nome era sinônimo de perfeição no quesito fantasia premiada, uma referência em toda região. Ela confeccionou muitas produções vencedoras de concursos, vestia e veste muitos foliões de tradição, blocos e grupos folclóricos da cidade como o Papanguarte e o Folcpopular, clientes fiéis que levam a arte bezerrense de todas as formas para os quatro cantos do Brasil.</p>
                        </div>
                </section>

                </section>

            </main>
            <Footer />
        </>
    )
}