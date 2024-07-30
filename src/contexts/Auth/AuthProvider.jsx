import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useApi } from '../../hooks/useApi';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, []);

  const signIn = async (email, password) => {
    const data = await api.signIn(email, password);
    if (data?.auth && data?.token) {
      setUser(data.auth);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    await api.signOut();
    setUser(null);
    setToken('');
  };

  const setToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
