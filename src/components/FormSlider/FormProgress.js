import "./FormProgress.scss";
import ReactSlider from "react-slider";
import { useState } from "react";

export default function FormProgress() {
    const [progress, setProgress] = useState(0);
    return (
        <div className="progress__container">
            <ReactSlider className="progress" thumbClassName="progress__thumb" trackClassName="progress__track" markClassName="progress__mark" min={0} max={100} value={progress} marks={50} disabled />
        </div>
    );
}
