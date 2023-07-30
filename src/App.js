import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetupsPage";
import NewMeetupsPage from "./Pages/NewMeetupsPage";
import FavoritesPage from "./Pages/FavoritesPage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
