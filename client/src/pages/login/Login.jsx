import { Link } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";
import GoogleButton from "../../components/googleButton/GoogleButton";

const responseGoogle = (response) => {
    console.log(response);
}

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" id="loginEmail" className="loginInput" placeholder="Enter your email" />
                <label>Password</label>
                <input type="password" id="loginPassword" className="loginInput" placeholder="Enter your password" />
                <button className="loginButton">Login</button> 
            </form>
            <GoogleButton />
            <button className="registerButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}