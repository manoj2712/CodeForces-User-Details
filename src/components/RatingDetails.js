import React, { useEffect, useState } from "react";
import RatingDetailsDisplay from "./RatingDetailsDisplay";
import './Heading.css';

const RatingDetails = (props) => {
  const [userRatingDetails, setUserRatingDetails] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchRatingDetails(props.userHandle);
  }, [props.userHandle]);

  async function fetchRatingDetails(user) {
    setError(null);
    try {
      const response = await fetch(
        "https://codeforces.com/api/user.rating?handle=" + user
      );
      if (!response.ok) throw new Error("something went wrong ");
      const data = await response.json();
      const details = [];
      for (const key in data.result) {
        details.push({
          contestId: data.result[key].contestId,
          contestName: data.result[key].contestName,
          oldRating: data.result[key].oldRating,
          newRating: data.result[key].newRating,
          rank: data.result[key].rank,
          
        });
      }
      setUserRatingDetails(details);
      // console.log(details);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }
  let content = <h4>Loading...</h4>;
  if (userRatingDetails.length > 0) {
    content = userRatingDetails.map((user) => (
      <RatingDetailsDisplay
        key={user.contestId}
        contestId = {user.contestId}
        contestName={user.contestName}
        oldRating={user.oldRating}
        newRating= {user.newRating}
        rank ={user.rank}
      />
    ));
  }
  if(error){
    content= <h4 className="invalid">User Name is not valid</h4>
  }
  return (
    <React.Fragment>
      <h2 className="heading">Contest Wise Rating Details</h2>
      {content}
    </React.Fragment>
  );
};

export default RatingDetails;
