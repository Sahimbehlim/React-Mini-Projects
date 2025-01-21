import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { PiMapPinSimpleArea } from "react-icons/pi";
import { LiaHashtagSolid } from "react-icons/lia";
import { useRecipe } from "../../context/RecipeContext";

const RecipeCard = ({ recipe }) => {
  const { toggleViewRecipe } = useRecipe();
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col">
      <img
        className="w-full h-[300px] object-cover"
        src={recipe.image}
        alt={recipe.name}
      />
      <div className="px-4 py-2 flex flex-col h-full">
        <h2 className="font-semibold text-[20px]">{recipe.name}</h2>
        <div className="flex gap-5 text-gray-700">
          <p className="pt-1 flex items-center gap-1">
            <span>
              <BiCategoryAlt />
            </span>
            {recipe.category}
          </p>
          <p className="pt-1 flex items-center gap-1">
            <span>
              <PiMapPinSimpleArea />
            </span>
            {recipe.area}
          </p>
        </div>
        <p className="pt-1 flex items-center gap-1 text-gray-700 md:pb-4">
          <span>
            <LiaHashtagSolid />
          </span>
          {recipe.tags ? recipe.tags.split(",").join(" - ") : recipe.name}
        </p>
        <button
          onClick={() => toggleViewRecipe(recipe.id)}
          className="border-2 border-[#f57013] rounded-3xl text-[14px] w-full font-bold text-[#f0a41b] px-4 py-2 mb-3 mt-4 md:mt-auto transition-all hover:bg-gradient-to-r from-[#f57013] to-[#f0a41b] hover:text-white"
        >
          VIEW RECIPE
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
