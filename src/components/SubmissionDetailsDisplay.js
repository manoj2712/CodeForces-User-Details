import Card from './Card'

const SubmissionDetailsDisplay =props=>{

    const dateObj = new Date(props.submissionTime * 1000);
    const submissionTime =
    dateObj.getHours() + ":"+ dateObj.getMinutes() +" UTC, "+
      dateObj.toLocaleString("en-US", { day: "2-digit" }) +
      " " +
      dateObj.toLocaleString("en-US", { month: "long" }) +
      " " +
      dateObj.getFullYear();

    return(
        <Card>
            <p><strong>Problem Name : </strong>{props.problemName}</p>
            <p><strong>Problem Index : </strong>{props.problemIndex}</p>
            <p><strong>Verdict : </strong>{props.verdict}</p>
            <p><strong>Submission Time : </strong>{submissionTime}</p>
            <p><strong>Programming Language : </strong>{props.programmingLang}</p>
            <p><strong>Problem Tags : </strong>{props.tags}</p>
        </Card>
    )
}

export default SubmissionDetailsDisplay;