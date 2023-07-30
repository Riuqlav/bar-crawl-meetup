import React from "react";
import { useRef } from "react";
import Card from "../Layout/Card";
import { useNavigate } from "react-router-dom";


function NewMeetupForm(props) {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className="p-4 space-y-4" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title" className="block mb-1">Meetup Title</label>
          <input type="text" required id="title" placeholder="Game Friday..." ref={titleInputRef} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="image" className="block mb-1">Meetup image</label>
          <input type="url" required id="image" placeholder="Image URL" ref={imageInputRef} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="address" className="block mb-1">Address</label>
          <textarea
            id="address"
            required
            rows="5"
            ref={addressInputRef}
            className="w-full p-2 border rounded"
            placeholder="Boulevard of Broken Dreams, 2004, Green Day"
          ></textarea>{" "}
        </div>

        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            className="w-full p-2 border rounded"
            placeholder="We'll do really cool stuff!"
          ></textarea>{" "}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-300 transition-colors duration-200"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-300 transition-colors duration-200 ml-4"
          >
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
