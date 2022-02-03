import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import axios from "axios" 
import "./home.css"
import { useEffect, useState } from "react";

export default function callbackHome() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            console.log(res);
        }
        fetchPosts()
    },[])
    return (
        <>
            <Header/>
            <div className="callbackHome">
                <h1>Call back</h1>
                <Posts/>
                <Sidebar/>
            </div>
        </>
    )
}