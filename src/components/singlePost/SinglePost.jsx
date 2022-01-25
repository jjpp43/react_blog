import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                    src="https://picsum.photos/id/200/800/600"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Loerm Ipsum. blah blah blah whatever title.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Junna</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Loerm Ipsum. blah blah blah whatever text.
                    Loerm Ipsum. blah blah blah whatever text.
                    Loerm Ipsum. blah blah blah whatever text.
                    Loerm Ipsum. blah blah blah whatever text.
                    Loerm Ipsum. blah blah blah whatever text.
                </p>
            </div>
        </div>
    )
}