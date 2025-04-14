import React, { useState, useEffect } from 'react';
import './skillsEducation.css';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import sassLogo from '../assets/saas.svg';
import jsLogo from '../assets/js.svg';
import reactLogo from '../assets/react.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import gitLogo from '../assets/git.svg';
import figmaLogo from '../assets/figma.svg';
import separador from '../assets/separatorBlack 1.png';
import node from '../assets/nodeJs.png';
import mySql from '../assets/mySql.svg';
import mongoDB from '../assets/mongoDB.png';
import ts from '../assets/ts.png';
import flagInglesa from '../assets/flagBritanica.svg';
import flagEspanica from '../assets/flagEspanica.svg';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import designIcon from '../assets/designer.png';
import developmentIcon from '../assets/development.png';
import maintenanceIcon from '../assets/maintenace.png';

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const certificatesContext = require.context('../certificates', false, /\.pdf$/);
const certificates = certificatesContext.keys().map((filePath) => {
  const fileName = filePath.replace('./', '').replace('.pdf', '');
  return {
    name: fileName,
    pdf: certificatesContext(filePath),
  };
});

function SkillsEducation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [thumbnailUrls, setThumbnailUrls] = useState([]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  
    if (isExpanded) {
      setTimeout(() => {
        const educationSection = document.getElementById('education-section');
        if (educationSection) {
          educationSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10); // Pequeno delay para garantir que o DOM atualize antes do scroll
    }
  };
  

  useEffect(() => {
    const fetchThumbnails = async () => {
      const urls = await Promise.all(certificates.map(async (cert) => {
        const pdf = await getDocument(cert.pdf).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
        return canvas.toDataURL();
      }));
      setThumbnailUrls(urls);
    };

    fetchThumbnails();
  }, []);

  return (
    <div className="skills-education-section">
      {/* EDUCAÇÃO */}
      <div id="education-section" className="education-section">
        <h2 className="section-title">EDUCAÇÃO</h2>
        <p className="description">
          Faço bacharelado de Engenharia de Software e busco sempre me especializar por meio de cursos extracurriculares.
        </p>

        {!isExpanded && (
          <button className="explore-btn" onClick={toggleExpand}>
            EXPLORE
          </button>
        )}

        {isExpanded && (
          <>
            <div className="certificates">
              <div className="certificates-grid">
                {certificates.map((cert, index) => (
                  <a key={index} href={cert.pdf} target="_blank" rel="noopener noreferrer">
                    <div className="certificate-item">
                      <img src={thumbnailUrls[index]} alt={`Thumbnail do ${cert.name}`} />
                      <p>{cert.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="ver-menos-wrapper">
              <button className="explore-btn" onClick={toggleExpand}>
                VER MENOS
              </button>
            </div>
          </>
        )}
      </div>

      <img src={separador} alt="Divider" className="divider" />

      {/* SERVIÇOS */}
      <h2 className="section-title">SERVIÇOS</h2>
      <div className="services-section">
        <div className="services-row">
          <div className="service-item">
            <img src={designIcon} alt="Design Icon" className="service-design" />
            <h3 className="service-title">DESIGN</h3>
            <p className="service-description">
              Transforme suas ideias em realidade com um design personalizado que reflete a essência do seu projeto.
              Estou aqui para ouvir suas necessidades e criar uma solução visual que se destaca.
            </p>
          </div>

          <div className="service-item">
            <img src={developmentIcon} alt="Development Icon" className="service-icon" />
            <h3 className="service-title">DEVELOPMENT</h3>
            <p className="service-description">
              Desenvolva sua presença online com um site robusto e funcional.
              Meu objetivo é construir plataformas que atendam às suas expectativas e ofereçam uma experiência fluida para os usuários.
            </p>
          </div>
        </div>

        <div className="service-item centered">
          <img src={maintenanceIcon} alt="Maintenance Icon" className="service-icon" />
          <h3 className="service-title">MANUTENÇÃO</h3>
          <p className="service-description">
            Posso gerenciar a manutenção do site conforme suas necessidades e sugestões,
            além de oferecer suporte contínuo durante e após o processo de desenvolvimento.
          </p>
        </div>

        <img src={separador} alt="Divider" className="divider" />
      </div>

      {/* SKILLS */}
      <h2 id="section-skills" className="section-title">SKILLS</h2>

      <h3 className="skills-using">USANDO AGORA:</h3>
      <div className="skills-grid">
        {[htmlLogo, cssLogo, sassLogo, jsLogo, reactLogo, node, mySql, gitLogo, bootstrapLogo, figmaLogo].map((logo, i) => (
          <div className="skill-item" key={i}>
            <img src={logo} alt="Skill" />
            <p>{['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT', 'REACT', 'NODEJS', 'MYSQL', 'GIT', 'BOOTSTRAP', 'FIGMA'][i]}</p>
          </div>
        ))}
      </div>

      <h3 className="skills-Learning">Learning:</h3>
      <div className="learning-grid">
        <div className="skill-item">
          <img src={ts} alt="TypeScript" />
          <p>TYPESCRIPT</p>
        </div>
        <div className="skill-item">
          <img src={mongoDB} alt="MongoDB" />
          <p>MONGODB</p>
        </div>
      </div>

      <h3 className="skills-others">Outras Skills:</h3>
      <div className="others-grid">
        <div className="skill-item">
          <img src={flagInglesa} alt="Inglês" />
          <p>ENGLISH B1</p>
        </div>
        <div className="skill-item">
          <img src={flagEspanica} alt="Espanhol" />
          <p>ESPANHOL B1</p>
        </div>
      </div>

      <div>
        <h2 className="section-title">PORTFÓLIO</h2>
      </div>
    </div>
  );
}

export default SkillsEducation;
