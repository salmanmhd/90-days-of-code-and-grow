import React from 'react';

function TodoForm() {
  return (
    <div id='form'>
      <form>
        <input className='todo-input' type='text' placeholder='Add a task.' />
        <button className='todo-btn' type='submit'>
          I Got This!
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
