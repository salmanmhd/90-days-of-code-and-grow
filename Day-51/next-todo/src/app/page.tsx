'use client';
import { useState } from 'react';

const todoList = [
  {
    id: 1,
    todo: 'todo 1',
    completed: false,
  },
  {
    id: 2,
    todo: 'todo 2',
    completed: true,
  },
  {
    id: 3,
    todo: 'todo 3',
    completed: false,
  },
  {
    id: 4,
    todo: 'todo 4',
    completed: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(todoList);
  return (
    <div className='flex flex-col  gap-14 pt-20'>
      <form className='ml-24 flex gap-4'>
        <input
          type='text'
          className='bg-blue-900 h-10 text-blue-100 w-80 shadow-sm shadow-black rounded-full text-lg p-4'
          placeholder='add todo...'
        />
        <button className='rounded-full bg-yellow-400 text-blue-950 font-bold text-lg h-10 w-20 shadow-sm shadow-black hover:bg-blue-900'>
          Add
        </button>
      </form>
      <div className='bg-blue-950 text-white'>
        {todos.map((todo) => (
          <div
            className='flex w-96 shadow-sm shadow-black bg-blue-900 ml-20 rounded-3xl h-12 items-center justify-between px-6 my-8 text-2xl'
            key={todo.id}
          >
            <p>{todo.todo}</p>
            <input
              type='checkbox'
              className='h-4 w-4 accent-yellow-400'
              checked={todo.completed}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
