// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from 'react';

export default function App() {
  const [fromCurr, setFromCurr] = useState('INR');
  const [toCurr, setToCurr] = useState('USD');
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#081c15', // Dark green background
    fontFamily: 'Arial, sans-serif',
  };

  const converterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3a5a40',
    width: '50%',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '20px',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #ccc',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const selectStyle = {
    padding: '12px',
    fontSize: '12px',
    borderRadius: '5px',
    border: '2px solid #ccc',
    width: '60px',
    // height: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    cursor: 'pointer',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  };

  const buttonStyle = {
    padding: '12px 20px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 2px 6px rgba(19, 42, 19, 0.5)',

    marginTop: '20px',
    width: '40%',
  };

  const outputStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '20px',
    padding: '10px 20px',
    border: '2px solid #4CAF50',
    borderRadius: '8px',
    backgroundColor: '#e6f7e6',
    boxShadow: '0px 2px 6px rgba(19, 42, 19, 0.5)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#ECF39E',
    marginBottom: '40px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '1px',
  };

  async function handleClick() {
    if (fromCurr === toCurr) {
      setResult(amount);
      return;
    }
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`
    );
    const data = await res.json();
    console.log(data);
    // const result = Math.round(data.rates[toCurr]);
    const result = data.rates[toCurr].toFixed(2);

    setResult(result);

    // setAmount(0);
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Modern Currency Convertor</h1>
      <div style={converterStyle}>
        <div style={rowStyle}>
          <input
            type='text'
            placeholder='Enter amount'
            style={inputStyle}
            onChange={(e) => {
              e.preventDefault();
              setAmount(Number(e.target.value));
              setResult(0);
            }}
          />
        </div>
        <div style={rowStyle}>
          <select
            style={selectStyle}
            value={fromCurr}
            onChange={(e) => {
              setFromCurr(e.target.value);
              setResult(0);
            }}
          >
            <option value='INR'>INR</option>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='CAD'>CAD</option>
            <option value='INR'>INR</option>
          </select>
          <select
            style={selectStyle}
            value={toCurr}
            onChange={(e) => {
              setToCurr(e.target.value);
              setResult(0);
            }}
          >
            <option value='INR'>INR</option>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='CAD'>CAD</option>
            <option value='INR'>INR</option>
          </select>
        </div>
        <button style={buttonStyle} onClick={handleClick}>
          Convert
        </button>
        {result !== 0 && (
          <p
            style={outputStyle}
          >{`${amount} ${fromCurr} =  ${result} ${toCurr}`}</p>
        )}
      </div>
    </div>
  );
}
