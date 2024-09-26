import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Modal from './components/Modal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Modal message={'hi there'} show={true} /> */}
  </StrictMode>
);
