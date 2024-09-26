import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import Transaction from './components/Transaction';
import Reports from './components/Reports';
import Categories from './components/Categories';
// import Settings from './components/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BankProvider } from './context/BankContext';
import AddIncome from './components/AddIncome';

const App = () => {
  return (
    <BankProvider>
      <BrowserRouter>
        <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen'>
          <div className='flex h-screen'>
            <Sidebar />
            <div className='ml-64 p-8 w-full overflow-y-auto'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/add-expense' element={<AddExpense />} />
                <Route path='/add-income' element={<AddIncome />} />
                <Route path='/transactions' element={<Transaction />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/categories' element={<Categories />} />
                {/* <Route path='/settings' element={<Settings />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </BankProvider>
  );
};

export default App;
