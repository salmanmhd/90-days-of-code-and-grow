import { useBank } from '../context/BankContext';
import Title from './Title';

function AddIncome() {
  const { dispatch } = useBank();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'addIncome' });
  }
  return (
    <section id='add-income' className='space-y-8 w-2/5 h-full'>
      <Title>Add Income</Title>
      <form className='space-y-4 pl-8' onSubmit={handleSubmit}>
        {/* <div className='space-y-2'>
          <label htmlFor='income-source' className='block text-lg text-gray-300'>
            Income Source
          </label>
          <input
            type='text'
            id='income-source'
            placeholder='E.g. Salary, Freelance'
            className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
          />
        </div> */}
        <div className='space-y-2'>
          <label htmlFor='amount' className='block text-lg text-gray-300'>
            Amount
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount'
            className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
          />
        </div>
        {/* 
        <div className='space-y-2'>
          <label htmlFor='category' className='block text-lg text-gray-300'>
            Category
          </label>
          <select
            id='category'
            className='w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg backdrop-blur-lg'
          >
            <option value='salary'>Salary</option>
            <option value='freelance'>Freelance</option>
            <option value='investments'>Investments</option>
            <option value='other'>Other</option>
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
        </div> */}
        <button
          type='submit'
          className='w-2/4 py-3 mt-8 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
        >
          Add Income
        </button>
      </form>
    </section>
  );
}

export default AddIncome;
