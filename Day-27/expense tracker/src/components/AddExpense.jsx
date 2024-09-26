import Title from './Title';

const AddExpense = () => {
  return (
    <section id='add-expense' className='space-y-8 w-2/5 h-full '>
      <Title>Add Expense</Title>
      <form className='space-y-4 pl-8'>
        <div className='space-y-2'>
          <label htmlFor='expense-name' className='block text-lg text-gray-300'>
            Expense
          </label>
          <input
            type='text'
            id='expense-name'
            placeholder='E.g. Grocery, Rent'
            className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='amount' className='block text-lg text-gray-300'>
            Amount
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount'
            className='custom-number-input w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='category' className='block text-lg text-gray-300'>
            Category
          </label>
          <select
            id='category'
            className='w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg backdrop-blur-lg'
          >
            <option value='food'>Food</option>
            <option value='education'>Education</option>
            <option value='health'>Health</option>
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='date' className='block text-lg text-gray-300'>
            Date
          </label>
          <input
            type='date'
            className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
          />
        </div>
        <button
          type='submit'
          className='w-2/4 py-3 mt-8 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
        >
          Add Expense
        </button>
      </form>
    </section>
  );
};

export default AddExpense;
