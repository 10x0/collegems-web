import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';

import Spinner from '../../../components/Spinner';
import { addModule } from '../../../services/moduleServices';
import { useLoaderData } from 'react-router-dom';

export default function AddModule() {
  const navigate = useNavigate();
  const courses = useLoaderData();

  const [name, setName] = useState('');
  const [credit, setCredit] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const mutation = useMutation({ mutationFn: addModule });
  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      name,
      credit,
      course,
      year,
    });
  };

  if (mutation.isLoading) {
    return <Spinner />;
  }

  if (mutation.isSuccess) {
    toast.success(mutation.data?.message);
    return <Navigate to='/dash/modules' replace />;
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
      <h1 className='text-5xl font-semibold'>Add Module</h1>
      <section className='w-1/2 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className='my-2'>
            <label className='block'>Module Name</label>
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
            <label className='block'>Credit Score</label>
            <input
              placeholder='£'
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              name='credit'
              id='credit'
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label className='block'>Course</label>
            <select
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              type='text'
              name='course'
              id='course'
              value={course}
              onChange={(e) => {
                setSelectedCourse(
                  courses.find((item) => item._id === e.target.value)
                );
                setCourse(e.target.value);
              }}
            >
              {courses.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className='my-2'>
            <label className='block'>Year</label>
            <select
              className='w-full p-2 py-4 text-lg my-2 outline-transparent rounded-xl'
              type='text'
              name='year'
              id='year'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {getYears(selectedCourse.duration).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
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

const getYears = (duration) => {
  var years = [];
  for (var i = 1; i <= duration; i++) {
    years.push(i);
  }
  return years;
};
