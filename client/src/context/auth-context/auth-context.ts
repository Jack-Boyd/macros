import { createContext } from 'react';

type User = Partial<{
  id: string;
  email: string;
}>;

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  loading: boolean;
  user: User;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
