import { useEffect, useState } from "react";

function WindowDimemsions(){
    const [size, setSize] = useState({w: window.innerWidth, h: window.innerHeight})

    const handleDisplays = () => {
        setSize({w: window.innerWidth, h: window.innerHeight});
    }
    useEffect( () =>{
        window.addEventListener("resize", handleDisplays)
        return () =>{
            window.removeEventListener("resize",handleDisplays )
        }

    }, [])

    return(
        <div>
            <h3>Ex:13</h3>
            <h4>Window dimemsions</h4>
            <div>Width: {size.w} px</div>
            <div>Height: {size.h} px</div>
        </div>
    );

}
export default WindowDimemsions;