import { useState,useEffect } from "react";

function ColorFlasher(){

    const colors = ['red', 'blue', 'orange', 'green'];

   const [colorIndex, setColorIndex] = useState(0);


   useEffect(() =>{
           console.log('useEffect Called!')
           const timer = setInterval(() =>{
               setColorIndex(s => (s + 1)  % colors.length)
           }, 1000);
       return () => {clearInterval(timer);
       console.log("ColorFlasher unmounted");
       };
   
       }, [])
       return(
           <div>
                <h3>Ex15: </h3> 
                <div 
                style={{
                width: "100px",
                height: "100px",
                backgroundColor: colors[colorIndex]
                }}
                 >
                {colors[colorIndex]}
                </div>
           </div>
          
       );
   

}
export default ColorFlasher;