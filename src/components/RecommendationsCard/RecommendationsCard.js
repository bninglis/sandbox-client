import "./recommendations-card.scss";
import jane from "../../assets/images/woman-icon.jpeg"

function Recommendations(props) {
  return (
    // "recom" short for recommendation

    <div className="card">
      <div className="card__icon"> 
      <img className="card__icon" src={jane}/></div>
      <h3 className="card-name">Jane Jones</h3>
      <div className="card-desc">
        <p className="card-desc-text">Role: Marketing Manager</p>
        <p className="card-desc-text">Department: Marketing</p>
        <p className="card-desc-text">Common Interests:</p>
        <p className="card-desc-text">Photography, Yoga, Travel</p>
      </div>
      <button className="card-button">Connect</button>
    </div>
  );
}

export default Recommendations;
