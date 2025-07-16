import { useEffect } from "react";

function MountNotice(){
    useEffect(() => {
        console.log( "Component mounted!")

    },[])
    return(
        <div>Mount Notice sucessfull</div>
    );

};
export default MountNotice;