import { useForm, useFieldArray } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';
import { graphql } from '../../../gql/gql';
import {
  Unit,
  CreateRecipeMutation,
  CreateRecipeMutationVariables,
  IngredientsQuery,
} from '../../../gql/graphql';
import { graphqlClient } from '../../../utils/graphql-client';

const CREATE_RECIPE_MUTATION = graphql(`
  mutation CreateRecipe(
    $title: String!
    $description: String
    $servings: Int!
    $recipeIngredients: [RecipeIngredientInput!]!
  ) {
    createRecipe(
      title: $title
      description: $description
      servings: $servings
      recipeIngredients: $recipeIngredients
    ) {
      id
      title
      description
      servings
      recipeIngredients {
        id
        quantity
        unit
        ingredient {
          id
          name
        }
      }
    }
  }
`);

const INGREDIENTS_QUERY = graphql(`
  query IngredientsInput {
    ingredients {
      id
      name
    }
  }
`);

type FormData = {
  title: string;
  description: string;
  servings: number;
  recipeIngredients: { ingredientId: string; quantity: string; unit: string }[];
};

function AddRecipePage() {
  const { register, handleSubmit, control, reset } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      servings: 1,
      recipeIngredients: [{ ingredientId: '', quantity: '', unit: 'GRAMS' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipeIngredients',
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['ingredients'],
    queryFn: async () =>
      graphqlClient.request<IngredientsQuery>(INGREDIENTS_QUERY),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: async (data: CreateRecipeMutationVariables) => {
      console.log('data', data);
      return graphqlClient.request<
        CreateRecipeMutation,
        CreateRecipeMutationVariables
      >(CREATE_RECIPE_MUTATION, data);
    },
    onSuccess: (data) => {
      console.log('Recipe created successfully:', data);
      reset();
    },
    onError: (error) => {
      console.error('Error creating recipe:', error);
    },
  });

  const onSubmit = async (data: FormData) => {
    const formattedData: CreateRecipeMutationVariables = {
      title: data.title,
      description: data.description || null,
      servings: data.servings,
      recipeIngredients: data.recipeIngredients.map((ingredient) => ({
        ingredientId: ingredient.ingredientId,
        quantity: parseFloat(ingredient.quantity),
        unit: ingredient.unit as Unit,
      })),
    };

    mutation.mutate(formattedData);
  };

  if (isLoading) return <div>Loading ingredients...</div>;
  if (error) return <div>Error loading ingredients: {error.message}</div>;

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" {...register('description')} />
        </div>
        <div>
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            {...register('servings', { required: true, valueAsNumber: true })}
          />
        </div>
        <div>
          <h2>Ingredients</h2>
          {fields.map((field, index) => (
            <div key={field.id} style={{ marginBottom: '10px' }}>
              <div>
                <label htmlFor={`recipeIngredients[${index}].ingredientId`}>
                  Ingredient:
                </label>
                <select
                  id={`recipeIngredients[${index}].ingredientId`}
                  {...register(`recipeIngredients.${index}.ingredientId`, {
                    required: true,
                  })}
                >
                  <option value="">Select an ingredient</option>
                  {data?.ingredients.map((ingredient) => (
                    <option key={ingredient.id} value={ingredient.id}>
                      {ingredient.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`recipeIngredients[${index}].quantity`}>
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`recipeIngredients[${index}].quantity`}
                  {...register(`recipeIngredients.${index}.quantity`, {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label htmlFor={`recipeIngredients[${index}].unit`}>
                  Unit:
                </label>
                <select
                  id={`recipeIngredients[${index}].unit`}
                  {...register(`recipeIngredients.${index}.unit`, {
                    required: true,
                  })}
                >
                  <option value="GRAMS">Grams</option>
                  <option value="POUNDS">Pounds</option>
                  <option value="MILLILITRES">Millilitres</option>
                </select>
              </div>
              <button type="button" onClick={() => remove(index)}>
                Remove Ingredient
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({ ingredientId: '', quantity: '', unit: 'GRAMS' })
            }
          >
            Add Ingredient
          </button>
        </div>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
        {mutation.isError && <p>Error: {mutation.error?.message}</p>}
      </form>
    </div>
  );
}

export default AddRecipePage;
