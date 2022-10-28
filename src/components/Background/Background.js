import FormProgress from "../FormSlider/FormProgress";
import { useState } from "react";
import Header from "../Header/Header";
import "./Background.scss"

export default function Background() {
    const [isFormValid, setIsFormValid] = useState();
    const company = sessionStorage.getItem("company");
    const handleSubmit = (e) => {
        e.preventDefault();
        const handlerFormData = { role: e.target.role.value, department: e.target.department.value, tenure: e.target.tenure.value };
        if (!handlerFormData.role || !handlerFormData.department || !handlerFormData.tenure) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
            sessionStorage.setItem("role", handlerFormData.role);
            sessionStorage.setItem("department", handlerFormData.department);
            sessionStorage.setItem("tenure", handlerFormData.tenure);
        }
    };
    return (
        <>
        <Header/>
        <div className="background-page">
        <h1 className="followup__title">Background</h1>
            <form className="background" onSubmit={handleSubmit}>
                <div className="background__input">
                    <div className="background__fields">
                        <label className="followup__label left-label" htmlFor="role">
                            What is your role within the company?
                        </label>
                        <input className="background__field" type="text" name="role" id="role" />
                        <label className="followup__label left-label" htmlFor="department">
                            What department do you work in?
                        </label>
                        <input className="background__field" type="text" name="department" id="department" />
                    </div>
                    <div className="background__tenure">
                        <p className="followup__text">How long have you been with {company}?</p>
                        <div>
                        <input className="background__radio" type="radio" name="tenure" value="lessthanone" />
                        <label className="followup__label followup__label--radio" htmlFor="lessthan1">
                            Less than 1 year
                        </label>
                        </div>
                        <div>
                        <input className="background__radio" type="radio" name="tenure" value="1to2" />
                        <label className="followup__label followup__label--radio" htmlFor="1to2">
                            1-2 years
                        </label>
                        </div>
                        
                        <div>
                        <input className="background__radio" type="radio" name="tenure" value="3to5" />
                        <label className="followup__label followup__label--radio" htmlFor="3to5">
                            3-5 years
                        </label>
                        </div>
                        <div>
                        <input className="background__radio" type="radio" name="tenure" value="5plus" />
                        <label className="followup__label followup__label--radio" htmlFor="5plus">
                            5+ years
                        </label>
                        </div>
                        
                    </div>
                </div>
                <button className="followup__submit" type="submit">
                    Next
                </button>
            </form>
        </div>
           
        </>
    );
}
