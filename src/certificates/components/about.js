import React, { useState } from 'react';
import './about.css';
import itb from '../assets/Logo ITB.png';
import itbm from '../assets/ITBM.png';

function About() {
  const [expandido, setExpandido] = useState(false);

  const handleLeiaMais = () => {
    setExpandido(!expandido); // Alterna entre expandido e recolhido
  };

  return (
    <div id='sobre-mim' className={`about-container ${expandido ? 'expandido' : 'recolhido'}`}> 
    <img src={itb} alt="Logo ITB" className="logo-itb" />
    <img src={itbm} alt="Logo ITB" className="logo-itbm" />
      <div className="about-content">
        <h2>Sobre mim</h2>
          <p>
          Atualmente, estou imerso no mundo do desenvolvimento de software, 
          buscando constantemente aprimorar minhas habilidades e conhecimentos em tecnologias inovadoras. 
          Meu foco é aplicar as melhores práticas de desenvolvimento para criar soluções eficientes e funcionais, sempre com um olhar voltado para a experiência do usuário e a otimização de processos.
          </p>
        {expandido && (
          <div className="extra-content">
            <p>
              Minha carreira teve início como eletricista instalador, onde desenvolvi habilidades técnicas robustas e um forte compromisso com a segurança e a eficiência. 
              Essa vivência no setor elétrico me proporcionou uma base sólida que me preparou para uma transição bem-sucedida para o desenvolvimento de software. 
              Aprendi a resolver problemas de maneira eficaz e a manter altos padrões de qualidade, que se mostraram essenciais em minha nova trajetória.
            </p>
            <p>
              Estou sempre em busca de novas oportunidades de aprendizado e crescimento.
               Meu objetivo é aplicar minhas habilidades em um ambiente profissional dinâmico, 
              contribuindo para projetos inovadores e colaborando com equipes dedicadas.
            </p>
            <p>
              Entusiasmado para transformar ideias em realidade, estou comprometido em agregar valor a cada projeto em que participo, 
              unindo minha experiência técnica e minha paixão por tecnologia para impactar positivamente o mundo ao meu redor.
            </p>
          </div>
        )}
        <button className="leia-mais-btn" onClick={handleLeiaMais}>
          {expandido ? 'MOSTRE MENOS' : 'LEIA MAIS'}
        </button>
      </div>
    </div>
  );
}

export default About;
