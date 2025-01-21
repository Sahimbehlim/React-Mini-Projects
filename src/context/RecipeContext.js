import { createContext, useContext } from "react";

export const RecipeContext = createContext({
  recipes: [],
  searchRecipe: (recipeInput) => {},
  toggleViewRecipe: (id) => {},
});

export const RecipeProvider = RecipeContext.Provider;

export const useRecipe = () => {
  return useContext(RecipeContext);
};
