import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { graphql } from '../../gql/gql';
import { graphqlClient } from '../../utils/graphql-client';

const REGISTER_MUTATION = graphql(`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      message
    }
  }
`);

function RegisterPage() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => 
      graphqlClient.request(REGISTER_MUTATION, { email, password }),
    onSuccess: () => {
      navigate('/app', { replace: true });
      window.location.reload();
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
