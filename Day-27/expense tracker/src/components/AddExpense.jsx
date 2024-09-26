import { useBank } from '../context/BankContext';
import Modal from './Modal';
import Table from './Table';
import Title from './Title';
import { useState } from 'react';

function AddExpense() {
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('food');
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { dispatch, expenses } = useBank();

  function handleSubmit(e) {
    e.preventDefault();

    const obj = {
      expense,
      amount,
      category,
      date,
      id: Date.now(),
    };

    dispatch({ type: 'AddExpense', payload: obj });

    setAmount('');
    setExpense('');
    setCategory('food');
    setDate('');
    setShowModal(true);
  }

  if (showModal)
    return (
      <Modal
        show={true}
        message={'Expense Added Successfully'}
        onClose={() => setShowModal(false)}
      />
    );

  return (
    <section id='add-expense' className='w-full h-full space-y-8'>
      <Title>Add Expense</Title>

      <div className='flex space-x-8'>
        <form className='space-y-4 w-1/2' onSubmit={handleSubmit}>
          <InputElement
            name={expense}
            onChange={(e) => setExpense(e.target.value)}
            type='text'
            title={'Name '}
            placeholder={'Enter item name'}
          />

          <InputElement
            placeholder={'Enter Amount'}
            name={amount}
            title={'Amount'}
            onChange={(e) => setAmount(Number(e.target.value))}
            type='number'
          />

          <div className='space-y-2'>
            <label htmlFor='category' className='block text-lg text-gray-300'>
              Category
            </label>
            <select
              name='category'
              onChange={(e) => setCategory(e.target.value)}
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
              name='date'
              onChange={(e) => setDate(e.target.value)}
              className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 mt-8 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
          >
            Add Expense
          </button>
        </form>

        <div className='w-2/5 pl-8 mt-8'>
          <Table expenses={expenses.slice(-4).reverse()} />
        </div>
      </div>
    </section>
  );
}

function InputElement({ type, placeholder, name, value, onChange, title }) {
  return (
    <div className='space-y-2'>
      <label htmlFor='expense-name' className='block text-lg text-gray-300'>
        {title}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        onChange={onChange}
        className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
      />
    </div>
  );
}

export default AddExpense;
