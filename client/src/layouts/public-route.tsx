import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoute: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }

  return <Outlet />;
};

export default PublicRoute;

