import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure to install react-router-dom
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Refokus-UI-Clone-Reactjs/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
