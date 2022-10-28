import FormProgressPrefs from "../FormProgressPrefs/FormProgressPrefs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const checkedDefault = { messaging: false, video: false, voice: false, irl: false, scheduled: false, spontaneous: false };

export default function Preferences() {
    const navigate = useNavigate();
    function findCommonElements(arr1, arr2) {
        return arr1.some((item) => arr2.includes(item));
    }

    const [isFormValid, setIsFormValid] = useState();
    const [checkedMethods, setCheckedMethods] = useState([]);
    const [checkedTime, setCheckedTime] = useState([]);
    const handleChangeMethods = (e) => {
        // console.log(e.target.name,e.target.checked)
        var updatedList = [...checkedMethods];
        if (e.target.checked) {
            updatedList = [...checkedMethods, e.target.value];
        } else {
            updatedList.splice(checkedMethods.indexOf(e.target.value), 1);
        }
        setCheckedMethods(updatedList);
    };
    const handleChangeTime = (e) => {
        // console.log(e.target.name,e.target.checked)
        var updatedList = [...checkedTime];
        if (e.target.checked) {
            updatedList = [...checkedTime, e.target.value];
        } else {
            updatedList.splice(checkedTime.indexOf(e.target.value), 1);
        }
        setCheckedTime(updatedList);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const contactMethods = ["messaging", "video", "voice", "irl"];
        if (findCommonElements(checkedMethods, contactMethods)) {
            setIsFormValid(false);
        }
        if (checkedTime.indexOf("scheduled") > -1 || checkedTime.indexOf("spontaneous") > -1) {
            setIsFormValid(true);
            const contactMethodsOutput = checkedMethods.join(", ");
            const contactTimeOutput = checkedTime.join(", ");
            sessionStorage.setItem("contactMethods", contactMethodsOutput);
            sessionStorage.setItem("contactTime", contactTimeOutput);
            navigate("/preferences");
        }
    };
    return (
        <>
            <h1 className="followup__title">Preferences</h1>
            <form className="preferences" onSubmit={handleSubmit}>
                <div className="preferences__input">
                    <div className="preferences__fields">
                        <p className="followup__text">I prefer to interact via a...</p>
                        <input className="followup__check" type="checkbox" name="messaging" value="messaging" defaultChecked={false} onChange={handleChangeMethods} />
                        <label className="followup__label followup__label--check" htmlFor="messaging">
                            Messaging platform
                        </label>
                        <input className="followup__check" type="checkbox" name="video" value="video" defaultChecked={false} onChange={handleChangeMethods} />
                        <label className="followup__label followup__label--check" htmlFor="video">
                            Video conferencing tool
                        </label>
                        <input className="followup__check" type="checkbox" name="voice" value="voice" defaultChecked={false} onChange={handleChangeMethods} />
                        <label className="followup__label followup__label--check" htmlFor="voice">
                            Voice call
                        </label>
                        <input className="followup__check" type="checkbox" name="irl" value="irl" defaultChecked={false} onChange={handleChangeMethods} />
                        <label className="followup__label followup__label--check" htmlFor="irl">
                            In-person
                        </label>
                    </div>
                    <div className="preferences__tenure">
                        <p className="followup__text">I prefer to...</p>
                        <input className="followup__check" type="checkbox" name="schedule" id="schedule" value="scheduled" defaultChecked={false} onChange={handleChangeTime} />
                        <label className="followup__label followup__label--check" htmlFor="schedule">
                            Schedule a time to chat
                        </label>
                        <input className="followup__check" type="checkbox" name="spontaneous" id="spontaneous" value="spontaneous" defaultChecked={false} onChange={handleChangeTime} />
                        <label className="followup__label followup__label--check" htmlFor="spontaneous">
                            Impromptu coffee chats are fun!
                        </label>
                    </div>
                </div>
                <button className="followup__submit" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}
