import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

import {
  RiMailUnreadFill,
  RiArticleFill,
  RiBook2Fill,
  RiTeamFill,
} from 'react-icons/ri';

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
        <img src='/vite.svg' alt='logo' width={100} />
        <h2>
          Hello,{' '}
          <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            {session.name}
          </span>
        </h2>
        <button
          className='bg-violet-200 p-2 text-violet-700 hover:bg-violet-300 text-xs'
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
    label: 'New Applications',
    path: '/dash/enrollees',
    icon: <RiMailUnreadFill />,
  },
  {
    label: 'Students',
    path: '/dash/instructors',
    icon: <RiTeamFill />,
  },
  {
    label: 'Courses',
    path: '/dash/courses',
    icon: <RiArticleFill />,
  },
  {
    label: 'Modules',
    path: '/dash/modules',
    icon: <RiBook2Fill />,
  },
];

const NavItem = ({ label, path, icon }) => {
  return (
    <section className='my-8 font-semibold text-xl'>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-2 ${isActive && 'text-violet-500'}`
        }
      >
        {icon}
        {label}
      </NavLink>
    </section>
  );
};
