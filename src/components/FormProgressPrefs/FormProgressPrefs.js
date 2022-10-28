import "./FormProgressPrefs.scss";
import ReactSlider from "react-slider";

export default function FormProgressPrefs() {
    return (
        <div className="progress__container">
            <ReactSlider className="progress" thumbClassName="progress__thumb" trackClassName="progress__track" markClassName="progress__mark" min={0} max={100} value={50} marks={50} disabled />
        </div>
    );
}
