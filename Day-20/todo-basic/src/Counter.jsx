import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
      >{`counter: ${counter}`}</button>
    </div>
  );
}

export default Counter;
