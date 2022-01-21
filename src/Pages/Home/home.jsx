import profile from "../../Pages/profile/Profile";
import Topbar from "../../Components/Topbar/topbar";
import Sidebar from "../../Components/Sidebar/sidebar";
import Feed from "../../Components/Feed/feed";
import Right from "../../Components/Rightbar/right";

import "./home.css";


export const home = () => {
    return (
        <>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Right />
        </div>
        </>
    )
}
export default home;
