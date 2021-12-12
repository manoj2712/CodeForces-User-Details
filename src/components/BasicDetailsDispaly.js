import Card from "./Card";

const BasicDetailsDisplay = (props) => {
  const name = props.firstName + " " + props.lastName;

  const dateObjLastOnline = new Date(props.lastOnline * 1000);
  const lastOnline =
  dateObjLastOnline.getHours() + ":"+ dateObjLastOnline.getMinutes() +" UTC, "+
    dateObjLastOnline.toLocaleString("en-US", { day: "2-digit" }) +
    " " +
    dateObjLastOnline.toLocaleString("en-US", { month: "long" }) +
    " " +
    dateObjLastOnline.getFullYear();

    const dateObjRegistration = new Date(props.register * 1000);
  const registerDate =
  dateObjRegistration.getHours() + ":"+ dateObjRegistration.getMinutes() +" UTC, "+
    dateObjRegistration.toLocaleString("en-US", { day: "2-digit" }) +
    " " +
    dateObjRegistration.toLocaleString("en-US", { month: "long" }) +
    " " +
    dateObjRegistration.getFullYear();

  return (
    <Card>
      <p>
        <strong>Name : </strong>
        {name}
      </p>
      <p>
        <strong>Email : </strong>
        {props.email}
      </p>
      <p>
        <strong>Rating : </strong>
        {props.rating}
      </p>
      <p>
        <strong>MaxRating : </strong>
        {props.maxRating}
      </p>
      <p>
        <strong>Rank : </strong>
        {props.rank}
      </p>
      <p>
        <strong>MaxRank : </strong>
        {props.maxRank}
      </p>
      <p>
        <strong>Country : </strong>
        {props.country}
      </p>
      <p>
        <strong>City : </strong>
        {props.city}
      </p>
      <p>
        <strong>Registered : </strong>
        {registerDate}
      </p>
      <p>
        <strong>Last Online : </strong>
        {lastOnline}
      </p>
    </Card>
  );
};

export default BasicDetailsDisplay;
