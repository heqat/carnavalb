import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Historia() {

    return (
        <>
            <Head>
                <title>História - Carnaval do Papangu 2025</title>
                <meta name="title" content="História - Carnaval do Papangu 2025" />

                <meta property="og:url" content="https://carnaval.bezerros.pe.gov.br/historia" />
                <meta property="og:title" content="História - Carnaval do Papangu 2025" />
                <meta property="twitter:url" content="https://carnaval.bezerros.pe.gov.br/historia" />
                <meta property="twitter:title" content="História - Carnaval do Papangu 2025" />
            </Head>

            <Navbar />

            <main>
                <section id="historia" className="pt-5">

                    <div className="container container-homenageado">
                        <div className="container-foto d-flex justify-content-center align-items-center">
                            <img src="/marcavazada.png" className="imagem-artista historia"></img>
                        </div>
                        <div className="container-texto historia mt-5">
                            <div className="mt-5 mb-5">
                                <h2 className="m-titulo-secao text-center historia">HISTÓRIA DO PAPANGU</h2>
                                <p className="m-text-historia">Em meados dos anos de 1900, alguns amigos tiveram a ideia de fazer uma simples brincadeira: sair às ruas da cidade com roupas arranjadas e o rosto totalmente coberto para ninguém identificar quem estava por trás da fantasia. Os “mascarados” então passavam de casa em casa pedindo angu de milho aos moradores e criando o mistério sobre a identidade dos foliões. O tempo passou e a brincadeira ganhou vida entre os moradores que passaram, anualmente, a vivenciar os mascarados nas ruas. Quando eles surgiam, as crianças gritavam para seus familiares: “Lá vem os papa-angu”. Foi daí que surgiu o tradicional nome do Papangu, anfitrião do carnaval de Bezerros, no Agreste pernambucano.</p>
                                <p className="m-text-historia">Saindo em blocos ou sozinhos, com roupas combinadas e com ou sem adereços carnavalescos, os Papangus deram origem ao maior e melhor bloco de carnaval do interior do Brasil, o Bloco do Papangu. Na folia, a linguagem é uma só: felicidade. O anfitrião dos festejos também foi declarado Patrimônio Cultural Imaterial de Pernambuco, sendo eternizado nas fantasias, peças de artes, artigos decorativos, xilogravuras, músicas, adereços, entre outros itens que traduzem a riqueza histórica e cultural da Folia do Papangu de Bezerros para os quatro cantos do mundo.</p>
                            </div>

                            <div>
                                <h2 className="m-titulo-secao text-center historia">FASES DO PAPANGU</h2>
                                <p className="m-text-historia">A origem e evolução do Papangu de Bezerros é registrada em seis fases. A primeira fase relata a história que surgiu por volta de 1900. No período, os mascarados alegravam as festas dos senhores de engenhos, saiam pelas ruas da cidade, de casa em casa, pedindo angu de milho (massa consistente de farinha de milho – fubá). O famoso angu era servido puro ou com carne de bode, de galinha, de boi ou até com leite.</p>
                                <p className="m-text-historia">A segunda fase conta o surgimento da máscara confeccionada com papel de embrulhar charque, feita de forma simples, sem qualquer beleza estética. A terceira fase dá vida à máscara de tecido, inicialmente produzida com fronha de travesseiro. Na quarta fase, temos um pouco de cores, a partir da máscara de papel colê. O famoso “Cabeção” entra na quinta fase, levando alegria em seus traços, e, por fim, todo encantamento da sexta fase, com as máscaras de papel machê, mais tradicionais nos dias de hoje.</p>
                                <p className="m-text-historia">Em grupos com, no máximo, cinco pessoas, os mascarados eram anunciados pelas crianças que, com medo, gritavam “lá vem os papa-angu” e corriam para dentro de casa. Com o passar do tempo, a brincadeira virou tradição e foi passando de pai para filho.</p>
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