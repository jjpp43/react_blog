import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" 
                src="https://picsum.photos/id/1000/200/300"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postCat">Movie</span>
                    <span className="postCat">Sport</span>
                    <span className="postCat">Tech</span>
                    <span className="postCat">Video</span>
                </div>
            
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}