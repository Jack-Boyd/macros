import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation {
              register(email: "${email}", password: "${password}") {
                message
              }
            }
          `,
        }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      return response.json();
    },
    onSuccess: () => {
      setIsAuthenticated(true);
      navigate('/app');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate({ email, password });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={registerMutation.isPending}>
          {registerMutation.isPending ? 'Loading' : 'Register'}
        </button>
      </form>
      {registerMutation.isError && <p style={{ color: 'red' }}>Register failed. Please try again.</p>}
    </div>
  );
};

export default RegisterPage;
