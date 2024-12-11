import { Navigate } from 'react-router-dom';
import SetupForm from './components/setup-form';
import { useAuth } from '../../../hooks/useAuth';

function SetupPage() {
  const { user } = useAuth();
  if (user?.profileComplete) {
    return <Navigate to="/app" />;
  }
  return (
    <div>
      <h1>Setup Page</h1>
      <SetupForm />
    </div>
  );
}

export default SetupPage;
