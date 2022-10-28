import "./recommendations-card.scss";
import jimmy from "../../assets/images/man1.jpeg"

function Card2(props) {
  return (
    <div className="card">
      <div className="card__icon"><img className="card__icon" src={jimmy} /></div>
      <h3 className="card-name">Jimmy James</h3>
      <div className="card-desc">
        <p className="card-desc-text">Role: QA Specialist</p>
        <p className="card-desc-text">Department: Quality Assurance</p>
        <p className="card-desc-text">Common Interests:</p>
        <p className="card-desc-text">Camping, Biking, Hiking</p>
      </div>
      <button className="card-button">Connect</button>
    </div>
  );
}

export default Card2;
