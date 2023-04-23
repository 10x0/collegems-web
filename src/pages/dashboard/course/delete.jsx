import { toast } from 'react-hot-toast';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';

import Spinner from '../../../components/Spinner';
import { deleteCourse } from '../../../services/courseServices';
import { useParams } from 'react-router-dom';

export default function DeleteCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const mutation = useMutation({ mutationFn: deleteCourse });

  const handleDelete = () => mutation.mutate(id);

  if (mutation.isLoading) {
    return <Spinner />;
  }

  if (mutation.isSuccess) {
    toast.success(mutation.data?.message);
    return <Navigate to='/dash/courses' replace />;
  }

  return (
    <section className='p-8'>
      <button
        className='p-2 text-blue-700 font-semibold flex items-center hover:bg-gray-300 rounded-full'
        onClick={() => navigate(-1)}
      >
        <RiArrowLeftLine />
        Go back
      </button>
      <h1 className='text-5xl font-semibold'>Are you sure ?</h1>
      <section className='w-1/2 m-auto bg-white p-8 rounded-3xl min-h-[40rem] flex flex-col'>
        <p className='text-2xl'>Do you want to delete this course?</p>
        <section className='grow'>
          <p className='text-5xl font-bold'>
            {location.state.name} - ({location.state.duration})
          </p>
          <p className='my-4 text-lg'>
            Deleting this course might result to undesired changes in the main
            site.
          </p>
        </section>
        <section className='flex gap-8 self-end'>
          <button
            onClick={() => navigate(-1)}
            className='p-4 bg-gray-400 text-white font-semibold text-2xl rounded-full hover:bg-gray-500'
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className='p-4 bg-rose-500 text-white font-semibold text-2xl rounded-full hover:bg-rose-600'
          >
            Yes,delete
          </button>
        </section>
      </section>
    </section>
  );
}
