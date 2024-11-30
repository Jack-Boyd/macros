import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

function Dashboard() {
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation {
              logout {
                message
              }
            }
          `,
        }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      return response.json();
    },
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