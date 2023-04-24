export default function ApplyPage() {
  return (
    <section className='p-8'>
      <h1 className='text-center text-5xl font-semibold mb-8'>Apply Now</h1>
      <section>
        <form>
          <section className='max-w-5xl m-auto grid grid-cols-3 gap-y-8 gap-x-8'>
            <div>
              <label htmlFor='' className='block'>
                First Name
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Middle Name
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Last Name
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Email
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Mobile Number
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                Date Of Birth
              </label>
              <input
                className='w-full p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='date'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                GPA
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='' className='block'>
                ID Verification
              </label>
              <input
                className='p-2 py-4 border-2 border-gray-500 outline-none text-xl'
                type='text'
                name='name'
                id='name'
              />
            </div>
          </section>
        </form>
      </section>
    </section>
  );
}
