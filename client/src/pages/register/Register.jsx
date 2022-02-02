import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://3000-jjpp43-reactblog-7x3xxlmjek7.ws-us30.gitpod.io/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login");
            console.log(res);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your email" 
                    onChange={e=>setEmail(e.target.value)}
                />
                <label>Username</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your username" 
                    onChange={e=>setUsername(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className="registerInput" 
                    placeholder="Enter your password" 
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerLoginButton">Register</button> 
            </form>
            <button className="registerButton">
                <Link className="link" to="/login">
                    Login
                </Link>    
            </button>
        </div>
    )
}