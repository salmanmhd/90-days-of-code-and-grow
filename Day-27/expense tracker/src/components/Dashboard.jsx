import { useBank } from '../context/BankContext';
import Table from './Table';
import Title from './Title';

function Dashboard() {
  const { balance, totalIncome, totalExpense, expenses } = useBank();
  return (
    <section id='dashboard' className='space-y-8'>
      <Title>Dashboard</Title>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <DashboardItems text='Total Income' value={totalIncome} />
        <DashboardItems text='Total Expense' value={totalExpense} />
        <DashboardItems text='Balance' value={balance} />
      </div>
      <h1 className='text-3xl font-semibold text-gray-200'>Expense</h1>
      <Table expenses={expenses.slice(0, 2)} />
    </section>
  );
}

function DashboardItems({ text, value }) {
  return (
    <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
      <h3 className='text-xl font-medium text-gray-300'>{text}</h3>
      <p
        className={`text-2xl mt-2 ${
          value < 0 ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default Dashboard;
