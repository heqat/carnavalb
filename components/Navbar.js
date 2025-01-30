import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import marca from "../public/LOGO.png";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Estado para visibilidade da navbar
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Atualiza a visibilidade da navbar
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Esconde ao rolar para baixo
      } else {
        setIsVisible(true); // Mostra ao rolar para cima
      }

      lastScrollY = currentScrollY;

      // Identifica a seção ativa
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // Ajuste conforme necessário
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);

      // Aguarda 300ms para reaparecer após parar a rolagem
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(true); // Mostra a navbar
      }, 500); // Tempo de delay ajustável
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg fixed-top ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <div className="container">
          <a href="/">
            <Image
              className="m-navbar-marca"
              src={marca}
              alt="marca carnaval"
              height={85}
            />
          </a>

          <button
            id="btn-nav"
            className="navbar-toggler text-white"
            type="button"
            aria-expanded="false"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse"
          >
            <i className="bx bx-menu bx-md"></i>
          </button>

          <div className="navbar-collapse collapse" id="navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">
                    <li
                className={`nav-item m-2 ${
                  activeSection === "baile" ? "active" : ""
                }`}
              >
                <a
                  href="/../#baile"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("baile")}
                >
                  BAILE MUNICIPAL
                </a>
              </li>
              <li
                className={`nav-item m-2 ${
                  activeSection === "homenageado" ? "active" : ""
                }`}
              >
                <a
                  href="/../#homenageado"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("homenageado")}
                >
                  HOMENAGEADO
                </a>
              </li>
              <li
                className={`nav-item m-2 ${
                  activeSection === "programacao" ? "active" : ""
                }`}
              >
                <a
                  href="/../#programacao"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("programacao")}
                >
                  PROGRAMAÇÃO
                </a>
              </li>
                      <li
                className={`nav-item m-2 ${
                  activeSection === "mapa" ? "active" : ""
                }`}
              >
                <a
                  href="/../#mapa"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("mapa")}
                >
                  MAPA
                </a>
              </li>
             
  
            </ul>
            <ul className="navbar-nav d-flex justify-content-center flex-row align-items-center ms-auto m-navbar-icones">
                 <li className="nav-item m-2">
                <Link
                  href="https://instagram.com/carnavaldopapanguoficial/"
                  rel="noreferrer"
                  className="m-icone-navbar text-white p-1"
                  target="_blank"
                >
                  <i className="bx bxl-instagram bx-sm"></i>
                </Link>
              </li>
              <li className='nav-item m-2'>
                <a href='https://open.spotify.com/playlist/56vXoOCmiFrA0IAN7rc5XP?si=1c0b45e8fd9746ab' className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-spotify bx-sm'></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        #navbar {
          transition: transform 0.3s ease-in-out;
        }
        #navbar.hidden {
          transform: translateY(-100%);
        }
        #navbar.visible {
          transform: translateY(0);
        }
        .nav-item.active a {
          font-size: larger;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
}
