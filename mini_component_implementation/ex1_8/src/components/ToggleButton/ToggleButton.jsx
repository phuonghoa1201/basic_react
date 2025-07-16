import { useState } from "react";
import './ToggleButton.css'
function ToggleButton(){
    const[label, setLabel] = useState('ON')

    const handleClick = () => {
        setLabel(prevClick => (prevClick === 'ON' ? 'OFF' : 'ON'))
    }

    return(
        <div>
        <h3> Ex1: Create a `ToggleButton` component</h3>
        <button className={label === 'ON' ? 'on' : 'off'} onClick={handleClick}>{label}</button>
        </div>
    );
}
export default ToggleButton;