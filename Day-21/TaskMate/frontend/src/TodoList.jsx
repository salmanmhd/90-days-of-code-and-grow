function TodoList({ title, completed }) {
  return (
    <ul className='flex items-center justify-between w-full max-w-md p-4  rounded-lg shadow-md'>
      <li className='text-lg'>{title}</li>
      <div className='flex items-center gap-4'>
        <input type='checkbox' checked={completed} className='w-6 h-6' />
        <button className=' h-8 w-8 text-white rounded-lg hover:bg-red-500'>
          ➖
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
