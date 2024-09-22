import { useState } from 'react';
import './steps.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
function Steps() {
  const [steps, setSteps] = useState(1);

  function onPrevious() {
    if (steps > 1) {
      setSteps((step) => step - 1);
    }
  }
  function onNext() {
    if (steps < 3) {
      setSteps((step) => step + 1);
    }
  }
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={steps >= 1 ? 'active' : ''}>1</div>
        <div className={steps >= 2 ? 'active' : ''}>2</div>
        <div className={steps >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className='message'>
        Step {steps}: {messages[steps - 1]}
      </p>
      <div className='buttons'>
        <button
          onClick={onPrevious}
          style={{ backgroundColor: '#7950f2', color: '#FFF' }}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          style={{ backgroundColor: '#7950f2', color: '#FFF' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Steps;
