import { useEffect, useState } from "react";

function KeyDisplays(){

    const [lastKey, setLastKey] = useState("");

    const handleKeyDisplays = (e) =>{
        setLastKey(e.key);

    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDisplays)
        return () =>{
            window.removeEventListener("keydown", handleKeyDisplays)
        }
    }, [])

    return(
        <div>
            <h3>Ex14:</h3>
            <div>You Pressed: {lastKey}</div>
        </div>
    );


}
export default KeyDisplays;