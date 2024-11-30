import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

function SetupForm() {
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: async (data: { firstName: string; lastName: string; age: number; height: number; weight: number; gender: string }) => {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation ($firstName: String!, $lastName: String!, $age: Int!, $height: Float!, $weight: Float!, $gender: Gender!) {
              updateUser(firstName: $firstName, lastName: $lastName, age: $age, height: $height, weight: $weight, gender: $gender) {
                id
                firstName
                lastName
                age
                height
                weight
                gender
                profileComplete
              }
            }
          `,
          variables: {
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            height: data.height,
            weight: data.weight,
            gender: data.gender,
          },
        }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log('Profile updated successfully:', data);
    },
    onError: (error) => {
      console.error('Error updating profile:', error);
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2>Setup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            {...register('firstName', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            {...register('lastName', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register('age', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            id="height"
            {...register('height', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            id="weight"
            {...register('weight', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            {...register('gender', { required: true})}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Saving...' : 'Submit'}
        </button>
      </form>
      {mutation.isError && <p style={{ color: 'red' }}>Error saving profile.</p>}
      {mutation.isSuccess && <p style={{ color: 'green' }}>Profile saved successfully.</p>}
    </div>
  );
}

export default SetupForm;
