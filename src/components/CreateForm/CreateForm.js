import "./CreateForm.scss";
import { useState, useRef } from "react";

export default function CreateForm() {
    const [formData, setFormData] = useState();
    const [isFormValid, setIsFormValid] = useState(true);
    const formRef = useRef();
    const form = formRef.current;
    const handleSubmit = (e) => {
        console.log(e.target.firstname.value)
        e.preventDefault();
        const handlerFormData = { firstname: e.target.firstname.value, lastname: e.target.lastname.value, username: e.target.username.value, email: e.target.email.value, password: e.target.password.value, company: e.target.company.value };
        const agree = e.target.agree.value

        if (!handlerFormData.firstname || !handlerFormData.lastname || !handlerFormData.username || !handlerFormData.password || !handlerFormData.email || !handlerFormData.company||!agree) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
            sessionStorage.setItem("firstName", handlerFormData.firstname)
            sessionStorage.setItem("lastName", handlerFormData.lastname)
            sessionStorage.setItem("userName", handlerFormData.username)
            sessionStorage.setItem("email", handlerFormData.email)
            sessionStorage.setItem("company", handlerFormData.company)
            sessionStorage.setItem("password", handlerFormData.password)
            sessionStorage.setItem("if this were real","i promise we wouldn't save unprotected data in sessionStorage")
        }
    };
    return (
        <>
            <form className="create" ref={formRef} onSubmit={handleSubmit}>
                <div className="create__names">
                    <input className="create__field create__field-top" type="text" name="firstname" id="firstname" placeholder="First Name" />
                    <input className="create__field create__field-top" type="text" name="lastname" id="lastname" placeholder="Last Name" />
                </div>
                <div className="create__digital">
                    <input className="create__field create__field-top" type="text" name="username" id="username" placeholder="Username" />
                    <input className="create__field create__field-top" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="create__field-middle">
                <input className="create__field" type="text" name="company" id="company" placeholder="What is your company name?" />
                <input className="create__field" type="password" name="password" placeholder="Password" />

                </div>
                <div className="create__field-bottom">
                <input className="create__check" type="checkbox" name="agree" defaultValue={false} />
                <label htmlFor="agree" className="create__label">
                    I agree to the <span className="bold">Terms and Conditions</span>
                </label>
                <button className="create__submit">Sign Up</button>
                </div>
                
            </form>
            <p>
                Already have and account? <a>Log in</a>
            </p>
        </>
    );
}
