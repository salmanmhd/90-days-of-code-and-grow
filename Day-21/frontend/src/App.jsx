// import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  return (
    <div>
      <div id='header'>
        <div className='flexrow-container'>
          <div className='standard-theme theme-selector'></div>
          <div className='light-theme theme-selector'></div>
          <div className='darker-theme theme-selector'></div>
        </div>
        <h1 id='title'>
          Just do it.<div id='border'></div>
        </h1>
      </div>

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
