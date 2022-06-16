import React, {useState, useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/meetups/.json`)
    .then(response => {
      return response.json();
    }).then(data => {
      setIsLoading(false);
      const meetups = [];
      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setLoadedMeetups(meetups)
    });
  }, [])
  

  

  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    )
  };

  return (
    <section>
      <h1>All Meetups</h1>
     <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage