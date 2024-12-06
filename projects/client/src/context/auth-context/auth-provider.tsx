import { FC, ReactNode, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import AuthContext from './auth-context';
import { graphql } from '../../gql/gql';
import { graphqlClient } from '../../utils/graphql-client';

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
    retry: 1,
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
