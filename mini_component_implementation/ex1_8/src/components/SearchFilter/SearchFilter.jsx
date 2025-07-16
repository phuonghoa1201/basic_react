import { useState } from "react";
function SearchFilter(){
    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value);
    }

    const [items, setItems] = useState(['red', 'blue', 'orange', 'green'])

    const filteredItems = items.filter(item => item.toLowerCase().includes(text.toLowerCase()));

    return(
        <div>
            <h3> Ex8: Create a `SearchFilter` component </h3>
            <input value={text} onChange={handleText} placeholder="Search item you want to:"/>
            <ul>
            {filteredItems.map(item => 
                <li>{item}</li>
            )}
            </ul>
        </div>
    );

}
export default SearchFilter;