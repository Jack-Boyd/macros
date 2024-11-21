import { useState, useEffect, FC, ReactNode } from 'react';
import AuthContext from './auth-context';

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                me {
                  id
                  email
                }
              }
            `,
          }),
          credentials: 'include',
        });

        const data = await response.json();
        if (data.data.me) {
          setIsAuthenticated(true);
          setUser(data.data.me);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, user}}>
      {children}
    </AuthContext.Provider>
  );
};