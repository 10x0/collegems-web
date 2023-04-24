import { toast } from 'react-hot-toast';
import {
  Navigate,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';

import Spinner from '../../../components/Spinner';
import { deleteApplication } from '../../../services/applicationServices';

export default function DeleteApplication() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const mutation = useMutation({ mutationFn: deleteApplication });

  const handleDelete = () => mutation.mutate(id);

  if (mutation.isLoading) {
    return <Spinner />;
  }

  if (mutation.isSuccess) {
    toast.success(mutation.data?.message);
    return <Navigate to='/dash/applications' replace />;
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
        <p className='text-2xl'>Do you want to delete this application?</p>
        <section className='grow'>
          <p className='text-5xl font-bold'>
            {location.state.firstName} - ({location.state.course?.name})
          </p>
          <p className='my-4 text-lg'>It cannot be restored once deleted.</p>
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
