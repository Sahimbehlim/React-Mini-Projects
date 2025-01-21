import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import ViewRecipe from "./ViewRecipe";
import { RecipeProvider } from "../../context/RecipeContext";
import RecipeSearch from "./RecipeSearch";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [viewRecipe, setViewRecipe] = useState(false);

  const searchRecipe = async (recipeInput) => {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeInput}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.meals === null) {
          return null;
        } else {
          const recipe = result.meals.map((meal) => ({
            data: meal,
            id: meal.idMeal,
            image: meal.strMealThumb,
            name: meal.strMeal,
            area: meal.strArea,
            category: meal.strCategory,
            tags: meal.strTags,
            instructions: meal.strInstructions,
            viewRecipe: false,
            ingredient: function () {
              let count = 1;
              let ingred = [];
              const recipeData = this.data;
              for (const key in recipeData) {
                let ingredient = "";
                let measure = "";
                if (key.startsWith("strIngredient") && recipeData[key]) {
                  ingredient = recipeData[key];
                  measure = recipeData[`strMeasure${count}`];
                  count++;
                  ingred.push(`${measure} ${ingredient}`);
                }
              }
              return ingred;
            },
          }));
          setRecipes(recipe);
        }
      })
      .catch(() => {
        return null;
      });
  };

  const toggleViewRecipe = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? {
              ...recipe,
              viewRecipe: !recipe.viewRecipe,
            }
          : recipe
      )
    );
    setViewRecipe(!viewRecipe);
  };

  useEffect(() => {
    viewRecipe
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [viewRecipe]);

  return (
    <RecipeProvider value={{ recipes, searchRecipe, toggleViewRecipe }}>
      <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-[#f57013] to-[#f0a41b] relative">
        <Link to="/" className="mt-4">
          <i className="ri-home-7-fill text-3xl text-white"></i>
        </Link>
        <h1 className="text-3xl font-extrabold pt-2 text-white">
          Recipe Corner
        </h1>
        <RecipeSearch />
        <div className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:px-10 py-10">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {recipes.map(
          (recipe) =>
            recipe.viewRecipe && <ViewRecipe key={recipe.id} recipe={recipe} />
        )}
      </section>
    </RecipeProvider>
  );
};

export default Recipe;
