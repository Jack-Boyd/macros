import { useQuery } from '@tanstack/react-query';

interface Ingredient {
  id: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fats: number;
  fiber: number | null;
  sugar: number | null;
  createdBy: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

const fetchIngredients = async (): Promise<{ ingredients: Ingredient[] }> => {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          ingredients {
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
      `,
    }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch ingredients');
  }

  const result = await response.json();
  return result.data;
};

function Ingredients() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['ingredients'],
    queryFn: fetchIngredients,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Ingredients</h1>
      <div>
        {data?.ingredients.map((ingredient) => (
          <p key={ingredient.id}>{ingredient.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;
