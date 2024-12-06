import { useQuery } from '@tanstack/react-query';
import { graphql } from '../../../gql/gql';
import { graphqlClient } from '../../../utils/graphql-client';

const INGREDIENTS_QUERY = graphql(`
  query Ingredients {
    ingredients {
      id
      name
      description
      unit
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

function Ingredients() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['ingredients'],
    queryFn: async () => graphqlClient.request(INGREDIENTS_QUERY),
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
          <div key={ingredient.id}>
            <p>{ingredient.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;
