import { useState } from 'react';
import { useBank } from '../context/BankContext';
import Modal from './Modal';
import Title from './Title';
import IncomeTable from './IncomeTable';

function AddIncome() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { dispatch, totalExpense, totalIncome, balance, incomes } = useBank();

  function handleSubmit(e) {
    e.preventDefault();
    const obj = { amount, source, date, id: Date.now() };
    dispatch({ type: 'addIncome', payload: obj });
    setShowModal(true);
  }

  if (showModal)
    return (
      <Modal
        message={'Added income'}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    );

  return (
    <div>
      <section id='add-income' className='space-y-8 w-full h-full'>
        <Title>Add Income</Title>
        {/* Flex container to align form and table side by side */}
        <div className='flex space-x-8'>
          {/* Form */}
          <form className='space-y-4 w-2/5' onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <label htmlFor='amount' className='block text-lg text-gray-300'>
                Amount
              </label>
              <input
                type='number'
                id='amount'
                placeholder='Enter amount'
                name='amount'
                onChange={(e) => setAmount(Number(e.target.value))}
                className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='income-source'
                className='block text-lg text-gray-300'
              >
                Income Source
              </label>
              <input
                type='text'
                id='income-source'
                placeholder='E.g. Salary, Freelance'
                onChange={(e) => setSource(e.target.value)}
                className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='date' className='block text-lg text-gray-300'>
                Date
              </label>
              <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
                className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
              />
            </div>
            <button
              type='submit'
              className='w-2/4 py-3 mt-10 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
            >
              Add Income
            </button>
          </form>
          <div className='w-3/5 mt-8'>
            <IncomeTable incomes={incomes.slice(-3).reverse()} />
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Total Income</h3>
          <p className='text-2xl mt-2 text-green-400'>{totalIncome}</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Total Expense</h3>
          <p className='text-2xl mt-2 text-green-400'>{totalExpense}</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Balance</h3>
          <p className='text-2xl mt-2 text-green-400'>{balance}</p>
        </div>
      </div>
    </div>
  );
}

export default AddIncome;
