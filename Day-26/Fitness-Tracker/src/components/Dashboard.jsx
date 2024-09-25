// import Header from './Header';

export default function Dashboard() {
  return (
    <>
      <section className='my-8 p-6 bg-white shadow-md rounded-lg'>
        <h2 className='text-xl font-bold mb-4'>Dashboard</h2>
        <p className='text-gray-700 mb-4'>
          Welcome to your fitness dashboard. Track your workouts, monitor your
          progress, and stay motivated!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-green-200 p-4 rounded-lg shadow'>
            <h3 className='text-lg font-semibold'>Workout Summary</h3>
            <p className='text-gray-600'>
              Total Workouts: <span className='font-bold'>12</span>
            </p>
            <p className='text-gray-600'>
              Total Duration: <span className='font-bold'>15 hours</span>
            </p>
          </div>
        </div>
      </section>
      <div className='bg-blue-200 p-4 rounded-lg shadow'>
        <h3 className='text-lg font-semibold'>Motivational Quote</h3>
        <p className='text-gray-600 italic'>
          "The only bad workout is the one that didn’t happen."
        </p>
      </div>
    </>
  );
}
