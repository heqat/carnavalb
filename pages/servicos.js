import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicosUteis() {
    return (
        <>
            <Head>
                <title>Nossos Serviços - Carnaval do Papangu 2024</title>
                <meta name="title" content="Nossos Serviços - Carnaval do Papangu 2025" />

                <meta property="og:url" content="https://carnaval.bezerros.pe.gov.br/servicos" />
                <meta property="og:title" content="Nossos Serviços - Carnaval do Papangu 2025" />
                <meta property="twitter:url" content="https://carnaval.bezerros.pe.gov.br/servicos" />
                <meta property="twitter:title" content="Nossos Serviços - Carnaval do Papangu 2025" />
            </Head>

            <Navbar />

            <main>
                <section id="servicos-uteis" className="pt-5">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className='papangu'></div>
             
                       
                        <div className="container-servico">
                            <p className="nome-servico">VITRINE CRIATIVA - Edição Carnaval</p>
                            <p className="texto-servico">Espaço dedicado para a comercialização do artesanato local, tendo como foco os produtos voltados para as festividades carnavalescas ou que tenham um apelo cultural de grande relevância para o município. A ação é apoiada pela Sala do Empreendedor de Bezerros, em parceria com o SEBRAE, e este ano os estandes estarão localizados na rua Dr. José Mariano, ao lado da Praça da Bandeira e da Igreja Matriz.</p>
                        </div>

                        <div className="container-servico">
                            <p className="nome-servico">CAT - Centro de Atendimento ao turista</p>
                            <p className="texto-servico">Localizado juntamente com a Vitrine Criativa, ao lado da Praça da Bandeira e da Igreja Matriz, o Centro de Atendimento ao Turista é um ponto de apoio e informação ao turista que visita nossa cidade durante os quatro dias de carnaval.</p>
                        </div>
                       
                        <div className="container-servico">
                            <p className="nome-servico">RECICLAR É MASSA</p>
                            <p className="texto-servico">O RECICLAR É MASSA faz parte do projeto Eco Folia, de educação ambiental, incentivo a reciclagem e apoio aos recicladores que trabalham durante os dias de carnaval coletando e separando o lixo gerado pelos foliões. Este ano o ponto de apoio fica ao lado do CAT, no corredor de estandes de serviços e artesanato, nas proximidades da  Praça da Bandeira e funciona das 9h às 22h.</p>
                        </div>

                        <div className="container-servico">
                            <p className="nome-servico">CENTRAL CIDADANIA</p>
                            <p className="texto-servico">A Central Cidadania oferece serviços sociais assistidos por uma equipe técnica psicossocial pronta para receber denúncias e orientar sobre violação de direitos (mulher, idoso, criança, LGBTQIAPN+). O estande, localizado na rua Dr. José Mariano, junto à Vitrine Criativa, ao lado da Praça da Bandeira, também disponibilizará material de sensibilização e prevenção das campanhas trabalhadas no ciclo carnavalesco.</p>
                            <p className="texto-servico">Contato: 81 99970-2943.</p>
                        </div>
                        <div className="container-servico">
                            <p className="nome-servico">PONTO DE ATENDIMENTO DE SAÚDE</p>
                            <p className="texto-servico">As urgências relacionadas a saúde devem ser encaminhadas para o ponto de atendimento específico que fica na Rua da Matriz, em frente às Lojas Americanas.</p>
                        </div>

                        <div className="container-servico">
                            <p className="nome-servico">VIGILÂNCIA EM SAÚDE</p>
                            <p className="texto-servico">Inspeciona e fiscaliza, assegurando o cumprimento das normas sanitárias e de segurança do evento. Verificando as condições de higiene dos alimentos e bebidas oferecidos, além da adequação de banheiros e instalações sanitárias do evento.</p>
                            <p className="texto-servico">Contato: (81)98292-9713.</p>
                        </div>

                        <div className="container-servico">

                            <ul>
                                                         
                                <p className="nome-servico">NÚMEROS ÚTEIS</p>
                                <div className="texto-servico">SAMU - 192/(81)3727-8350 ou (81)98384-4303.</div>
                                <div className="texto-servico">BOMBEIROS - 193.</div>
                                <div className="texto-servico">POLÍCIA - 190.</div>
                                <div className="texto-servico">DEFESA CIVIL - 199.</div>
                               
                            </ul>
                        </div>
                    </div>

                </section>
                <div className='divisoria'></div>
            </main>
            <Footer />
        </>
    )
}