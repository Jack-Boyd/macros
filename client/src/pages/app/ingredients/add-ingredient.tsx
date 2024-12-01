import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { graphql } from '../../../gql/gql';
import { graphqlClient } from '../../../utils/graphql-client';

const CREATE_INGREDIENT_MUTATION = graphql(`
  mutation CreateIngredient($name: String!, $description: String!, $calories: Float!, $protein: Float!, $carbohydrates: Float!, $fats: Float!, $fiber: Float, $sugar: Float) {
    createIngredient(name: $name, description: $description, calories: $calories, protein: $protein, carbohydrates: $carbohydrates, fats: $fats, fiber: $fiber, sugar: $sugar) {
      id
      name
      description
      calories
      protein
      carbohydrates
      fats
      fiber
      sugar
      createdBy {
        id
        firstName
        lastName
      }
    }
  }
`);

function AddIngredientPage() {
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: async (data: { name: string, description: string, calories: number, protein: number, carbohydrates: number, fats: number, fiber: number | null, sugar: number | null }) => 
      graphqlClient.request(CREATE_INGREDIENT_MUTATION, data),
    onSuccess: (data) => {
      console.log('Ingredient created successfully:', data);
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
      <h1>Add Ingredient</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register('description')}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            {...register('calories', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="protein">Protein</label>
          <input
            type="number"
            id="protein"
            {...register('protein', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="carbohydrates">Carbohydrates</label>
          <input
            type="number"
            id="carbohydrates"
            {...register('carbohydrates', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="fats">Fats</label>
          <input
            type="number"
            id="fats"
            {...register('fats', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="fiber">Fiber</label>
          <input
            type="number"
            id="fiber"
            {...register('fiber', { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="sugar">Sugar</label>
          <input
            type="number"
            id="sugar"
            {...register('sugar', { valueAsNumber: true })}
          />
        </div>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Saving...' : 'Submit'}
        </button>
        {mutation.isError && <p style={{ color: 'red' }}>Error saving ingredient.</p>}
        {mutation.isSuccess && <p style={{ color: 'green' }}>Ingredient saved successfully.</p>}
        </form>
    </div>
  )
} 

export default AddIngredientPage;