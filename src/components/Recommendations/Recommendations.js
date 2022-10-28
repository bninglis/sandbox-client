import "./recommendations.scss";
import RecommendationsCard from "../RecommendationsCard/RecommendationsCard";
import sandboxLogo from "../../assets/images/sandbox-logo.svg";
import Card2 from "../RecommendationsCard/Card2";
import Card3 from "../RecommendationsCard/Card3";

function Recommendations(props) {
  return (
    // "recom" short for recommendation
    <div className="recom-all">
      <div className="sandbox-header">
        <img className="header-logo" src={sandboxLogo} />
      </div>
      <div className="recom-top">
        <div className="recom-top__title">
          <h1 className="recom-top-main__title">Awesome!</h1>
          <h2 className="recom-top__subtitle">
            Your profile has been successfully created.
          </h2>
        </div>
      </div>
      <div>
        <h3 className="recom-top__subtitles">
          Now let’s start making some friends...
        </h3>
        <h3 className="recom-top__subtitles">
          Here are some of your colleagues with common interests.
        </h3>
      </div>
      <div className="recom-bottom">
        <RecommendationsCard />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default Recommendations;
