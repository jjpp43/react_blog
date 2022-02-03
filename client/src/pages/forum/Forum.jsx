import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import axios from "axios" 
import "./forum.css"
import { useEffect, useState } from "react";

export default function forum() {
    return (
        <>
            <Header/>
            <div className="forum">
                <h1>Welcome to our forum</h1>
            </div>
        </>
    )
}