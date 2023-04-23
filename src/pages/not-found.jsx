import notFound from '../assets/not-found.png';

export default function NotFoundPage() {
  return (
    <main className='max-w-full h-screen flex flex-col justify-center items-center'>
      <img src={notFound} alt='not-found' />
      <h3 className='text-4xl bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500'>
        Sorry, requested page not found.
      </h3>
    </main>
  );
}
