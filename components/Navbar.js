import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import marca from "../public/LOGO.png";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [termoBusca, setTermoBusca] = useState(""); 
  
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchFocus = (e) => {
    e.preventDefault();
    closeMenu();

    const termoParaEnviar = termoBusca;

    setTermoBusca("");

    if (termoParaEnviar.trim() !== "") {
        router.push({
            pathname: '/',
            query: { busca: termoParaEnviar },
            hash: 'programacao'
        });
    } else {
        router.push('/#programacao');
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;

      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 500);
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
          <a href="/" className="navbar-brand">
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
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu bx-md"></i>
          </button>

          <div
            className={`navbar-collapse collapse ${isMenuOpen ? "show" : ""}`}
            id="navbar-collapse"
          >
            <ul className="navbar-nav me-auto align-items-center">
              <li className={`nav-item m-2 ${activeSection === "baile" ? "active" : ""}`}>
                <a
                  href="/../#baile"
                  className="text-nav p-2"
                  onClick={() => { setActiveSection("baile"); closeMenu(); }}
                >
                  BAILE MUNICIPAL
                </a>
              </li>
              <li className={`nav-item m-2 ${activeSection === "programacao" ? "active" : ""}`}>
                <a
                  href="/../#programacao"
                  className="text-nav p-2"
                  onClick={() => { setActiveSection("programacao"); closeMenu(); }}
                >
                  ATRAÇÕES
                </a>
              </li>
              <li className={`nav-item m-2 ${activeSection === "mapa" ? "active" : ""}`}>
                <a
                  href="/../#mapa"
                  className="text-nav p-2"
                  onClick={() => { setActiveSection("mapa"); closeMenu(); }}
                >
                  MAPA
                </a>
              </li>
            </ul>

            {/*  BUSCA */}
            <div className="search-pill-container">
                <div className="search-pill">
                    <input 
                        type="text" 
                        placeholder="Buscar atração..." 
                        className="search-input"
                        value={termoBusca} 
                        onChange={(e) => setTermoBusca(e.target.value)}
                        onKeyDown={(e) => { if(e.key === 'Enter') handleSearchFocus(e) }}
                    />
                    <button className="search-btn" onClick={handleSearchFocus}>
                        <i className="bx bx-search bx-sm"></i>
                    </button>
                </div>
            </div>

            <ul className="navbar-nav ms-auto d-flex justify-content-center flex-row align-items-center m-navbar-icones">
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
              <li className="nav-item m-2">
                <a
                  href="https://open.spotify.com/playlist/56vXoOCmiFrA0IAN7rc5XP?si=1c0b45e8fd9746ab"
                  className="m-icone-navbar text-white p-1"
                  target="_blank"
                >
                  <i className="bx bxl-spotify bx-sm"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}