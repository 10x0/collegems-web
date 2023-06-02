import { useLocation } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../components/Sidebar';

export function DashboardLayout() {
  const location = useLocation();
  const { session } = useAuth();

  return session ? (
    <main className='w-screen min-h-screen flex'>
      <aside className='w-80'>
        <Sidebar />
      </aside>
      <aside className='grow bg-gray-200'>
        <Outlet />
      </aside>
    </main>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
