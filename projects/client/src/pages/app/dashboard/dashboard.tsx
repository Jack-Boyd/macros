import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { graphql } from '../../../gql/gql';
import { graphqlClient } from '../../../utils/graphql-client';

const LOGOUT_MUTATION = graphql(`
  mutation Logout {
    logout {
      message
    }
  }
`);

function Dashboard() {
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: async () => graphqlClient.request(LOGOUT_MUTATION),
    onSuccess: () => {
      navigate("/", { replace: true });
      window.location.reload();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    logoutMutation.mutate();
  };

  return (
    <div>
      Dashboard
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
}

export default Dashboard;