const Reports = () => {
  return (
    <section id='reports' className='space-y-8 '>
      <h1 className='text-3xl font-semibold text-gray-200'>Reports</h1>
      <div className='space-y-4'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Monthly Report</h3>
          <p className='text-lg mt-2 text-gray-400'>Total Expense: $2000</p>
          <button className='mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'>
            Download PDF
          </button>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Annual Report</h3>
          <p className='text-lg mt-2 text-gray-400'>Total Expense: $24,000</p>
          <button className='mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'>
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reports;
