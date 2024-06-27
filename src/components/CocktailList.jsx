import React from "react";
import UseFormattedDrinks from "../hooks/UseFormattedDrinks";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  const formattedDrinks = UseFormattedDrinks(drinks);
  if (!formattedDrinks)
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  return (
    <Wrapper>
      {formattedDrinks?.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </Wrapper>
  );
};

export default CocktailList;
