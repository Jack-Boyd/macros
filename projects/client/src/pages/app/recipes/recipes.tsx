import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { graphql } from '../../../gql/gql';
import { graphqlClient } from '../../../utils/graphql-client';

const RECIPES_QUERY = graphql(`
  query Recipes {
    recipes {
      id
      title
      description
      servings
      totalCalories
      totalProtein
      totalCarbohydrates
      totalFats
      createdBy {
        id
        firstName
        lastName
      }
    }
  }
`);

function Recipes() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: async () => graphqlClient.request(RECIPES_QUERY),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Recipes</h1>
      <Link to="/app/recipes/add">Add</Link>
      <div>
        {data?.recipes.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <p>{recipe.servings}</p>
            <p>{recipe!.totalCalories! / recipe.servings}</p>
            <p>{recipe!.totalProtein! / recipe.servings}</p>
            <p>{recipe!.totalCarbohydrates! / recipe.servings}</p>
            <p>{recipe!.totalFats! / recipe.servings}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
