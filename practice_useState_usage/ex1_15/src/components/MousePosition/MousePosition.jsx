import { useEffect, useState } from "react";
function MousePosition(){
    const [position, setPosition] = useState({ x : 0, y : 0});

    const handleEvent = (e) =>{
        console.log("Mouse moved:", e.clientX, e.clientY);
        setPosition({x:e.clientX, y: e.clientY })
    }

    useEffect (() =>{
        window.addEventListener("mousemove", handleEvent);

        return () => {
            window.removeEventListener("mousemove", handleEvent)
        };
    },[])

    return(
        <div>
            <h3>Ex12</h3>
            <div>x = {position.x}</div>
            <div>y = {position.y}</div>
        </div>
    );

}
export default MousePosition;