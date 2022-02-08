import React from "react";
import { Route } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetups from "./Pages/NewMeetups";
import Favorites from "./Pages/Favorites";

const App = () => {
  return (
    <div>
      <Route path="/">
        <AllMeetups />
      </Route>

      <Route path="/favorites">
        <Favorites />
      </Route>

      <Route path="/new-meetups">
        <NewMeetups />
      </Route>
    </div>
  );
};

export default App;
