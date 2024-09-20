function TodoForm() {
  return (
    <form className='flex gap-8 border border-white p-10 w-2/5 rounded-lg mb-10'>
      <input
        className='rounded-lg px-3 w-3/4'
        type='text'
        placeholder='Add a task.'
      />
      <button className='rounded-md bg-blue-500 px-3 py-1' type='submit'>
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
