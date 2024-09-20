import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Steps from './Steps.jsx';
import Accordianv2 from './Accordian-component/Accordian.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Steps /> */}
    <Accordianv2 />
  </StrictMode>
);
