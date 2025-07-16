import { useEffect } from "react";

function WelcomeMessage(){
    useEffect(() => {
        alert("Welcome to the app! ")
    }, [])
    return(
        <div>
            Welcome Message component is mounted!

        </div>
    );
}
export default WelcomeMessage;