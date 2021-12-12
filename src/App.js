import React, { useState } from "react";
import BasicUserDetails from "./components/BasicUserDetails";
import RatingDetails from "./components/RatingDetails";
import SubmissionDetails from "./components/SubmissionDetails";
import UserInput from "./components/UserInput";
function App() {
  const [userName, setUserName] = useState('');
  const [isTouched, setIsTouched] =useState(false);
  const onUserInputHandler = (userInputHandle) => {
    setUserName(userInputHandle);
    setIsTouched(true);
    if (userInputHandle.length === 0){
      return;
    }
    // fetchUserInfo(userInputHandle);
  };

  // async function fetchUserInfo(user) {
  //   try {
  //     const response = await fetch(
  //       "https://codeforces.com/api/user.info?handles="+user
  //     );
  //     if(!response.ok)
  //       throw new Error("something went wrong ");
  //     const data = response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  let isUser = false;
  if (userName.length !== 0) isUser = true;
  return (
    <React.Fragment>
      <UserInput onUserInput={onUserInputHandler}></UserInput>
      {isUser && <h1 style={{textAlign: "center"}}>{userName}</h1>}
      {isUser && <BasicUserDetails userHandle={userName} />}
      {isUser && <SubmissionDetails userHandle= {userName}/>}
      {isUser && <RatingDetails userHandle={userName} />}
      {!isUser && isTouched && <h1 style={{textAlign: "center"}}>User Handle cannot be empty</h1>}
    </React.Fragment>
  );
}

export default App;
