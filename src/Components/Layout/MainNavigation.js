import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../Store/Favorites-context";
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import GroupsIcon from '@mui/icons-material/Groups';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-red-900 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 text-2xl font-bold text-white">
                <GroupsIcon sx={{ fontSize: 40 }} />
              </div>
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link className="text-white hover:text-white" to="/">Home</Link>
              <Link className="text-white hover:text-white" to="/new-meetup">New Meetup</Link>
              <Link to="/favorites" className="relative">
                <AiOutlineHeart size={24} color="white" />
                {favoritesCtx.totalFavorites > 0 &&
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {favoritesCtx.totalFavorites}
                  </span>
                }
              </Link>
            </div>
          </div>
          <div className="sm:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <RiCloseLine className="block h-6 w-6" color="white" />
            ) : (
              <RiMenuLine className="block h-6 w-6" color="white"/>
            )}
          </div>
        </div>
      </div>
      <div className={`${open ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link className="text-white hover:text-white block" to="/">Home</Link>
          <Link className="text-white hover:text-white block" to="/new-meetup">New Meetup</Link>
          <Link to="/favorites" className="relative block">
            <AiOutlineHeart size={24} color="white" />
            {favoritesCtx.totalFavorites > 0 &&
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {favoritesCtx.totalFavorites}
              </span>
            }
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
