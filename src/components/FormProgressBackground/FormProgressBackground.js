import "./FormProgressBackground.scss";
import ReactSlider from "react-slider";
import { useState } from "react";

export default function FormProgressBackground() {
    return (
        <div className="progress__container">
            <ReactSlider className="progress" thumbClassName="progress__thumb" trackClassName="progress__track" markClassName="progress__mark" min={0} max={100} value={0} marks={50} disabled />
        </div>
    );
}
