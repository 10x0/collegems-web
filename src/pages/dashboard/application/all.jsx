import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin7Fill, RiEyeFill } from 'react-icons/ri';

import Spinner from '../../../components/Spinner';
import THead from '../../../components/THead';
import { fetchAllApplications } from '../../../services/applicationServices';

export default function AllApplications() {
  const { isLoading, data } = useQuery({
    queryKey: [],
    queryFn: fetchAllApplications,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className='p-8'>
      <section className='my-8'>
        <h1 className='text-5xl font-semibold'>New Applications</h1>
      </section>
      <article>
        <table className='table-auto w-full'>
          <THead items={['Applicant', 'Email', 'Mobile', 'GPA', 'Course']} />
          <tbody>
            {data.length === 0 && (
              <h2 className='text-center text-2xl text-gray-500'>
                No data available
              </h2>
            )}
            {data.map((item) => (
              <tr className='border-2 border-gray-500' key={item._id}>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500'>
                  {item?.firstName} {item?.lastName}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500'>
                  {item?.email}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  {item?.mobile}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  {item?.gpa}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  {item?.course?.name}
                </td>

                <td className='px-4 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  <div className='flex justify-evenly'>
                    {/* <Link
                      // to={`/dash/courses/editCourse/${item._id}`}
                      // state={item}
                      className='flex p-2 items-center text-indigo-700 text-sm font-bold gap-1 hover:bg-indigo-300 rounded-full'
                    >
                      <RiEyeFill />
                      View Application
                    </Link> */}
                    <Link
                      to={`/dash/applications/deleteApplication/${item._id}`}
                      state={item}
                      className='flex p-2 items-center text-rose-700 text-sm font-bold gap-1 hover:bg-rose-300 rounded-full'
                    >
                      <RiDeleteBin7Fill />
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
