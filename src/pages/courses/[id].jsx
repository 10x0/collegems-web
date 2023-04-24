import {
  RiArrowLeftLine,
  RiCalendarEventLine,
  RiTimerLine,
} from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import ModulesSection from '../../components/Modules';
import { Link } from 'react-router-dom';

export default function CourseWithID() {
  const course = useLoaderData();

  return (
    <section className='max-w-5xl m-auto py-16'>
      <Link
        to={-1}
        className='flex items-center my-2 underline text-indigo-500'
      >
        <RiArrowLeftLine />
        Go back
      </Link>
      <h1 className='text-5xl font-bold'>{course.name}</h1>
      <div className='flex justify-between my-4'>
        <p className='flex items-center gap-2'>
          <RiTimerLine />
          {course.duration} {course.duration > 1 ? 'years' : 'year'}
        </p>
        <p className='flex items-center gap-2'>
          £ {course.fee.toLocaleString('en-US')}
        </p>
        <p className='flex items-center gap-2'>
          <RiCalendarEventLine />
          {new Date(course?.startDate)?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          })}
        </p>
      </div>
      <section className='flex justify-center'>
        <Link
          to='apply'
          className='p-2 px-4 text-white bg-indigo-700 hover:bg-indigo-800'
        >
          Apply Now
        </Link>
      </section>
      <section className='bg-white'>
        <div className='py-8'>
          <div className='max-w-screen-lg text-gray-500 sm:text-lg'>
            <h2 className='mb-4 text-2xl tracking-tight font-bold text-gray-900 '>
              About this course
            </h2>
            <p className='mb-4 font-medium'>
              Our IT courses are taught by experienced and knowledgeable
              professors who are experts in their fields. They are committed to
              providing students with a challenging yet supportive learning
              environment that encourages exploration and innovation. Thirdly,
              our IT courses are designed to be highly practical, with
              opportunities for students to engage in hands-on projects and
              internships that prepare them for real-world work experience.
            </p>
          </div>
        </div>
      </section>
      <ModulesSection course={course} />

      <section className='bg-white'>
        <div className='py-8'>
          <div className='max-w-screen-lg text-gray-500 sm:text-lg'>
            <h2 className='mb-4 text-2xl tracking-tight font-bold text-gray-900 '>
              Why choose this course?
            </h2>
            <p className='mb-4 font-medium'>
              There are several compelling reasons to choose the IT course
              section at our university. Our IT courses are designed to provide
              students with a comprehensive understanding of the latest
              technologies and trends in the industry. We offer a range of
              courses that cover topics such as software development, data
              analytics, cybersecurity, and cloud computing. Finally, our
              university has a strong reputation in the IT industry, with many
              of our graduates going on to successful careers in a range of
              IT-related fields. By choosing our IT course section, students
              will gain valuable skills, knowledge, and experiences that will
              help them succeed in this exciting and rapidly evolving industry.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='py-8'>
          <div className='max-w-screen-lg text-gray-500 sm:text-lg'>
            <h2 className='mb-4 text-2xl tracking-tight font-bold text-gray-900 '>
              Entry Requirements
            </h2>
            <p className='mb-4 font-medium'>
              A lower second honours degree in Computer Science or equivalent. A
              Postgraduate Certificate in Computer Science or a related subject
              with a minimum of grade C in all modules.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
