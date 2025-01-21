import React from "react";
import { useRecipe } from "../../context/RecipeContext";

const ViewRecipe = ({ recipe }) => {
  const { toggleViewRecipe } = useRecipe();
  const ingredients = recipe.ingredient();

  return (
    <>
      <section className="w-full h-screen fixed bg-[#00000090] z-10">
        <i
          onClick={() => toggleViewRecipe(recipe.id)}
          className="ri-close-large-line text-white text-2xl fixed right-3 top-2 cursor-pointer transition duration-500 hover:rotate-[360deg]"
        ></i>
        <div
          className={`w-[90%] lg:w-[75%] h-auto max-h-[75%] bg-white rounded-md fixed left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 p-4 overflow-auto shadow-lg`}
        >
          <p className="pt-1">
            <span className="font-semibold">Instructions : </span>
            {recipe.instructions}
          </p>
          <ul className="list-disc grid grid-cols-1 gap-y-1 sm:grid-cols-2 mt-2 px-6">
            {ingredients.map((ingredient, index) => (
              <li className="font-medium" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ViewRecipe;
