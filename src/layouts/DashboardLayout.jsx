import { useLocation } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function DashboardLayout() {
  const location = useLocation();
  const { session } = useAuth();

  return session ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
