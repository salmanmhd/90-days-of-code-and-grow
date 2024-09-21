function TodoList({ todo, onComplete, onDelete }) {
  return (
    <ul className='flex items-center justify-between w-full max-w-md p-4  rounded-lg shadow-md'>
      <li className='text-lg'>{todo.title}</li>
      <div className='flex items-center gap-4'>
        <input
          type='checkbox'
          checked={todo.completed}
          className='w-6 h-6 cursor-pointer accent-yellow-300'
          onChange={() => onComplete({ id: todo._id })}
        />
        <button
          className=' h-8 w-8 text-white rounded-lg hover:bg-red-500'
          onClick={() => onDelete({ id: todo._id })}
        >
          ➖
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
