import React from 'react';
import ReactDOM from 'react-dom/client';

// Se añade bootstrap al proyecto
import 'bootstrap/dist/css/bootstrap.css';
// ! Importante: Los estilos propios deben de ir debajo de bootstrap
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Link repositorio => https://gitlab.com/masajo/ob-react/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
