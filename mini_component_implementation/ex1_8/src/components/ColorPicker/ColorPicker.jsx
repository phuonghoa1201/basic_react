import { useState } from "react";
import './ColorPicker.css'
function ColorPicker(){
   const colors = ['red', 'blue', 'orange', 'green'];

   const [currentIndex, setCurrentIndex] = useState(0);

   const handleChangeColor = () =>{
    setCurrentIndex(prevIndex =>(prevIndex + 1) % colors.length)

   }
   return(
    <>
    <h3>Ex4 : Change background Color</h3>
    <div className={colors[currentIndex]}> 
        <button className="colorBtn" onClick={handleChangeColor}>Change to color : {colors[currentIndex]} </button>
    </div>
    </>
   );
}
export default ColorPicker;
   

