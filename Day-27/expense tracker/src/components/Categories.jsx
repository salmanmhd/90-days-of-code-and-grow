const Categories = () => {
  return (
    <section id='categories' className='space-y-8 '>
      <h1 className='text-3xl font-semibold text-gray-200'>Categories</h1>
      <div className='space-y-4'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Food</h3>
          <p className='text-lg mt-2 text-gray-400'>$500</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Rent</h3>
          <p className='text-lg mt-2 text-gray-400'>$800</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Entertainment</h3>
          <p className='text-lg mt-2 text-gray-400'>$200</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
