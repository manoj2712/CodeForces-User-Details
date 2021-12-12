import React, { useEffect, useState } from "react";
import SubmissionDetailsDisplay from "./SubmissionDetailsDisplay";
import './Heading.css';

const SubmissionDetails = (props) => {
  const [submission, setSubmission] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchSubmissionDetails(props.userHandle);
  }, [props.userHandle]);

  async function fetchSubmissionDetails(user) {
    setError(null);
    try {
      const response = await fetch(
        "https://codeforces.com/api/user.status?handle=" +
          user +
          "&from=1&count=15"
      );
      if (!response.ok) throw new Error("something went wrong ");
      const data = await response.json();
      const details = [];
      for (const key in data.result) {
        let tags="";
        for(const k in data.result[key].problem.tags){
          tags= tags + " , " + data.result[key].problem.tags[k];
        }
        // console.log(tags);
        details.push({
          id: data.result[key].id,
          problemName: data.result[key].problem.name,
          problemIndex: data.result[key].problem.index,
          verdict: data.result[key].verdict,
          programmingLang: data.result[key].programmingLanguage,
          submissionTime: data.result[key].creationTimeSeconds,
          problemTags : tags,
        });
      }
      setSubmission(details);
      // console.log(details);
      // console.log(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  let content = <h4>Loading...</h4>;
  if (submission.length > 0) {
    content = submission.map((user) => (
      <SubmissionDetailsDisplay
        key={user.id}
        problemName={user.problemName}
        problemIndex={user.problemIndex}
        verdict={user.verdict}
        programmingLang={user.programmingLang}
        submissionTime={user.submissionTime}
        tags={user.problemTags}
      />
    ));
  }
  if (error) {
    content = <h4 className="invalid">User Name is not valid</h4>;
  }
  return (
    <React.Fragment>
      <h2 className="heading">
        Problem Submission Details (atmost recent 15)
      </h2>
      {content}
    </React.Fragment>
  );
};

export default SubmissionDetails;
