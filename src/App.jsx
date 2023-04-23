import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        {/* <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route exact path='/' element={<HomePage />} />
              <Route element={<AuthLayout />}>
              <Route path='/login' element={<LoginPage />} />
              </Route>
              <Route element={<DashboardLayout />}>
              <Route path='/dash' element={<MainDashboard />} />
                <Route path='/profile' element={<h1>Profile page</h1>} />
              </Route>
            </Route>
          </Routes> */}
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
