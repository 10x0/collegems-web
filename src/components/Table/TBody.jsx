import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function TBody({
  data,
  remove,
  action,
  actionLabel,
  ActionIcon,
}) {
  return (
    <tbody>
      {data.map((item) => (
        <tr className='border-2 border-gray-500' key={item._id}>
          <td className='p-2 text-lg font-semibold border-l-2 border-gray-500'>
            {item?.name}
          </td>
          <td className='p-2 text-lg font-semibold border-l-2 border-gray-500'>
            {item?.duration}
          </td>
          <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
            {item?.fee}
          </td>
          <td className='p-2 text-lg font-semibold border-l-2 border-gray-500 text-center'>
            {new Date(item?.startDate)?.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </td>
          <td className='px-4 text-lg font-semibold border-l-2 border-gray-500 text-center'>
            <div className='flex justify-evenly'>
              <Link
                to={`${action}?id=${item._id}`}
                state={item}
                className='flex p-2 items-center text-indigo-700 text-sm font-bold gap-1 hover:bg-indigo-300 rounded-full'
              >
                <ActionIcon />
                {actionLabel}
              </Link>
              <Link
                to={`${remove}?id=${item._id}`}
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
  );
}
