import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

import { RiMailUnreadFill, RiArticleFill, RiBook2Fill } from 'react-icons/ri';

export default function Sidebar() {
  const navigate = useNavigate();
  const { session, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <>
      <section className='flex flex-col items-center m-8 gap-4'>
        <img src='/logo.jpg' alt='logo' width={100} />
        <h2>
          Hello,{' '}
          <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-700'>
            {session.name}
          </span>
        </h2>
        <button
          className='bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 text-sm font-semibold rounded-full'
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
      <section className='mx-12'>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </section>
    </>
  );
}

const navItems = [
  {
    label: 'Applications',
    path: '/dash/applications',
    icon: <RiMailUnreadFill />,
  },
  {
    label: 'Notices',
    path: '/dash/notices',
    icon: <RiArticleFill />,
  },
];

const NavItem = ({ label, path, icon }) => {
  return (
    <section className='my-4 font-semibold text-xl'>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `p-4 flex items-center gap-2 hover:bg-indigo-300 hover:text-indigo-700 rounded-full ${
            isActive && 'text-indigo-700'
          }`
        }
      >
        {icon}
        {label}
      </NavLink>
    </section>
  );
};
