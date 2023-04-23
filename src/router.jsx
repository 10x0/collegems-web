import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, DashboardLayout, RootLayout } from './layouts';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import MainDashboard from './pages/dashboard/dash';
import AboutPage from './pages/about';
import PolicyPage from './pages/policy';
import TermsPage from './pages/terms';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'policy',
        element: <PolicyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: '',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'dash',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <MainDashboard />,
      },
      {
        path: 'search',
        element: <h1>Search</h1>,
      },
    ],
  },

  { path: '*', element: <h1>Not found</h1> },
]);
