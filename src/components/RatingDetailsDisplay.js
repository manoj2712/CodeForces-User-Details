import Card from "./Card";

const RatingDetailsDisplay = (props) => {
    let ratingDif = props.newRating - props.oldRating;
    let sign ="";
    if(ratingDif < 0)sign ="-";
    if(ratingDif > 0)sign ="+";
    ratingDif = Math.abs(ratingDif);
  return <Card>
      <p><strong>Contest Id : </strong>{props.contestId}</p>
      <p><strong>Contest Name : </strong>{props.contestName}</p>
      <p><strong>Old Rating : </strong>{props.oldRating}</p>
      <p><strong>New Rating : </strong>{props.newRating}</p>
      <p><strong>Rank : </strong>{props.rank}</p>
      <p><strong>Rating Change : {sign}</strong>{ratingDif}</p>
  </Card>;
};

export default RatingDetailsDisplay;
