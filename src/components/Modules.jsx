import { useState } from 'react';
import { getYears } from '../utils/getYears';

export default function ModulesSection({ course }) {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <section>
      <h2 className='mb-4 text-2xl tracking-tight font-bold text-gray-900 '>
        Modules
      </h2>
      <aside className='flex gap-4'>
        {getYears(course?.duration).map((i) => (
          <p
            key={i}
            className={`border-b-4 p-4 hover:bg-gray-200 cursor-pointer ${
              selectedTab === i ? 'border-indigo-700' : 'border-gray-400'
            }`}
            onClick={() => setSelectedTab(i)}
          >
            Year {i}
          </p>
        ))}
      </aside>
      <table className='table-fixed w-full my-4'>
        <thead className='bg-gray-200 border-2'>
          <tr>
            <th className='p-4 border-l-2'>Module Name</th>
            <th className='p-4 border-l-2'>Credit Score</th>
          </tr>
        </thead>
        <tbody className='border-2'>
          {course?.modules
            ?.filter((module) => module.year === selectedTab)
            .map((module) => (
              <tr key={module._id} className='border-2'>
                <td className='px-2'>{module.name}</td>
                <td className='p-4 border-l-2 text-center text-lg'>
                  {module.credit}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
