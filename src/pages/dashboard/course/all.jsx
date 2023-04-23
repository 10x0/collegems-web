import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { RiEdit2Fill, RiUserAddFill } from 'react-icons/ri';

import { fetchAllCourses } from '../../../services/courseServices';

import Spinner from '../../../components/Spinner';
import THead from '../../../components/Table/THead';
import TBody from '../../../components/Table/TBody';

export default function AllCourses() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [],
    queryFn: fetchAllCourses,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    toast.error(error.message);
  }

  return (
    <section className='p-8'>
      <section className='flex justify-between items-center my-8'>
        <h1 className='text-5xl font-semibold'>List of Courses</h1>
        <Link
          to='addCourse'
          className='p-2 text-indigo-700 text-xl font-semibold flex items-center gap-1 hover:bg-indigo-300 rounded-full'
        >
          <RiUserAddFill size={20} />
          Add Course
        </Link>
      </section>
      <article>
        <table className='table-auto w-full'>
          <THead items={['Course Name', 'Duration', 'Fee (£)', 'Start Date']} />
          <TBody
            data={data}
            ActionIcon={RiEdit2Fill}
            actionLabel='Edit'
            action='/dash/courses/editCourse'
            remove='/dash/courses/deleteCourse'
          />
        </table>
      </article>
    </section>
  );
}
