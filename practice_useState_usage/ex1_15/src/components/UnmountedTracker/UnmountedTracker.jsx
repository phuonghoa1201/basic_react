import { useEffect, useState } from "react";

function UnmountTracker(){
    useEffect(()=> {
        return() => {
             console.log("Component unmounted!")
        };
       
    }, []);

    return(
        <div>
            <h3>Ex9:</h3>
            <div> I am UnmountTracker component</div>

        </div>
        
    );
    }
export default UnmountTracker;