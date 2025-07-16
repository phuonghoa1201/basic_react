import { useState } from "react";
function InputDisplay(){
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }
    return(
        <div>
            <h3> Ex3: Design an `InputDisplay` component </h3>
            <textarea value={text} onChange={handleChange}/>
            <h4>Your comment : {text}</h4>
        </div>
    );
    

}
export default InputDisplay;