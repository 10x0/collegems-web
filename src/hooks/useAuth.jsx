import { useContext } from 'react';
import { createContext } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    let storedSession = JSON.parse(
      localStorage.getItem('enroll.session') ?? '{}'
    );
    if (storedSession?.name) {
      setSession(storedSession);
    } else {
      setSession(null);
    }
  }, []);

  const value = useMemo(() => {
    return {
      session,
      login: (sessionData) => {
        setSession(sessionData);
        localStorage.setItem('enroll.session', JSON.stringify(sessionData));
      },
      logout: () => {
        setSession(null);
        localStorage.removeItem('enroll.session');
      },
    };
  }, [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
