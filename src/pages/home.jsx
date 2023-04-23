import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <h1>This is a home page.</h1>
      <Link className='text-blue-500' to='/login'>
        Login
      </Link>
    </main>
  );
}
