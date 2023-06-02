import { Link } from 'react-router-dom';
import thanks from '../assets/thanks.svg';

export default function ThanksPage() {
  return (
    <section className='max-w-5xl m-auto py-16 flex flex-col items-center gap-16'>
      <div>
        <h1 className='text-center text-5xl font-semibold mb-4'>
          Thanks for choosing us. ✅
        </h1>
        <p className='text-lg text-center text-neutral-500'>
          We have received your application.
        </p>
        <p className='text-lg text-center text-neutral-500'>
          We will get back to you soon.
        </p>
      </div>
      <img src={thanks} alt='thanks' />
      <Link to='/' className='text-indigo-700 underline'>
        Check what our students have to say.
      </Link>
    </section>
  );
}
