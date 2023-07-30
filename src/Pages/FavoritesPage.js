import React from "react";
import { useContext } from "react";
import FavoritesContext from "../Store/Favorites-context";
import MeetupList from "../Components/Meetup/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p className="p-4" >You have no favorites, how about we add some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites}/>;
  }

  return (
    <section>
      <h1 className="text-3xl bold p-4">My Favorites</h1>
      {content}{" "}
    </section>
  );
}

export default FavoritesPage;
