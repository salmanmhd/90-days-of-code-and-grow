import { useBank } from '../context/BankContext';
import { jsPDF } from 'jspdf';

const Reports = () => {
  const { totalExpense, totalIncome, expenses, incomes } = useBank();

  function downloadPDF() {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Monthly Expense Report', 10, 20);

    doc.setFontSize(14);
    doc.text(`Total Expense: $${totalExpense}`, 10, 40);
    let yPos = 50;
    expenses.forEach((item, index) => {
      const { expense, amount, category, date } = item;
      doc.text(
        `${index + 1}. ${expense} - $${amount} on ${date} (${category})`,
        10,
        yPos
      );
      yPos += 10;
    });

    yPos += 20;
    doc.setFontSize(20);
    doc.text('Monthly Income Report', 10, yPos);

    doc.setFontSize(14);
    yPos += 20;
    doc.text(`Total Income: $${totalIncome}`, 10, yPos);
    yPos += 10;
    incomes.forEach((item, index) => {
      const { amount, source, date } = item;
      doc.text(`${index + 1}. ${source} - $${amount} on ${date}`, 10, yPos);
      yPos += 10;
    });

    doc.save('Monthly_Report.pdf');
  }

  return (
    <section id='reports' className='space-y-8 '>
      <h1 className='text-3xl font-semibold text-gray-200'>Reports</h1>
      <div className='space-y-4'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Monthly Report</h3>
          <p className='text-lg mt-2 text-gray-400'>
            Total Expense: {totalExpense}
          </p>
          <p className='text-lg mt-2 text-gray-400'>
            Total Income: {totalIncome}
          </p>
          <button
            className='mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
            onClick={downloadPDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reports;
