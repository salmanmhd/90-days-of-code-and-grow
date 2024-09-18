import { useState } from 'react';
import './App.css';

function App() {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      title: 'Start Your Deep work',
      desc: 'This is the thing that you need to learn',
      isCompleted: false,
    },
  ]);

  // function setDone(isCompleted) {
  //   isCompleted = !isCompleted;
  // }

  return (
    <div>
      <div>
        {todos.map((todo) => {
          return (
            <>
              <div>{`Title: ${todo.title}`}</div>
              <div>{`Desc: ${todo.desc}`}</div>
              <button onClick={todo.isCompleted}>
                {todo.isCompleted ? 'Done' : 'Mark done'}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
