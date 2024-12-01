import { createContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isProfileComplete: boolean;
  loading: boolean;
  user: Record<string, any>;
  isError: boolean;
  error: Error | null;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isProfileComplete: false,
  loading: true,
  user: {},
  isError: false,
  error: null,
});

export default AuthContext;
