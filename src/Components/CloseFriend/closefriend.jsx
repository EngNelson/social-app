import "./closefriend.css";

const closefriend = ({user}) => {
    return (
        <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt=""/>
        <span className="sidebarFriendImgName">{user.username}</span>
    </li>
    )
}

export default closefriend
