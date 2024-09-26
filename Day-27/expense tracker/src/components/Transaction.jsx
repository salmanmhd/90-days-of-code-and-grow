import { useBank } from '../context/BankContext';
import IncomeTable from './IncomeTable';
import Table from './Table';
import Title from './Title';

function Transaction() {
  const { expenses, incomes } = useBank();
  return (
    <section id='expense-list' className='space-y-8 '>
      <Title>Expense Details</Title>
      <Table expenses={expenses} />

      <Title>Income Details</Title>
      <IncomeTable incomes={incomes} />
    </section>
  );
}

export default Transaction;
