import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import Reports from './components/Reports';
import Categories from './components/Categories';
import Settings from './components/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const initialState = {
  balance: 0,
  totalAmount: 0,
  totalExpense: 0,
  expenses: [
    { amount: 500, name: 'Groceries', category: 'Food', date: '2022-01-01' },
    { amount: 200, name: 'Dinner', category: 'Food', date: '2024-01-02' },
    {
      amount: 100,
      name: 'Car',
      category: 'Transportation',
      date: '2023-01-03',
    },
    {
      amount: 50,
      name: 'Hiking',
      category: 'Entertainment',
      date: '2024-01-04',
    },
  ],
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen'>
        <div className='flex h-screen'>
          <Sidebar />
          <div className='ml-64 p-8 w-full overflow-y-auto'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/add-expense' element={<AddExpense />} />
              <Route path='/expense-list' element={<ExpenseList />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
