const UseGetIngredients = (singleDrink) => {
  if (!singleDrink) return null;
  
  const keys = Object.keys(singleDrink);
  const validIngredientKeys = keys.filter(
    (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
  );
  const validIngredients = validIngredientKeys.map((key) => singleDrink[key]);

  return validIngredients;
};

export default UseGetIngredients;
