import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export default function OurCourses() {
  const courses = useLoaderData();
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/courses/${id}`);
  };
  return (
    <section className='max-w-4xl m-auto py-8'>
      <h1 className='text-center text-5xl font-semibold mb-8'>Our Courses</h1>
      {courses.map((course) => (
        <div
          onClick={() => onClick(course._id)}
          key={course._id}
          className='p-4 border-b-2 border-neutral-700 hover:bg-gray-300 cursor-pointer'
        >
          <h4 className='text-2xl font-semibold'>{course.name}</h4>
          <p className='text-neutral-700'>{course.description}</p>
          <p className='text-neutral-700'>
            <strong className='font-semibold'>Duration: </strong>
            {course.duration} {course.duration > 1 ? 'years' : 'year'}
          </p>
          <p className='text-neutral-700'>
            <strong className='font-semibold'>Fee: </strong>
            {course.fee}
          </p>
          <p className='text-neutral-700'>
            <strong className='font-semibold'>Start Date: </strong>
            {new Date(course?.startDate)?.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </p>
        </div>
      ))}
    </section>
  );
}
