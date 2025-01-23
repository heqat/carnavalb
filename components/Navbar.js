import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import marca from '../public/LOGO.png'
import Link from 'next/link'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item')
    const navbarCollapse = document.getElementById('navbar-collapse')
    navItems.forEach((l) => {
      l.addEventListener('click', () => {
        navbarCollapse.classList.remove('show')
      })
    })

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // Ajuste a margem conforme necessário
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav id='navbar' className='navbar navbar-expand-lg fixed-top'>
        <div className='container'>
          <a href="/"><Image className='m-navbar-marca' src={marca} alt='marca carnaval' height={85} /></a>

          <button id='btn-nav' className='navbar-toggler text-white' type='button' aria-expanded='false' data-bs-toggle='collapse' data-bs-target='#navbar-collapse'>
            <i className='bx bx-menu bx-md'></i>
          </button>

          <div className='navbar-collapse collapse' id='navbar-collapse'>
            <ul className='navbar-nav ms-auto align-items-center'>
            
            <li className={`nav-item m-2 ${router.pathname === '/historia' ? 'active' : ''}`}>
                <a href='/historia' className='text-nav p-2' onClick={() => setActiveSection('')}>HISTORIA</a>
                 
                </li>

              <li className={`nav-item m-2 ${activeSection === 'programacao' ? 'active' : ''}`}>
                <a href='/../#programacao' className='text-nav p-2' onClick={() => setActiveSection('programacao')}>ATRAÇÕES CONFIRMADAS</a>
                 
                </li>

                <li className={`nav-item m-2 ${router.pathname === '/baile-municipal' ? 'active' : ''}`}>
                <a href='/baile-municipal' className='text-nav p-2' onClick={() => setActiveSection('')}>BAILE MUNICIPAL</a>
                 
                </li>

                <li className={`nav-item m-2 ${activeSection === 'mapa' ? 'active' : ''}`}>
                <a href= '/../#mapa' className='text-nav p-2' onClick={() => setActiveSection('')}>MAPA</a>
                 
                </li>
          
              <li className={`nav-item m-2 ${activeSection === 'faq' ? 'active' : ''}`}>
                <a href='/../#faq' className='text-nav p-2' onClick={() => setActiveSection('faq')}>FAQ</a>
              </li>
             
            
                
              
            </ul>
            <ul className='navbar-nav d-flex justify-content-center flex-row align-items-center ms-auto m-navbar-icones'>
              <li className='nav-item m-2'>
                <Link href='https://www.facebook.com/saojoaonaserranegra/' rel="noreferrer" className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-facebook-circle bx-sm'></i></Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='https://instagram.com/foliadopapanguoficial/' rel="noreferrer" className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-instagram bx-sm'></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-item.active a {
          font-size: larger;
          font-weight: bold;
        }
        .nav-item.active-vitrine a {
          font-size: larger;
          font-weight: bold;
        
     style
      `}</style>
    </header>
  )
}
