import Link from 'next/link';

export default function Navigation() {
  return (
    <ul className='flex gap-6'>
      <li>
        <Link href='/' className=''>
          Home
        </Link>
      </li>
      <li>
        <Link href='/add-todo' className=''>
          Add Todo
        </Link>
      </li>
      <li>
        <Link href='/completed' className=''>
          Completed Tasks
        </Link>
      </li>
    </ul>
  );
}
