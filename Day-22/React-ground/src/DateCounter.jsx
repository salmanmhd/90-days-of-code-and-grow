import { useState } from 'react';
const buttonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#4CAF50',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const spanStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 15px',
  display: 'inline-block',
};

const dateStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
};

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={() => setStep(step - 1)}>
          -
        </button>
        <span style={spanStyle}>Step: {step}</span>
        <button style={buttonStyle} onClick={() => setStep(step + 1)}>
          +
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
        <p style={spanStyle}>Count: {count}</p>
        <button style={buttonStyle} onClick={() => setCount(count + step)}>
          +
        </button>
      </div>

      <div style={dateStyle}>Today is {date}</div>
    </div>
  );
}

export default DateCounter;
