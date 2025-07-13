import { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import '../DataLoader/DataLoader.css'
function LikeButton(){
    const [likesCount, setLikesCount] = useState(0);

    const handleLike = () => {
        setLikesCount(likesCount + 1);
    };

    const reset = () => {
        setLikesCount(0);
    };

    return(
        <div className="dataLoader">
           
                <HeartOutlined style={{color:"red", width: '40px'}}/>
                <p> <strong>Like ({likesCount})</strong></p>
           
            <button className="completeBtn" onClick={handleLike}>
                <HeartOutlined /> Like
            </button>
            <br></br>
            <button className="reloadBtn" onClick={reset}>Reset</button>
        </div>
    );
}

export default LikeButton;
