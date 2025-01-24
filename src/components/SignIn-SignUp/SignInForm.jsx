
import "./SignInForm.css"
import user_icon from "./AssetsIcon/person.png"
import email_icon from "./AssetsIcon/email.png"
import password_icon from "./AssetsIcon/password.png"
import { useState } from "react"


export default function SignInForm () {
    
    const [action, setAction] = useState("Sign Up");
    return (<div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {
                action === "Login" ? <div></div> : <div className="input">
                <img src={user_icon} alt="user-icon"/>
                <input type="text" placeholder="Name"/>
            </div>
            }
            
            <div className="input">
                <img src={email_icon} alt="email-icon"/>
                <input type="email" placeholder="email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="password-icon"/>
                <input type="password" placeholder="Password"/>
            </div>
            
        </div>
        {
            action === "Sign Up" ? <div></div> : <div className="forgot-password">
                Lost Password? 
            <span>Click Here</span></div>  
        }
        
        <div className="submitbox">
                <div className={action === "Login"? "submit gray" : "submit" }
                    onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}>Login</div>
        </div>
    </div>)
}