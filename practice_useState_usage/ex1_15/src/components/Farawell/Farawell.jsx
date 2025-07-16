import { useEffect, useState } from "react";

function Farawell(){
    const [show, setShow] = useState(true);

    const handleChangeBtn = () =>{
        setShow(prevShow => !prevShow)
    }
    function Child(){
    useEffect(()=> {
        return() => {
             alert("Component removed!")
        };
       
    }, []);

    return(
        <div> Farawell Child is here</div>
    );
    }
    return(
        <div>
            <h3>Ex8:</h3>
            <button onClick={handleChangeBtn}>{show ? "Hide" : "Show"} Farawell</button>
            {show && <Child/>}
        </div>
    );
}
export default Farawell;