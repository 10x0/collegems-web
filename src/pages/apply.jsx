import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { sendApplication } from '../services/applicationServices';
import { useState } from 'react';
import Spinner from '../components/Spinner';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export default function ApplyPage() {
  const { state: course } = useLocation();
  const mutation = useMutation({ mutationFn: sendApplication });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gpa, setGpa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      id: course._id,
      firstName,
      lastName,
      email,
      mobile,
      gpa,
    });
  };

  if (mutation.isLoading) {
    return <Spinner />;
  }

  if (mutation.isSuccess) {
    toast.success(mutation.data?.message);
    return <Navigate to='/thanks' replace />;
  }

  return (
    <section className='p-8'>
      <h1 className='text-center text-5xl font-semibold mb-8'>Apply Now</h1>
      <p className='text-center text-neutral-500 text-lg'>{course.name}</p>
      <section>
        <form onSubmit={handleSubmit}>
          <section className='max-w-5xl m-auto my-8 grid grid-cols-3 gap-y-8 gap-x-8'>
            <div>
              <label htmlFor='' className='block'>
                First Name
              </label>
              <input
                required
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Middle Name
              </label>
              <input
                placeholder='Optional'
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='middleName'
                id='middleName'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Last Name
              </label>
              <input
                required
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='lastname'
                id='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Email
              </label>
              <input
                required
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Mobile Number
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='mobile'
                id='mobile'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Date Of Birth
              </label>
              <input
                className='w-full p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='date'
                name='date'
                id='date'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                GPA
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='gpa'
                id='gpa'
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                ID Verification
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='file'
                name='id'
                id='id'
              />
            </div>
          </section>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='p-4 px-8 text-lg text-white bg-indigo-700 hover:bg-indigo-800'
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
