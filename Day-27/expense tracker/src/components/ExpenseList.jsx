import { useBank } from '../context/BankContext';
import Table from './Table';

function ExpenseList() {
  const { expenses } = useBank();
  return (
    <section id='expense-list' className='space-y-8 '>
      <h1 className='text-3xl font-semibold text-gray-200'>Expense List</h1>
      <Table expenses={expenses} />
    </section>
  );
}

export default ExpenseList;
