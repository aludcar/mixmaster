import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Error,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages/index";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
  /*Configuracion por default, en este caso seteo que las queries
  son obseletas pasados los 5 mins estoy quiere decir que el resultado
  de una consulta puede persistir por 5 min, o cuando el componente se
  renderize nuevamente */
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    //requerde que el provider encapsula todo lo que este dentro para hacer uso del cliente
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
