import { useState } from "react";
import { UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import './AuthPanel.css'
function AuthPanel(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div className="log">
            <div className="authentication"> 
            <UserOutlined/> 
            <h2>User Authentication</h2>
            </div>
            {isLoggedIn ? <p>You are logged in!</p> : <p>Please login to continue</p>}
            {isLoggedIn ?
              (<button className="logout" onClick={()=>setIsLoggedIn(false)}><LogoutOutlined/>Logout</button>)
             : (<button className="login" onClick={() =>setIsLoggedIn(true)}><LoginOutlined/>Login</button>)}
        </div>
       
    );
    
}
export default AuthPanel;