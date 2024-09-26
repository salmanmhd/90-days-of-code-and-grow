import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='bg-white/5 backdrop-blur-lg border-t border-r border-b border-white/20 w-64 px-6 py-8 fixed rounded-tr-lg rounded-br-lg shadow-lg h-full'>
      <h2 className='text-3xl font-semibold text-green-600 mb-8 text-center'>
        Expense Tracker
      </h2>
      <ul>
        <li className='mb-4'>
          <NavLink
            to='/'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Dashboard
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/add-expense'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Add Expense
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/add-income'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Add Income
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/expense-list'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Expense List
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/reports'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Reports
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/categories'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Categories
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/settings'
            className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
