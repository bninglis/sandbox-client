import sandboxLogo from "../../assets/images/sandbox-logo.svg";
import "./Header.scss"

function Header() {
    return (
        <div className="sandbox-header">
            <img className="header-logo" src={sandboxLogo} />
            <h2 className="header-title">Finish setting up your account.</h2>
        </div>
    );
}

export default Header;