import { FC, ReactNode, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import AuthContext from './auth-context';

const fetchAuthStatus = async () => {
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
            BMR
            profileComplete
          }
        }
      `,
    }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch authentication status');
  }

  const { data } = await response.json();
  return data;
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['authStatus'],
    queryFn: fetchAuthStatus,
    retry: 1, // Retry once on failure
    staleTime: 5 * 60 * 1000, // Cache the response for 5 minutes
  });

  const authContextValue = useMemo(() => {
    const isAuthenticated = !!data?.me;
    const user = data?.me || {};
    const isProfileComplete = data?.me?.profileComplete ?? false;

    return {
      isAuthenticated,
      isProfileComplete,
      loading: isLoading,
      user,
      isError,
      error,
    };
  }, [data, isLoading, isError, error]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
