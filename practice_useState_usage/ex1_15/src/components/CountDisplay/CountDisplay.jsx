import { useEffect, useState } from "react";
function CountDisplay(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount =>prevCount + 1)
    }

    useEffect(() => {
        alert("Count is now "+ count + " !")
    }, [count])

    return(
        <div>
            <h3>Ex5:</h3>
             <button  style={{color:"red"}}onClick={handleIncrement}>+</button> <span>{count}</span>
        </div>
       
    );
}
export default CountDisplay;