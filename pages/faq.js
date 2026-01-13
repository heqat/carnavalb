import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  // Estado para controlar qual pergunta está aberta (null = nenhuma)
  const [activeIndex, setActiveIndex] = useState(null);

  // Dados das Perguntas (Fácil de editar)
  const faqData = [
    {
      pergunta: "Quando começa o Carnaval do Papangu 2026?",
      resposta:
        "A festa oficial começa na sexta-feira de carnaval, mas as prévias e o clima de folia tomam conta da cidade semanas antes. Fique ligado na nossa programação oficial para não perder o Galo, os blocos de rua e os shows no palco principal!",
    },
    {
      pergunta: "Onde posso encontrar a programação dos blocos?",
      resposta:
        "A programação completa dos blocos, horários de saída e percursos está disponível aqui no site na aba 'Programação' e também em nossas redes sociais oficiais. Atualizamos diariamente durante o período festivo.",
    },
    {
      pergunta: "Como chegar em Bezerros?",
      resposta:
        "Bezerros fica localizada no Agreste de Pernambuco, às margens da BR-232, a cerca de 100km de Recife e 30km de Caruaru. O acesso é fácil e duplicado, com diversas opções de ônibus saindo do Terminal Integrado de Passageiros (TIP) em Recife.",
    },
    {
      pergunta: "É seguro levar crianças?",
      resposta:
        "Sim! O Carnaval de Bezerros é conhecido por ser um dos mais familiares e seguros do estado. Temos o polo infantil e horários mais tranquilos durante o dia, ideal para apresentar a cultura dos Papangus aos pequenos com tranquilidade.",
    },
    {
      pergunta: "Onde ficam os serviços de emergência e saúde?",
      resposta:
        "Durante o carnaval, montamos uma estrutura especial de saúde e segurança. O posto médico avançado fica próximo à Praça da Matriz, e temos viaturas do SAMU e Polícia Militar em pontos estratégicos dos polos de animação.",
    },
    {
      pergunta: "Como participar do concurso de Papangus?",
      resposta:
        "As inscrições para o tradicional Concurso dos Papangus geralmente abrem algumas semanas antes do evento e podem ser feitas na Secretaria de Turismo ou online. Fique atento às categorias (tradicional, estilizado, infantil) e aos prêmios!",
    },
  ];

  // Função para alternar (abrir/fechar)
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Fecha se já estiver aberto
    } else {
      setActiveIndex(index); // Abre o novo e fecha o anterior
    }
  };

  return (
    <>
      <Head>
        <title>FAQ - Carnaval do Papangu 2025</title>
        <meta name="title" content="FAQ - Carnaval do Papangu 2025" />

        <meta
          property="og:url"
          content="https://carnaval.bezerros.pe.gov.br/faq"
        />
        <meta property="og:title" content="FAQ - Carnaval do Papangu 2025" />
        <meta
          property="twitter:url"
          content="https://carnaval.bezerros.pe.gov.br/faq"
        />
        <meta
          property="twitter:title"
          content="FAQ - Carnaval do Papangu 2025"
        />
      </Head>

      <Navbar />

      <main>
        <section id="faq">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="page-title fade-in-animation">Dúvidas Frequentes</h1>
            <p className="page-subtitle fade-in-animation">
              Tudo o que você precisa saber para curtir a folia com
              tranquilidade.
            </p>

            <div className="faq-container">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  } fade-in-animation`}
                  style={{ animationDelay: `${index * 0.1}s` }} // Efeito cascata
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="question-text">{item.pergunta}</span>
                    <span className="icon-toggle">
                      <i className="bx bx-plus"></i> {/* Ícone do Boxicons */}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <div className="answer-content">{item.resposta}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Elemento Decorativo no final */}
            <img
              src="/filapapangu.png"
              className="faq-footer-img fade-in-animation"
              alt="Papangu"
            />
          </div>
        </section>

        <div className="divisoria"></div>
      </main>

      <Footer />
    </>
  );
}
