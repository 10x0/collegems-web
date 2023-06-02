import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AuthLayout, DashboardLayout, RootLayout } from './layouts';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import AboutPage from './pages/about';
import PolicyPage from './pages/policy';
import TermsPage from './pages/terms';
import ErrorPage from './pages/error';
import NotFoundPage from './pages/not-found';
import ThanksPage from './pages/thanks';
import AllApplications from './pages/dashboard/application/all';
import DeleteApplication from './pages/dashboard/application/delete';
import AdmissionPage from './pages/admission';
import ViewApplication from './pages/dashboard/application/view';
import GalleryPage from './pages/gallery';
import NoticePage from './pages/notice';

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
        path: 'admission',
        element: <AdmissionPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'notices',
        element: <NoticePage />,
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
        path: 'thanks',
        element: <ThanksPage />,
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
      { path: '', element: <Navigate to='applications' replace /> },
      {
        path: 'applications',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            element: <AllApplications />,
          },
          {
            path: 'viewApplication/:id',
            element: <ViewApplication />,
          },
          {
            path: 'deleteApplication/:id',
            element: <DeleteApplication />,
          },
        ],
      },
      {
        path: 'notices',
        element: <h1>Notices Here</h1>,
      },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
