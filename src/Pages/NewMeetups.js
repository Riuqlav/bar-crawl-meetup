import React from "react";
import NewMeetupForm from "../Components/Meetup/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {}

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
