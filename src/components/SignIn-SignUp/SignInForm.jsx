
import "./SignInForm.css"
import user_icon from "./AssetsIcon/person.png"
import email_icon from "./AssetsIcon/email.png"
import password_icon from "./AssetsIcon/password.png"
import { useEffect, useState } from "react"


export default function SignInForm () {
    const initialValues = { username: "", email: "", password: "" };
    const [action, setAction] = useState("Sign Up");
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        console.log(event.target);
        // const newFormValues = { name : event.target.value};
        // console.log(newFormValues);
        const { name, value } = event.target;
        setFormValues( {...formValues, [name] : value } );
        console.log(formValues);
    }

    const clickOnSignUp = () => {
        // event.preventDefault();
        setAction("Sign Up");
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const clickOnLogin = () => {
        // event.preventDefault();
        setAction("Login");
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (vlaues) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!vlaues.username){
            errors.username = "Username is required!";
        }
        if (!vlaues.email){
            errors.email = "Email is required!";
        } else if (!regex.test(vlaues.email)){
            errors.email = "This is not the valid email format";
        }
        if (!vlaues.password){
            errors.password = "Password is required!";
        } else if (vlaues.password.length < 4){
            errors.password = "Password must be longer than 4 characters";
        }
        return errors;
    }
    return (<div className="container">
        {
            (Object.keys(formErrors).length === 0 && isSubmit) ? 
            <div className="success-message">Signed in Successfully</div> :
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        }
        
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            
            <div className="input">
                <img src={user_icon} alt="user-icon"/>
                <input type="text"
                        name="username" 
                        placeholder="Name"
                        value={formValues.username}
                        onChange={handleChange}/>
            </div>
            <p className="error-message main">{ formErrors.username }</p>
            
            <div className="input">
                <img src={email_icon} alt="email-icon"/>
                <input type="email"
                        name="email" 
                        placeholder="email"
                        value={formValues.email}
                        onChange={handleChange}/>
            </div>
            <p className="error-message main">{ formErrors.email }</p>

            <div className="input">
                <img src={password_icon} alt="password-icon"/>
                <input type="password"
                        name="password" 
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}/>
            </div>
            <p className="error-message main">{ formErrors.password }</p>
            
        </div>
        {
            action === "Sign Up" ? <div></div> : <div className="forgot-password">
                Lost Password? 
            <span>Click Here</span></div>  
        }
        
        <div className="submitbox">
                <div className={action === "Login"? "submit gray" : "submit" }
                    onClick={clickOnSignUp}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={clickOnLogin}>Login</div>
        </div>
    </div>)
}