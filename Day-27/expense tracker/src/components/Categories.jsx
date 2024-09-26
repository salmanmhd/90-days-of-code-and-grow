// import { useBank } from '../context/BankContext';

// const Categories = () => {
//   const { expenses } = useBank();
//   let foodAmount = 0;
//   let educationAmount = 0;
//   let healthAmount = 0;

//   expenses.forEach((item) => {
//     if (item.category === 'food') {
//       foodAmount = item.amount;
//     } else if (item.category === 'education') {
//       educationAmount = item.amount;
//     } else if (item.category === 'health') {
//       healthAmount = item.amount;
//     }
//   });
//   return (
//     <section id='categories' className='space-y-8 '>
//       <h1 className='text-3xl font-semibold text-gray-200'>Categories</h1>
//       <div className='space-y-4'>
//         <CategoryItems text='Food' amount={foodAmount} />
//         <CategoryItems text='Education' amount={educationAmount} />
//         <CategoryItems text='Health' amount={healthAmount} />
//       </div>
//     </section>
//   );
// };

// function CategoryItems({ text, amount }) {
//   return (
//     <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
//       <h3 className='text-xl font-medium text-gray-300'>{text}</h3>
//       <p className='text-lg mt-2 text-gray-400'>{amount}</p>
//     </div>
//   );
// }

// export default Categories;
import { useBank } from '../context/BankContext';

const Categories = () => {
  const { expenses } = useBank();
  let foodAmount = 0;
  let educationAmount = 0;
  let healthAmount = 0;

  expenses.forEach((item) => {
    if (item.category === 'food') {
      foodAmount += item.amount;
    } else if (item.category === 'education') {
      educationAmount += item.amount;
    } else if (item.category === 'health') {
      healthAmount += item.amount;
    }
  });

  return (
    <section id='categories' className='space-y-4'>
      <h1 className='text-2xl font-semibold text-gray-200'>Categories</h1>
      <div className='flex space-x-4'>
        <CategoryItems text='Food' amount={foodAmount} />
        <CategoryItems text='Education' amount={educationAmount} />
        <CategoryItems text='Health' amount={healthAmount} />
      </div>
    </section>
  );
};

function CategoryItems({ text, amount }) {
  return (
    <div className='bg-white/10 backdrop-blur-lg p-4 rounded-lg text-center border border-white/20 shadow-lg w-1/3'>
      <h3 className='text-lg font-medium text-gray-300'>{text}</h3>
      <p className='text-base mt-1 text-gray-400'>{amount}</p>
    </div>
  );
}

export default Categories;
