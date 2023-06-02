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

export default function ViewApplication() {
  const navigate = useNavigate();
  const { state } = useLocation();
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

  const handleEmpty = (value) => (value === '' ? 'N/A' : value);

  return (
    <section className='p-8'>
      <button
        className='p-2 text-blue-700 font-semibold flex items-center hover:bg-gray-300 rounded-full'
        onClick={() => navigate(-1)}
      >
        <RiArrowLeftLine />
        Go back
      </button>
      <h1 className='text-5xl font-semibold'>
        Application of {state.fullname} for Grade: {state.grade}
      </h1>
      <section className='my-4 bg-white p-8 rounded-3xl min-h-[40rem] flex flex-col'>
        <section className='grow'>
          <div>
            Student Name:{' '}
            <span className='font-semibold'>{handleEmpty(state.fullname)}</span>
          </div>
          <div>
            Date Of Birth:{' '}
            <span className='font-semibold'>{handleEmpty(state.dob)}</span>
          </div>
          <div>
            Place Of Birth:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.placeOfBirth)}
            </span>
          </div>
          <div>
            Gender:{' '}
            <span className='font-semibold'>{handleEmpty(state.gender)}</span>
          </div>
          <div>
            Permanent Address:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.permanentAddress)}
            </span>
          </div>
          <div>
            Current Address:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.currentAddress)}
            </span>
          </div>
          <div>
            Grade Applied For:{' '}
            <span className='font-semibold'>{handleEmpty(state.grade)}</span>
          </div>
          <div>
            Last Academic Information:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.lastAcademicInfo)}
            </span>
          </div>
          <div>
            Requires hostel facility:{' '}
            <span className='font-semibold'>{handleEmpty(state.hostel)}</span>
          </div>
          <div>
            Requires transportation service:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.transportation)}
            </span>
          </div>
          <div>
            Requires on-school lunch:{' '}
            <span className='font-semibold'>{handleEmpty(state.lunch)}</span>
          </div>
          <div>
            Father's Name:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.fatherName)}
            </span>
          </div>
          <div>
            Mother's Name:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.motherName)}
            </span>
          </div>
          <div>
            Guardian's Name:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.guardianName)}
            </span>
          </div>
          <div>
            Applicant's Name:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.applicantName)}
            </span>
          </div>
          <div>
            Applicant's Relation With the Student:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.applicantRelation)}
            </span>
          </div>
          <div>
            Applicant's Contact Number:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.applicantContactNumber)}
            </span>
          </div>
          <div>
            Applicant's Email:{' '}
            <span className='font-semibold'>
              {handleEmpty(state.applicantEmail)}
            </span>
          </div>
        </section>
        <section className='flex gap-8 self-end'>
          <button
            onClick={() => navigate(-1)}
            className='p-4 bg-gray-400 text-white font-semibold text-2xl rounded-full hover:bg-gray-500'
          >
            Reject
          </button>
          <button
            onClick={handleDelete}
            className='p-4 bg-emerald-500 text-white font-semibold text-2xl rounded-full hover:bg-emerald-600'
          >
            Approve
          </button>
        </section>
      </section>
    </section>
  );
}
