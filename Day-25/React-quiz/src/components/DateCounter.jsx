import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'dec':
      return { ...state, count: state.count - state.step };

    case 'reset':
      return { ...state, count: 0, step: 1 };

    case 'defineCount':
      return { ...state, count: action.payload };

    case 'defineStep':
      return { ...state, step: action.payload };

    default:
      throw new Error('Unknown action');
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  const initalState = { count: 0, step: 1 };
  const [{ count, step }, dispatch] = useReducer(reducer, initalState);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' });
  };

  const inc = function () {
    dispatch({ type: 'inc' });
  };

  const defineCount = function (e) {
    dispatch({ type: 'defineCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: 'defineStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
