export default function Progress() {
  return (
    <section className='my-8 p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>Progress</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-green-100 p-4 rounded-lg'>
          <p className='text-green-700'>Weight: 70kg</p>
        </div>
        <div className='bg-green-100 p-4 rounded-lg'>
          <p className='text-green-700'>BMI: 22</p>
        </div>
      </div>
    </section>
  );
}
