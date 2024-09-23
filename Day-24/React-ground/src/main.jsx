import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Steps from './Steps.jsx';
import App from './Currency-converter/App';
// import Random from './Random';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
