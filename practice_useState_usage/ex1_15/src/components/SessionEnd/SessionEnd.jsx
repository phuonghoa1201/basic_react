import { useEffect } from "react";
       function SessionEnd(){
        useEffect(()=> {
            return() => {
                 console.log("Session end!")
            };
           
        }, []);
    
        return(
            <div>
                <h3>Ex10:</h3>
                <div> I am Session End component</div>
    
            </div>
            
        );
        }
    export default SessionEnd;
