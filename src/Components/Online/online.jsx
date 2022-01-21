import "./online.css";

const online = ({user}) => {
    return (
        <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src={user.profilePicture} 
                            alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">{user.username}</span>
                    </li>
    );
}

export default online
