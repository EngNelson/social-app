import "./right.css";
import {Users} from "../../dummyData";
//import online from "../../Components/Online/online";
import Online from "../Online/online";

const right = ({profile}) => {

   const HomeRightbar = () => {
       return(
           <>
           
           <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/post/birthday.png" alt=""/>
                    <span className="birthayText">
                       <b> Sinclair Kambang </b> and <b>3 other friends </b> have a birthday today
                        </span>
                </div>
                <img className="rightbarAd" src="/assets/person/nassah.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                  {Users.map((u) => (
                    <Online key={u.id} user={u} />
            ))}       
            </ul>
           </>
       );
   };
   
   const ProfileRightbar = () =>{
       return(
           <>
           <h4 className="rightbarTitle">User information</h4>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">City:</span>
                   <span className="rightbarInfoValue">New York</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">From:</span>
                   <span className="rightbarInfoValue">Douala</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Relationship:</span>
                   <span className="rightbarInfoValue">Single</span>
               </div>
           </div>
           <h4 className="rightbarTitle">User friends</h4>
           <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/raise.jpg" alt="" className="rightbarFollowingImg"/>
                   <span className="rightbarFollowingName">Raise Ateh</span>
               </div>
           </div>
           </>
       )
   }


              



    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : < HomeRightbar />}            
                            
        </div>
        </div>
    
    )

}

export default right
