import errorIcon from "../../assets/images/error_FILL0_wght400_GRAD0_opsz48.svg";
import "./FormError.scss";

export default function FormError() {
    return (
        <>
            <img src={errorIcon} alt="error icon" /> <p className="error__text">Form is missing necessary fields</p>
        </>
    );
}
