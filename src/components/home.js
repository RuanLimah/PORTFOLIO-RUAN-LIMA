import React, { useState, useEffect } from 'react';
import './home.css';
import logo from '../assets/logo 1.png'; 
import email from '../assets/icon-email.png';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/icon-github.png';
import rectangle67 from '../assets/Rectangle 67.svg';
import rectangle82 from '../assets/Rectangle 82.png';
import menuIcon from '../assets/hamburguer.svg'; // Imagem do ícone de menu hamburger
import logo1 from '../assets/logo 1w.png';
import minhaFoto from '../assets/minha_foto1.jpg';  
import minhaFotoMobile from '../assets/minha_foto3.png';
import emailw from '../assets/emailw.png';
import linkedinw from '../assets/linkedinw.png';
import githubw from '../assets/githubw.png';

function Home() {
  const nome = "Ruan Lima"; 
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);
  const [apagar, setApagar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!apagar && indice < nome.length) {
        setTexto(prev => prev + nome.charAt(indice));
        setIndice(indice + 1);
      } else if (apagar && indice > 0) {
        setTexto(prev => prev.slice(0, -1));
        setIndice(indice - 1);
      } else {
        setTimeout(() => {  
          setApagar(!apagar);
        }, 1000);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [indice, apagar, nome]);

  return (
    <div className="home-container">
      <div className="home-left">
        <img src={logo} alt="Logo" className="home-logo" />
        <img src={logo1} alt='logo' className='home-logo1'/>
        <div className="home-text">
          <p className='home-welcome'>Olá, eu sou o</p>
          <h1 className='home-name'>{texto || "\u00A0"}</h1>
          <p className="home-description">Software Developer</p>
          <div className="home-icons">
            <a href="mailto:ruanlimah@hotmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="Email" className="icon" />
            </a>
            <a href="https://github.com/RuanLimah" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/ruanlimah" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
        <div className="home-icons-mobile">
          <a href="mailto:ruanlimah@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailw} alt="Email" className="icon1" />
          </a>
          <a href="https://github.com/RuanLimah" target="_blank" rel="noopener noreferrer">
            <img src={githubw} alt="GitHub" className="icon1" />
          </a>
          <a href="https://www.linkedin.com/in/ruanlimah" target="_blank" rel="noopener noreferrer">
            <img src={linkedinw} alt="LinkedIn" className="icon1" />
          </a>
        </div>
      </div>
      <div className="home-right">
        <nav className="home-nav">
          {/* Ícone de menu hamburger para dispositivos móveis */}
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu ao clicar
          />
          {/* Menu de navegação (mostrado/oculto com base no estado menuOpen) */}
          <ul className={`home-list ${menuOpen ? 'active' : ''}`}>
            <li className="home-item">
              <a href="#sobre-mim" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#sobre-mim').scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false); 
              }}>Sobre Mim</a>
            </li>
            <li className="home-item">
              <a 
                href="https://drive.google.com/file/d/1bAmfa8msisE9g0dqfOBIPSF6lnV8Vgdq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Currículo
              </a>
            </li>
            <li className="home-item">
              <a href="#section-skills" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#section-skills').scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false); 
              }}>Skills</a>
            </li>
            <li className="home-item">
              <a href="#section-portfolio" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#section-portfolio').scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false); 
              }}>Portfólio</a>
            </li>
            <li className="home-item contact">
              <a href="#contate-me" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contate-me').scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false); 
              }}>Contate-me</a>
            </li>
          </ul>
        </nav>
        <div className="home-right">
          <img src={rectangle67} alt="Rectangle" className="rectangle" />
          <img src={rectangle82} alt="Rectangle" className="rectangle82" />
          <div className="photo-container">
            <img src={minhaFoto} alt="minha foto" className="minha-foto" />
            <img src={minhaFotoMobile} alt="minha foto" className="minha-foto1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
