import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Steps from './Steps.jsx';
import StarRating from './StarRating/StarRating.jsx';
import App from './TextExapander/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
