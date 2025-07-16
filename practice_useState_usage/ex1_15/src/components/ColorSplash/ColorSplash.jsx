import { useEffect } from "react";
function ColorSplash(){
    useEffect(() => {
        const colors = ["red", "green", "blue", "purple", "orange"];
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        
        document.body.style.backgroundColor = randomColor;
        

    },[]);
    return(
        <div>Background color changed</div>
    );
}
export default ColorSplash;
