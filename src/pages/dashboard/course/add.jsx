import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';

import Spinner from '../../../components/Spinner';
import { addCourse } from '../../../services/courseServices';

export default function AddCourse() {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('1 year');
  const [fee, setFee] = useState('');
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: addCourse });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
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
      <h1 className='text-5xl font-semibold'>Add Course</h1>
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
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value={1}>1 year</option>
              <option value={1.5}>1 year and 6 months</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={4}>4 years</option>
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
