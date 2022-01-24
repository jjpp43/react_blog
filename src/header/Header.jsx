import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://picsum.photos/id/1/400/200"
                alt=""
            />
        </div>
    )
}