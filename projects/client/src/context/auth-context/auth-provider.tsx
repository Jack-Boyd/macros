import { FC, ReactNode, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { graphql } from '../../gql/gql';
import { graphqlClient } from '../../utils/graphql-client';

import { createContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isProfileComplete: boolean;
  loading: boolean;
  user: Record<string, any>;
  isError: boolean;
  error: Error | null;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isProfileComplete: false,
  loading: true,
  user: {},
  isError: false,
  error: null,
});

const AUTH_STATUS_QUERY = graphql(`
  query AuthStatus {
    me {
      id
      email
      BMR
      profileComplete
    }
  }
`);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['authStatus'],
    queryFn: async () => graphqlClient.request(AUTH_STATUS_QUERY),
    retry: 0,
    staleTime: 5 * 60 * 1000,
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
