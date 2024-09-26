import { set } from 'zod';
import { useBank } from '../context/BankContext';
import Title from './Title';
import Modal from './Modal';
import { useState } from 'react';

function AddIncome() {
  const [showModal, setShowModal] = useState(false);
  const { dispatch, totalExpense, totalIncome, balance } = useBank();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'addIncome', payload: Number(e.target.amount.value) });
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
      <section id='add-income' className='space-y-8 w-2/5 h-full'>
        <Title>Add Income</Title>
        <form className='space-y-4 pl-8' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <label htmlFor='amount' className='block text-lg text-gray-300'>
              Amount
            </label>
            <input
              type='number'
              id='amount'
              placeholder='Enter amount'
              name='amount'
              className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
            />
          </div>

          <button
            type='submit'
            className='w-2/4 py-3 mt-8 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
          >
            Add Income
          </button>
        </form>
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
