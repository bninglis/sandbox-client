import "./recommendations.scss";
import RecommendationsCard from "../RecommendationsCard/RecommendationsCard";

function Recommendations(props) {
  return (
    // "recom" short for recommendation
    <div className="recom-all">
      <div className="recom-top">
        <div className="recom-top__title">
          <h1>Awesome!</h1>
          <h2>Your profile has been successfully created.</h2>
        </div>
      </div>
      <div className="recom-top__subtitle">
        <h3>Now let’s start making some friends...</h3>
        <h3>Here are some of your colleagues with common interests.</h3>
      </div>
      <div className="recom-bottom">
        <RecommendationsCard />
        <RecommendationsCard />
        <RecommendationsCard />
      </div>
    </div>
  );
}

export default Recommendations;
