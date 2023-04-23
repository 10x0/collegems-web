import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin7Fill, RiEdit2Fill, RiUserAddFill } from 'react-icons/ri';

import { fetchAllModules } from '../../../services/moduleServices';

import Spinner from '../../../components/Spinner';
import THead from '../../../components/THead';

export default function AllModules() {
  const { isLoading, data } = useQuery({
    queryKey: [],
    queryFn: fetchAllModules,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className='p-8'>
      <section className='flex justify-between items-center my-8'>
        <h1 className='text-5xl font-semibold'>List of Modules</h1>
        <Link
          to='addModule'
          className='p-2 text-indigo-700 text-xl font-semibold flex items-center gap-1 hover:bg-indigo-300 rounded-full'
        >
          <RiUserAddFill size={20} />
          Add Module
        </Link>
      </section>
      <article>
        <table className='table-auto w-full'>
          <THead items={['Module Name', 'Credit', 'Course', 'Year']} />
          <tbody>
            {data.length === 0 && (
              <h2 className='text-center text-2xl text-gray-500'>
                No data available
              </h2>
            )}
            {data.map((item) => (
              <tr className='border-2 border-gray-500' key={item._id}>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500'>
                  {item?.name}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  {item?.credit}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500'>
                  {item?.course?.name}
                </td>
                <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  {item?.year}
                </td>
                <td className='px-4 text-lg font-semibold border-l-2 border-gray-500 text-center'>
                  <div className='flex justify-evenly'>
                    <Link
                      to={`/dash/modules/editModule/${item._id}`}
                      state={item}
                      className='flex p-2 items-center text-indigo-700 text-sm font-bold gap-1 hover:bg-indigo-300 rounded-full'
                    >
                      <RiEdit2Fill />
                      Edit
                    </Link>
                    <Link
                      to={`/dash/modules/deleteModule/${item._id}`}
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
