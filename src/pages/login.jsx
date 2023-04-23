import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ name: 'Aashish' });
  };

  return (
    <main>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Log In</button>
    </main>
  );
}
