import "./sidebar.css";
import {Bookmark,HelpOutline,RssFeed,WorkOutline,
    Event,School,PlayCircleOutline,
    People,WhatsApp,Phone,Message  } 
from "@material-ui/icons";
import {Users} from "../../dummyData";
import CloseFriend from "../CloseFriend/closefriend";


function sidebar() {
    return (
        <div className="sidebar">
              <div className="sidebarWrapper">
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                            <RssFeed className="sidebarIcon"/>
                            <span className="sidebarListItemText">Feed</span>
                      </li>
                      <li className="sidebarListItem">
                            <People className="sidebarIcon"/>
                            <span className="sidebarListItemText">Groupe</span>
                      </li>
                      <li className="sidebarListItem">
                            <PlayCircleOutline className="sidebarIcon"/>
                            <span className="sidebarListItemText">Video</span>
                      </li>

                      <li className="sidebarListItem">
                            <WhatsApp className="sidebarIcon"/>
                            <span className="sidebarListItemText">Chat</span>
                      </li>




                      <li className="sidebarListItem">
                            <Phone className="sidebarIcon"/>
                            <span className="sidebarListItemText">Calls</span>
                      </li>
                      <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            <span className="sidebarListItemText">Message</span>
                      </li>
                      <li className="sidebarListItem">
                            <PlayCircleOutline className="sidebarIcon"/>
                            <span className="sidebarListItemText">Video</span>
                      </li>


                      
                      <li className="sidebarListItem">
                            <Bookmark className="sidebarIcon"/>
                            <span className="sidebarListItemText">Bookmarks</span>
                      </li>

                      <li className="sidebarListItem">
                            <HelpOutline className="sidebarIcon"/>
                            <span className="sidebarListItemText">Questions</span>
                      </li>
                      <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            <span className="sidebarListItemText">Jobs</span>
                      </li>
                      <li className="sidebarListItem">
                            < Event className="sidebarIcon"/>
                            <span className="sidebarListItemText">Events</span>
                      </li>
                      <li className="sidebarListItem">
                            <School className="sidebarIcon"/>
                            <span className="sidebarListItemText">Courses</span>
                      </li>
                  </ul>
                  <button className="sidebarButton">Show More</button>
                  <hr className="sidebarHr"></hr>
                  <ul className="sidebarFriendList">

                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u} />
                    ))}
     

                  </ul>
                  
              </div>
        </div>
    )
}

export default sidebar
