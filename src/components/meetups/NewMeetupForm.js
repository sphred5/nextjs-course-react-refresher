import {useRef} from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e){
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title : enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData);


  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required it="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required it="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Adress</label>
          <input type="text" required it="adress" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" required it="description"  rows='5' ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
export default NewMeetupForm