import React, { useEffect, useRef, useState } from "react";
import { useRecipe } from "../../context/RecipeContext";

const RecipeSearch = () => {
  const [recipeInput, setRecipeInput] = useState("");
  const { searchRecipe } = useRecipe();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    if (recipeInput == "") {
      alert("Enter value to proceed!");
      inputRef.current.focus();
    } else {
      searchRecipe(recipeInput).then((result) => {
        if (result === null) {
          alert("Sorry can't find it!");
          setRecipeInput("");
          inputRef.current.focus();
        }
      });
    }
  };

  return (
    <div className="flex rounded-lg overflow-hidden mt-6">
      <input
        ref={inputRef}
        value={recipeInput}
        onChange={(e) => setRecipeInput(e.target.value)}
        type="text"
        className="outline-none py-2 px-4"
        placeholder="Enter dish name"
      />
      <button
        onClick={handleSearch}
        className="text-white bg-black py-2 px-4 shrink-0"
      >
        Search
      </button>
    </div>
  );
};

export default RecipeSearch;
