import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
/* call this loader when router call element */

import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || ""],
    queryFn: async () => {
      const response = await axios.get(`${baseURL}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    //esta funcion recibe la instancia de queryclient y retorna otra funcion
    try {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get("search") || "";
      await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
      return { searchTerm };
    } catch (error) {
      console.log(error);
    }
  };

const Landing = () => {
  /*  I can use data from my loader */
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
