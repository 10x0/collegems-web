import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function MainDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <section>
      <h1>Dashboard</h1>
      <button className='p-2 bg-rose-300 text-white' onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}
