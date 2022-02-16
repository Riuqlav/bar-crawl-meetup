import React from "react";
import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider() {
  return <FavoritesContext.Provider>



  </FavoritesContext.Provider>;
};
