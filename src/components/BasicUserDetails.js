import React, { useEffect, useState } from "react";
import BasicDetailsDisplay from "./BasicDetailsDispaly";
import './Heading.css';

const BasicUserDetails = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchUserInfo(props.userHandle);
  }, [props.userHandle]);

  async function fetchUserInfo(user) {
    setError(null);
    try {
      const response = await fetch(
        "https://codeforces.com/api/user.info?handles=" + user
      );
      if (!response.ok) throw new Error("something went wrong ");
      const data = await response.json();
      // console.log(data);
      const details = [];
      for (const key in data.result) {
        details.push({
          userName: data.result[key].handle,
          userFirstName: data.result[key].firstName
            ? data.result[key].firstName
            : "not available",
          userLastName: data.result[key].lastName
            ? data.result[key].lastName
            : "",
            userEmail : data.result[key].email ? data.result[key].email : "not available ",
            userMaxRating : data.result[key].maxRating,
            userRating : data.result[key].rating,
            userRank : data.result[key].rank,
            userMaxRank : data.result[key].maxRank,
            userCity : data.result[key].city ? data.result[key].city : "not available",
            userCountry : data.result[key].country ? data.result[key].country : "not available",
            userLastOnline : data.result[key].lastOnlineTimeSeconds,
            userRegistration : data.result[key].registrationTimeSeconds,
        });
      }
      setUserDetails(details);
      // console.log(details);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }
  let content = <h4>Loading</h4>;
  if (userDetails.length > 0) {
    content = userDetails.map((user) => (
      <BasicDetailsDisplay
        key={user.userName}
        firstName={user.userFirstName}
        lastName={user.userLastName}
        email ={user.userEmail}
        rank = {user.userRank}
        maxRank ={user.userMaxRank}
        rating ={user.userRating}
        maxRating={user.userMaxRating}
        city ={user.userCity}
        country ={user.userCountry}
        register ={user.userRegistration}
        lastOnline ={user.userLastOnline}
      />
    ));
  }
  if (error) {
    content = <h4 className="invalid">User Name is not valid</h4>;
  }
  return (
    <React.Fragment>
      <h2 className="heading" >Basic Details</h2>
      {content}
    </React.Fragment>
  );
};

export default BasicUserDetails;
