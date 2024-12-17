import { FC } from 'react';
import { Navigate, Outlet, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute: FC = () => {
  const { isAuthenticated, isProfileComplete, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!isProfileComplete && location.pathname !== '/app/setup') {
    return <Navigate to="/app/setup" replace />;
  }

  return (
    <div>
      <header>
        <Link to="/app">Dashboard</Link>
        <Link to="/app/profile">Profile</Link>
        <Link to="/app/recipes">Recipes</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateRoute;
