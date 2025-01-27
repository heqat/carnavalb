import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import marca from "../public/LOGO.png";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Estado para visibilidade da navbar
  const [isScrolling, setIsScrolling] = useState(false); // Estado para controlar o movimento de rolagem
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Verifica se está rolando para baixo ou para cima
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Esconde a navbar ao rolar para baixo
      } else {
        setIsVisible(true); // Mostra a navbar ao rolar para cima
      }

      lastScrollY = currentScrollY;
      setIsScrolling(true); // Indica que o usuário está rolando

      // Aguarda 300ms antes de considerar que a rolagem parou
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(true); // Mostra a navbar após o delay
        setIsScrolling(false); // Define que a rolagem parou
      }, 300); // Ajuste o tempo do delay aqui (em ms)
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
                  router.pathname === "/historia" ? "active" : ""
                }`}
              >
                <a
                  href="/historia"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("")}
                >
                  HISTORIA
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
                  ATRAÇÕES CONFIRMADAS
                </a>
              </li>
              <li
                className={`nav-item m-2 ${
                  router.pathname === "/baile-municipal" ? "active" : ""
                }`}
              >
                <a
                  href="/baile-municipal"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("")}
                >
                  BAILE MUNICIPAL
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
                  onClick={() => setActiveSection("")}
                >
                  MAPA
                </a>
              </li>
              <li
                className={`nav-item m-2 ${
                  activeSection === "faq" ? "active" : ""
                }`}
              >
                <a
                  href="/../#faq"
                  className="text-nav p-2"
                  onClick={() => setActiveSection("faq")}
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex justify-content-center flex-row align-items-center ms-auto m-navbar-icones">
              <li className="nav-item m-2">
                <Link
                  href="https://www.facebook.com/saojoaonaserranegra/"
                  rel="noreferrer"
                  className="m-icone-navbar text-white p-1"
                  target="_blank"
                >
                  <i className="bx bxl-facebook-circle bx-sm"></i>
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link
                  href="https://instagram.com/foliadopapanguoficial/"
                  rel="noreferrer"
                  className="m-icone-navbar text-white p-1"
                  target="_blank"
                >
                  <i className="bx bxl-instagram bx-sm"></i>
                </Link>
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
      `}</style>
    </header>
  );
}
