import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AuthLayout, DashboardLayout, RootLayout } from './layouts';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import AboutPage from './pages/about';
import PolicyPage from './pages/policy';
import TermsPage from './pages/terms';
import ErrorPage from './pages/error';
import AllCourses from './pages/dashboard/course/all';
import NotFoundPage from './pages/not-found';
import AddCourse from './pages/dashboard/course/add';
import EditCourse from './pages/dashboard/course/edit';
import DeleteCourse from './pages/dashboard/course/delete';
import AllModules from './pages/dashboard/module/all';
import DeleteModule from './pages/dashboard/module/delete';
import { fetchAllCourses, fetchCourseWithId } from './services/courseServices';
import AddModule from './pages/dashboard/module/add';
import EditModule from './pages/dashboard/module/edit';
import OurCourses from './pages/courses';
import CourseWithID from './pages/courses/[id]';
import ApplyPage from './pages/apply';
import ThanksPage from './pages/thanks';

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
        path: 'courses',
        children: [
          { path: '', loader: fetchAllCourses, element: <OurCourses /> },
          {
            path: ':id',
            children: [
              {
                path: '',
                loader: ({ params }) => fetchCourseWithId(params.id),
                element: <CourseWithID />,
              },
              {
                path: 'apply',
                element: <ApplyPage />,
              },
            ],
          },
        ],
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
      { path: '', element: <Navigate to='enrollees' replace /> },
      {
        path: 'enrollees',
        element: <h1>Enrollees</h1>,
      },
      {
        path: 'courses',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            element: <AllCourses />,
            lazy: () => import('./pages/dashboard/course/all'),
          },
          {
            path: 'addCourse',
            element: <AddCourse />,
          },
          {
            path: 'editCourse/:id',
            element: <EditCourse />,
          },
          {
            path: 'deleteCourse/:id',
            element: <DeleteCourse />,
          },
        ],
      },
      {
        path: 'modules',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            element: <AllModules />,
            lazy: () => import('./pages/dashboard/module/all'),
          },
          {
            path: 'addModule',
            element: <AddModule />,
            loader: fetchAllCourses,
            lazy: () => import('./pages/dashboard/module/add'),
          },
          {
            path: 'editModule/:id',
            element: <EditModule />,
            loader: fetchAllCourses,
            lazy: () => import('./pages/dashboard/module/edit'),
          },
          {
            path: 'deleteModule/:id',
            element: <DeleteModule />,
          },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
