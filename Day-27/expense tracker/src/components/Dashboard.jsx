const Dashboard = () => {
  return (
    <section id='dashboard' className='space-y-8'>
      <h1 className='text-3xl font-semibold text-gray-200'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Total Income</h3>
          <p className='text-2xl mt-2 text-green-400'>$5000</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Total Expense</h3>
          <p className='text-2xl mt-2 text-green-400'>$2000</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Balance</h3>
          <p className='text-2xl mt-2 text-green-400'>$3000</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
