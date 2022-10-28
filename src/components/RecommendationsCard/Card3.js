import "./recommendations-card.scss";
import joe from "../../assets/images/joe.jpeg";

function Card3(props) {
  return (
    <div className="card">
      <div className="card__icon">
        <img className="card__icon" src={joe} />
      </div>
      <h3 className="card-name">Joe Johnson</h3>
      <div className="card-desc">
        <p className="card-desc-text">Role: Customer Service Associate</p>
        <p className="card-desc-text">Department: Customer Support</p>
        <p className="card-desc-text">Common Interests:</p>
        <p className="card-desc-text">Cooking, Food, Health</p>
      </div>
      <button className="card-button">Connect</button>
    </div>
  );
}

export default Card3;
