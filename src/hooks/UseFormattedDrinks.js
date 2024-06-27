const UseFormattedDrinks = (drinks) => {
  if (!drinks) return null;
     const formattedDrinks = drinks.map((drink) => {
    const {
      idDrink,
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strGlass,
      strCategory,
      strInstructions,
    } = drink;
    
    return {
      id: idDrink,
      name: strDrink,
      thumbnail: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
      category: strCategory,
      instructions: strInstructions,
    };
  });
  return formattedDrinks;
};

export default UseFormattedDrinks;
