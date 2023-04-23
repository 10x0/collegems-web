import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
