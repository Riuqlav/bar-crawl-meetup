import { useContext } from "react";
import React from "react";
import Card from "../Layout/Card";
import FavoritesContext from "../../Store/Favorites-context";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className="border-2 border-gray-300 rounded-lg my-4 shadow-md overflow-hidden transform transition-transform duration-700 hover:scale-105">
      <Card>
        <div className="w-full">
          <img className="w-full h-64 object-cover" src={props.image} alt={props.title} />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-2">{props.title}</h3>
          <address className="italic mb-2">{props.address}</address>
          <p className="mb-2">{props.description}</p>
        </div>
        <div className="flex justify-end px-4 pb-4">
          <IconButton aria-label="add to favorites" onClick={toggleFavStatusHandler}>
            <FavoriteIcon color={itemIsFavorite ? "secondary" : "disabled"} />
          </IconButton>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;