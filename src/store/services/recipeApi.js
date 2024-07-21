import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeApi = createApi({
  reducerPath : 'recipeApi',
  baseQuery : fetchBaseQuery({baseUrl : 'https://dummyjson.com/'}),
  endpoints : (builder) => ({
    getRecipes : builder.query({
      query : () => 'recipes',
    })
  })
});

export const {useGetRecipesQuery} = recipeApi;