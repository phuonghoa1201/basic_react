import { useState } from "react";
function HoverBox(){

    const [text, setText] = useState('withoutHover')

    const handleMouseEnter = () =>{
        setText('withHover')
    }

    const handleMouseLeave = () =>{
        setText('withoutHover')
    }

    return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      style={{ padding: '20px', border: '1px solid black', width: '200px', textAlign: 'center' }}
    >
      {text}
    </div>
  );
}
export default HoverBox;



