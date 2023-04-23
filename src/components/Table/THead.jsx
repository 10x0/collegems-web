export default function THead({ items }) {
  return (
    <thead className='p-2 border-2 border-gray-500 bg-gray-500'>
      <tr>
        {items.map((item) => (
          <th key={item} className='p-2 text-xl border-l-2 border-gray-500'>
            {item}
          </th>
        ))}
        <th className='p-2 text-xl border-l-2 border-gray-500'>Actions</th>
      </tr>
    </thead>
  );
}
