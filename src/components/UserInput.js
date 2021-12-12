import { useState } from "react";
import Card from "./Card";
import classes from './UserInput.module.css';

const UserInput = (props) => {
  const [userHandle, setUserHandle] = useState("");
  const onUserInputChangeHandler = (event) => {
    setUserHandle(event.target.value);
  };
  const onUserDetailSubmitHandler = (event) => {
    event.preventDefault();
    const userInputHandle = userHandle;
    props.onUserInput(userInputHandle);
    setUserHandle("");
  };
  return (
    <Card>
      <form onSubmit={onUserDetailSubmitHandler}>
        <label htmlFor="userHandle" className={classes.userHandle}>User Handle : </label>
          <input onChange={onUserInputChangeHandler} value={userHandle} className={classes.input}></input>
        
        <button className={classes.button} ><strong>Fetch Details</strong></button>
      </form>
    </Card>
  );
};

export default UserInput;
