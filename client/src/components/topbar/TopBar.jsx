import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false; //for test purposes
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/forum">FORUM</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImg"
                        src="https://picsum.photos/id/1/200/300"
                        alt=""
                    />    
                ) : (
                    <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                    </li>
                </ul>
                )}
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}