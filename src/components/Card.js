import "react-tabs/style/react-tabs.css";
import "../Styles/wcag.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="div1">
        <h2 className="level-a">{props.heading}</h2>
      </div>
      <div className="div2">
        <p>{props.description}</p>
      </div>
      <div className="div3">
        <strong>{props.subHeading}</strong>
      </div>
    </div>
  );
};

export default Card;
