import "./profile.css";
import Topbar from "../../Components/Topbar/topbar";
import Sidebar from "../../Components/Sidebar/sidebar";
import Feed from "../../Components/Feed/feed";
import Right from "../../Components/Rightbar/right";

function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img 
                className="profileCoverImg" 
                src="assets/home.jpg" 
                alt=""
                />
                <img 
                className="profileUserImg" 
                src="assets/king.jpg" 
                alt=""
                />

                </div>
                 <div className="profileInfo">
                     <h4 className="profileInfoName">Nelson Bechem</h4>
                     <span className="profileInfoDesc">Hello my friends!</span>
                 </div>
            </div>
            <div className="profileRightBottom">
            <Feed />
            <Right profile/>

        </div>
        </div>
        </div>
        </>
    )
}

export default Profile
