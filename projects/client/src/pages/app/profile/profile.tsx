import { useAuth } from '../../../hooks/useAuth';

function ProfilePage() {
  const { user } = useAuth();
  return <div>{user.email}</div>;
}

export default ProfilePage;
