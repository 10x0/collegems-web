export default function Spinner() {
  return (
    <div className='max-w-full h-screen flex justify-center items-center'>
      <svg
        className='animate-spin'
        width='40'
        height='40'
        viewBox='0 0 120 120'
      >
        <circle
          style={{
            strokeDasharray: '262,350',
          }}
          cx='60'
          cy='60'
          r='54'
          fill='none'
          stroke='#8B5CF6'
          strokeWidth='12'
        />
      </svg>
    </div>
  );
}
