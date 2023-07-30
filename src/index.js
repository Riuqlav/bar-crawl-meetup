import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tailwindcss/tailwind.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./Store/Favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter basename={window.location.pathname || ""}>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
