import { RiArrowDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className='flex flex-col items-center justify-around relative min-h-screen bg-no-repeat bg-center bg-cover bg-gradient-to-b from-gray-500 to-gray-900'>
        <div
          className='w-full h-full bg-cover bg-center absolute mix-blend-overlay'
          style={{
            backgroundImage:
              'url(https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/165235700_2942176236103464_1368612367976200103_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Wb0Vongu2YYAX-jbw3L&_nc_ht=scontent.fktm10-1.fna&oh=00_AfB9-W67rpnfYHmuxXDVWf3TmlJKMViyju054LD2LrYSTQ&oe=649EED42)',
          }}
        ></div>
        <div>
          <h1 className='text-white font-bold text-7xl text-center max-w-6xl md:text-8xl m-auto my-8'>
            Welcome to Jalupa Secondary School.
          </h1>
          <p className='text-center font-semibold text-3xl text-gray-300'>
            One step closer to your goals.
          </p>
        </div>
        <RiArrowDownLine className='text-gray-500 text-9xl animate-bounce' />
      </section>
      <section className='flex flex-col p-8'>
        <h1 className='text-[#111827] font-bold text-7xl text-center max-w-6xl md:text-8xl m-auto my-8'>
          No nation can prosper in life without Education.
        </h1>
        <Link
          to='/admission'
          className='p-4 self-center text-white bg-indigo-700 hover:bg-indigo-800'
        >
          Get Admission
        </Link>
      </section>
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400'>
            <h2 className='mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white'>
              Powering innovation at{' '}
              <span className='font-extrabold'>200,000+</span> companies
              worldwide
            </h2>
            <p className='mb-4 font-light'>
              Our university offers a unique and dynamic learning experience
              that prepares students for success in their chosen careers. We
              provide an extensive range of courses taught by experienced and
              dedicated professors who are committed to student success. Our
              campus features state-of-the-art facilities, including research
              labs, libraries, and student centers that offer a wide range of
              services and resources.
            </p>
            <p className='mb-4 font-medium'>
              We also offer a range of extracurricular activities, clubs, and
              organizations that allow students to explore their interests and
              connect with like-minded individuals. By attending our university,
              students will gain valuable skills, knowledge, and experiences
              that will help them excel in their future endeavors.
            </p>
            <a
              href='#'
              className='inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700'
            >
              Learn more
              <svg
                className='ml-1 w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
          <div className='font-light text-gray-900 sm:text-lg '>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>
              We didn&apos;t reinvent the wheel
            </h2>
            <p className='mb-4'>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <img
              className='w-full rounded-lg'
              src='https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/285521191_3281043645550053_494244151448039694_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aCH0MhEj-9gAX8yReNp&_nc_ht=scontent.fktm10-1.fna&oh=00_AfBTgnqe7oCW83J89yHUhAAZ5I0v48Vzfu-7WUI6Fa-3FQ&oe=647CD1B7'
              alt='office content 1'
            />
            <img
              className='mt-4 w-full lg:mt-10 rounded-lg'
              src='https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/164804164_2942176172770137_2829400097206332243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2KzaFnqUEgEAX-bTyQC&_nc_ht=scontent.fktm10-1.fna&oh=00_AfBUhF-Dcm5cKCKnPaG6prilku9peAAGECHJlM7C-DZ_JA&oe=649EFD7B'
              alt='office content 2'
            />
          </div>
        </div>
      </section>
    </>
  );
}
