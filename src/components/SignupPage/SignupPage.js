import "./signup-page.scss";
import sandboxLogo from "../../assets/images/sandbox-logo.svg";
import bucketIcon from "../../assets/images/bucket-icon.svg";
import CreateForm from "../CreateForm/CreateForm";

function SignupPage() {
  return (
    <div className="signup-page">
      <div className="signup-left">
        <img
          className="signup-logo"
          src={sandboxLogo}
          alt="Word Sandbox with a multicolored cube for the 'O' in 'box'"
        />
        <img
          className="signup-icon"
          src={bucketIcon}
          alt="Beach pale filled with sand and a sand shovel on top"
        />
        <p className="signup-subtitle">Play together, dig deeper, collaborate stronger</p>
      </div>
      <div className="signup-right">
        <h1 className="signup-right__title">Create your account</h1>
        <CreateForm />
      </div>
    </div>
  );
}

export default SignupPage;
