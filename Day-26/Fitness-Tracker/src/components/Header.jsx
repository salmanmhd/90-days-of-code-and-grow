import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-green-600 text-white py-4 px-8 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Fitness Tracker</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <NavLink to='/' className='hover:underline'>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/workouts' className='hover:underline'>
                Workouts
              </NavLink>
            </li>
            <li>
              <NavLink to='/progress' className='hover:underline'>
                Progress
              </NavLink>
            </li>
            <li>
              <NavLink to='/goals' className='hover:underline'>
                Goals
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
