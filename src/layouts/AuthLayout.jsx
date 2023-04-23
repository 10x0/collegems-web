import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AuthLayout() {
  const { session } = useAuth();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/dash' } };

  return session ? <Navigate to={from} replace /> : <Outlet />;
}
