import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AuthLayout, DashboardLayout, RootLayout } from './layouts';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import AboutPage from './pages/about';
import PolicyPage from './pages/policy';
import TermsPage from './pages/terms';
import ErrorPage from './pages/error';
import { fetchAllCourses } from './services/courseServices';
import AllCourses from './pages/dashboard/course/all';
import NotFoundPage from './pages/not-found';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
      { path: '', element: <Navigate to='enrollees' replace /> },
      {
        path: 'enrollees',
        element: <h1>Enrollees</h1>,
      },
      {
        path: 'courses',
        loader: fetchAllCourses,
        errorElement: <ErrorPage />,
        element: <AllCourses />,
        lazy: () => import('./pages/dashboard/course/all'),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
