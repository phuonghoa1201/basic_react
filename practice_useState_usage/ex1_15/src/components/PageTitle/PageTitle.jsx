import { useEffect, useState } from "react";

function PageTitle(){
    const [text, setText] = useState("")
    useEffect(()=>{
            document.title = text || "Default Text";
    },[text])
    const handleChangeText = (e) =>{
            setText(e.target.value);
        }

return(
    <div>
        <h4>Ex4</h4>
        <input value={text} onChange={handleChangeText} placeholder="Please input"/>
    </div>
);

}
export default PageTitle;