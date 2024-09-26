function IncomeTable({ incomes }) {
  return (
    <table className='w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg'>
      <thead className='bg-white/10 border-b border-gray-600'>
        <tr>
          <th className='p-4 text-left text-gray-300'>Amount</th>
          <th className='p-4 text-left text-gray-300'>Source</th>
          <th className='p-4 text-left text-gray-300'>Date</th>
        </tr>
      </thead>
      <tbody>
        {incomes.map((income) => (
          <TableRows
            key={income.id}
            amount={income.amount}
            source={income.source}
            date={income.date}
          />
        ))}
      </tbody>
    </table>
  );
}

function TableRows({ amount, date, source }) {
  return (
    <tr className='border-b border-gray-600'>
      <td className='p-4 text-gray-300'>{amount}</td>
      <td className='p-4 text-gray-300'>{source}</td>
      <td className='p-4 text-gray-300'>{date}</td>
    </tr>
  );
}
export default IncomeTable;
