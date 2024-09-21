import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const todoObj = { title };
    onAddTodo(todoObj);
    setTitle('');
  }
  return (
    <form
      className='flex gap-8 border border-white p-10 w-2/5 rounded-lg mb-10'
      onSubmit={handleSubmit}
    >
      <input
        className='rounded-lg px-3 w-3/4 text-black'
        type='text'
        value={title}
        placeholder='Add a task.'
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='rounded-md bg-blue-500 px-3 py-1' type='submit'>
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
