import React from 'react';
import './portfolio.css';
import organo from '../assets/organo.png'; 
import aluraFlix from '../assets/aluraFlix.png';
import criptografador from '../assets/criptografia.png';
import aluraGeek from '../assets/aluraGeek.png';
import helloWorld from '../assets/helloWorld.png';
import secreto from '../assets/secreto.png';

function Projects() {
  const projects = [
    { title: 'Organo', imgSrc: organo, demoLink: 'https://organo-pessoas-times-qc5h1vmte-ruanlimahs-projects.vercel.app/', repoLink: 'https://github.com/RuanLimah/ORGANO-PESSOAS-TIMES' },
    { title: 'AluraFlix', imgSrc: aluraFlix, demoLink: 'https://challenge-aluraflix-jnlp9klxv-ruanlimahs-projects.vercel.app/', repoLink: 'https://github.com/RuanLimah/CHALLENGE-ALURAFLIX' },
    { title: 'Criptografador', imgSrc: criptografador, demoLink: 'https://challange-alura-criptografador.vercel.app/', repoLink: 'https://github.com/RuanLimah/CHALLANGE-ALURA-CRIPTOGRAFADOR' },
    { title: 'AluraGeek', imgSrc: aluraGeek, demoLink: 'https://challenge-alurageek-nine.vercel.app/', repoLink: 'https://github.com/RuanLimah/CHALLENGE_ALURAGEEK' },
    { title: 'HelloWorld', imgSrc: helloWorld, demoLink: 'https://hello-world-rho-lake.vercel.app/', repoLink: 'https://github.com/RuanLimah/HELLO-WORLD' },
    { title: 'JogoSecreto', imgSrc: secreto, demoLink: 'https://gamedosnumeros-jzlef6osu-ruanlimahs-projects.vercel.app/', repoLink: 'https://github.com/RuanLimah/jogo-do-numero-secreto' },
  ];

  return (
    <div id='section-portfolio' className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-content">
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-buttons">
                  <a href={project.demoLink} className="btn" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.repoLink} className="btn" target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
