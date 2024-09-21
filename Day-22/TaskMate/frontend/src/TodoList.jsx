import { MdDelete } from 'react-icons/md';
function TodoList({ todo, onComplete, onDelete }) {
  return (
    <ul
      className={`flex items-center justify-between w-full max-w-md p-4 rounded-lg shadow-md transition-opacity`}
    >
      <li
        className={`text-lg ${todo.completed ? 'opacity-20' : 'opacity-100'}`}
      >
        {todo.title}
      </li>
      <div className={`flex items-center gap-4`}>
        <input
          type='checkbox'
          checked={todo.completed}
          className='w-4 h-4 cursor-pointer accent-yellow-300'
          onChange={() => onComplete({ id: todo._id })}
        />
        <button
          className='h-6 w-6 flex items-center justify-center text-white rounded-lg  hover:scale-125'
          onClick={() => onDelete(todo._id)}
        >
          <MdDelete size={20} />
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
