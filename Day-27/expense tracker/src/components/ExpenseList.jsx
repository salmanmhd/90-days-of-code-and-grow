const ExpenseList = () => {
  return (
    <section id='expense-list' className='space-y-8 '>
      <h1 className='text-3xl font-semibold text-gray-200'>Expense List</h1>
      <table className='w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg'>
        <thead className='bg-white/10 border-b border-gray-600'>
          <tr>
            <th className='p-4 text-left text-gray-300'>Name</th>
            <th className='p-4 text-left text-gray-300'>Amount</th>
            <th className='p-4 text-left text-gray-300'>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-gray-600'>
            <td className='p-4 text-gray-300'>Grocery</td>
            <td className='p-4 text-gray-300'>$150</td>
            <td className='p-4 text-gray-300'>2024-09-25</td>
          </tr>
          <tr>
            <td className='p-4 text-gray-300'>Rent</td>
            <td className='p-4 text-gray-300'>$800</td>
            <td className='p-4 text-gray-300'>2024-09-01</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ExpenseList;
