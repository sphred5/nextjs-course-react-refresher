import React from 'react'
import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'
const NewMeetupsPage = () => {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(`${
      process.env.REACT_APP_API_URL}/meetups/.json`, 
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers : {
          'Content-Type': 'application/json'
        }
      }
    ).then(
      () => {
        navigate("/", {replace: true});
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupsPage