// src/hooks/useGetRecipes.ts
import { IRecipe } from "@/types/recipe";
import { fetcher } from "@/utils/axios";
import { useMemo } from "react";
import useSWR from "swr";

export function useGetRecipes() {
  const URL = "/data/recipes.json";

  const { data, error, isValidating } = useSWR(URL, fetcher);

  const isLoading = !data && !error;

  const memoizedValue = useMemo(
    () => ({
      recipes: (data as IRecipe[]) || [],
      recipesLoading: isLoading,
      recipesError: error,
      recipesValidating: isValidating,
      recipesEmpty: !isLoading && data && data.length === 0,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
export function useGetRecipe(recipeId: number) {
  const URL = "/data/recipes.json";

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const recipe = data?.find((r: any) => r.id === recipeId);
  const memoizedValue = useMemo(
    () => ({
      recipe: recipe as IRecipe,
      recipeLoading: isLoading,
      recipeError: error,
      recipeValidating: isValidating,
    }),
    [recipe, error, isLoading, isValidating]
  );

  return memoizedValue;
}
