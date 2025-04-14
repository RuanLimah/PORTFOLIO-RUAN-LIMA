import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';
import linkedin1 from '../assets/linkedin1.svg';
import email from '../assets/email.svg';
import instagran from '../assets/insta.svg';
import seta from '../assets/double-arrow.svg';
import separador from '../assets/separatorBlack 1.png';


function Contact() {
  const [state, handleSubmit] = useForm("xqazvvvy"); // Substitua pelo seu ID do Formspree

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contact-section">
      <div id='contate-me' className="contact-title">
        <h1>CONTATO</h1>
      </div>

      {state.succeeded ? (
        <p>Obrigado por entrar em contato! Responderemos em breve.</p>
      ) : (
        <>
          <p className="contact-subtext">
            Meu nome é Ruan Lima, sou estudante do segundo ano de Engenharia de Software na Universidade Unicesumar, em São Paulo, capital.
          </p>
          <img src={separador} alt="Divider" className="divider" />
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder=" " required />
              <label htmlFor="name">SEU NOME</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder=" " required />
              <label htmlFor="email">SEU EMAIL</label>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <input type="text" name="phone" id="phone" placeholder=" " />
              <label htmlFor="phone">CELULAR</label>
            </div>
            <div className="form-group">
              <textarea name="message" id="message" placeholder=" " required></textarea>
              <label htmlFor="message">SUA MENSAGEM</label>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="submit-btn">
              <button type="submit" disabled={state.submitting}>
                SUBMIT
              </button>
            </div>
          </form>
        </>
      )}

      {/* Rodapé */}
      <footer className="footer">
        <img src={seta} alt="Voltar ao topo" className="double-arrow" />
        <button className="back-to-top" onClick={scrollToTop}>BACK TO TOP</button>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ruanlimah/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin1} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/ruanlimah/" target="_blank" rel="noopener noreferrer">
            <img src={instagran} alt="Instagram" />
          </a>
          <a href="mailto:ruanlimah@hotmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
        <div>
          <p className='back-to-top'>@2024 Ruan Lima All Rigths Reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
