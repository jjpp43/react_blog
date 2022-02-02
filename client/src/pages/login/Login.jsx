import { Link } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";


export default function Login() {

    const [errorMessages, setErrorMessages] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    //user login info
    const db = [
    {
        email: "12@gmail.com",
        password: "1234"
    },
    {
        email: "34@gmail.com",
        password: "1234"
    }]

    const errors = {
        loginEmail: "invalid username",
        loginPassword: "invalid password"
    }

const handleSubmit = (event) => {
    event.preventDefault();

    var { loginEmail, loginPassword } = document.forms[0];

    const userData = db.find((user) => user.username === loginEmail.value);

    if(userData) {
        if(userData.password !== loginPassword.value) {
            setErrorMessages({name: "loginPassword", message: errors.loginPasswords});
        } else {
            setIsSubmitted(true);
        }
    } else {
        setErrorMessages({name: "loginEmail", message: errors.loginEmail})
    }
};
    const renderErrorMessage = (name) => 
        name ===errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" id="loginEmail" className="loginInput" placeholder="Enter your email" />
                {renderErrorMessage("loginEmail")}
                <label>Password</label>
                <input type="password" id="loginPassword" className="loginInput" placeholder="Enter your password" />
                {renderErrorMessage("loginPassword")}
                <button className="loginButton">Login</button> 
            </form>
    );

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            {isSubmitted ? <div>Logged in!</div> : renderForm}
            <button className="registerButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}