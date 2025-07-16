import { useEffect, useState } from "react";

function Stopwatch(){
    const [time, setTime] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setTime(s => s + 1)
        }, 1000);
    return () => {clearInterval(timer);
    console.log("Stopwatch unmounted");
    };

    }, [])
    return(
        <div>
             <h3>Ex11: </h3> 
             <div>Second: {time}</div>
            

        </div>
       
    );
}
export default Stopwatch;