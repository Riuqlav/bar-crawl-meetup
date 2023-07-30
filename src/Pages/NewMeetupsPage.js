import { useNavigate } from "react-router-dom";
import React from "react";
import NewMeetupForm from "../Components/Meetup/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch("https://bar-crawl-meetup-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json();
    })
    .then(() => {
      navigate("/", { replace: true });
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  }

  return (
    <section>
      <h1 className="text-3xl bold p-4" >Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
