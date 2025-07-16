import { useEffect, useState } from "react";

function MirrorInputs(){
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const handleTextChange1 = (e) =>{
        setText1(e.target.value);
    }
     const handleTextChange2 = (e) =>{
        setText2(e.target.value);
    }

    useEffect(() => {
        if(text2 !== text1)
            setText2(text1)
    }, [text1]);

    useEffect(() => {
        if(text1 !== text2)
            setText1(text2)
    },[text2])
    return(
        <div>
            <h3>Ex7</h3>
            <input onChange={handleTextChange1} value={text1} placeholder="Input 1"
            />
            <input onChange={handleTextChange2} value={text2} placeholder="Input 2"/>
        </div>
    );
}
export default MirrorInputs;