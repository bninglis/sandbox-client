import "./FormProgress.scss";
import ReactSlider from "react-slider";
import { useState } from "react";

export default function FormProgress() {
    const [progress, setProgress] = useState(0)
    return (
        <>
            <ReactSlider className="progress"
                thumbClassName="progress__thumb"
                trackClassName="progress__track"
                markClassName="progress__mark"
                min="0"
                max="99"
                value={progress}
                marks="33"
                />
        </>
    );
}
