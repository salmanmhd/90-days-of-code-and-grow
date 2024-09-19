import React from 'react';

function TodoList() {
  return (
    <div id='myUnOrdList'>
      <ul className='todo-list'>
        {/* Placeholder for todo items */}
        <div className='todo'>
          <li>Task 1</li>
          <button>Delete</button>
          <button>Check</button>
        </div>
        <div className='todo'>
          <li>Task 2</li>
          <button>Delete</button>
          <button>Check</button>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
