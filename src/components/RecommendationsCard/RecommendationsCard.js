import "./recommendations-card.scss";

function Recommendations(props) {
  return (
    // "recom" short for recommendation
    <div className="card">
      <div className="card__icon"> </div>
      <h3>Name</h3>
      <div className="card-desc">
        <p>Role:</p>
        <p>Department:</p>
        <p>Common Interests:</p>
      </div>
      <button>Connect</button>
    </div>

    //   <div className="card">
    //   <div className="card__icon"> </div>
    //   <h3>Jane Jones</h3>
    //   <div className="card-desc">
    //     <p>Role: Marketing Manager</p>
    //     <p>Department: Marketing</p>
    //     <p>Common Interests:</p>
    //   </div>
    //   <button>Connect</button>
    // </div>
  );
}

export default Recommendations;
