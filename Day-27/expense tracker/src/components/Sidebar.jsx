import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='bg-white/5 backdrop-blur-lg border-t border-r border-b border-white/20 w-64 px-6 py-8 fixed rounded-tr-lg rounded-br-lg shadow-lg h-full'>
      <h2 className='text-3xl font-semibold text-green-400 mb-8 text-center font-sofadi'>
        Expense Tracker
      </h2>

      <ul>
        <LinkPage to={'/'} text={'Dashboard'} />
        <LinkPage to={'/add-expense'} text={'Add Expense'} />
        <LinkPage to={'/add-income'} text={'Add Income'} />
        <LinkPage to={'/transactions'} text={'Transactions'} />
        <LinkPage to={'/reports'} text={'Report'} />
        <LinkPage to={'/categories'} text={'Categories'} />

        {/* <LinkPage to={'settings'} text={'Settings'} /> */}
      </ul>
    </nav>
  );
};

function LinkPage({ to, text }) {
  return (
    <li className='mb-4'>
      <NavLink
        to={to}
        className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
      >
        {text}
      </NavLink>
    </li>
  );
}

export default Sidebar;
