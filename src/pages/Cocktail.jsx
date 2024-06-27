import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import UseFormattedDrinks from "../hooks/UseFormattedDrinks";
import UseGetIngredients from "../hooks/UseGetIngredients";
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const { name, thumbnail, info, glass, category, instructions } =
    UseFormattedDrinks(data.drinks)[0];

  const ingredients = UseGetIngredients(singleDrink);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={thumbnail} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instruction:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.join(", ")}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
