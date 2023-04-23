import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';

import Spinner from '../../../components/Spinner';
import { editCourse } from '../../../services/courseServices';
import { useParams } from 'react-router-dom';

export default function EditCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [name, setName] = useState(location.state.name);
  const [duration, setDuration] = useState(location.state.duration);
  const [fee, setFee] = useState(location.state.fee);
  const [startDate, setStartDate] = useState(
    new Date(location.state.startDate).toISOString().substring(0, 10)
  );
  const [description, setDescription] = useState(location.state.description);

  const mutation = useMutation({ mutationFn: editCourse });

  console.log(location.state);
  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      _id: id,
      name,
      duration,
      fee,
      startDate,
      description,
    });
  };

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
      <h1 className='text-5xl font-semibold'>Edit Course</h1>
      <section className='w-1/2 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className='my-2'>
            <label className='block'>Course Name</label>
            <input
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label className='block'>Duration</label>
            <select
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              type='text'
              name='duration'
              id='duration'
              // defaultValue='1 year'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value='6 months'>6 months</option>
              <option value='1 year'>1 year</option>
              <option value='1 year and 6 months'>1 year and 6 months</option>
              <option value='2 years'>2 years</option>
              <option value='3 years'>3 years</option>
            </select>
          </div>
          <div className='my-2'>
            <label className='block'>Fee</label>
            <input
              placeholder='£'
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              name='fee'
              id='fee'
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label className='block'>Start Date</label>
            <input
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              type='date'
              name='startDate'
              id='startDate'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label className='block'>Description</label>
            <textarea
              className='w-full min-h-[10rem] p-2 py-4 text-lg my-2 outline-transparent rounded-xl resize-none'
              type='text'
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <button
              className='w-full p-4 my-2 outline-transparent bg-indigo-700 text-white hover:bg-indigo-800 rounded-2xl text-xl'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
