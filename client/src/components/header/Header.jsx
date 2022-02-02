import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">공군</span>
                <span className="headerTitleLarge">정보보호병</span>
            </div>
            <img
                className="headerImg"
                src="https://cdn.pixabay.com/photo/2017/12/26/21/19/tech-3041437_960_720.jpg"
                alt=""
            />
        </div>
    )
}