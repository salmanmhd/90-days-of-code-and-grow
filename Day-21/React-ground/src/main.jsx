import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Steps from './Steps.jsx';
import DateCounter from './DateCounter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Steps /> */}
    <DateCounter />
  </StrictMode>
);