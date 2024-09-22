import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Steps from './Steps.jsx';
import App from './TabbedContent/App';
import Random from './Random';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Random />
  </StrictMode>
);
