import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Arquivo CSS global, se necessário
import App from './app'; // Importa o componente principal do aplicativo

// Adiciona a fonte Montserrat
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
