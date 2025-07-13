import { useState } from "react";
function ListContainer({showList, items}){

    return(
        <div>
            <h2>Conditional Rendering</h2>
            {showList &&
            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>

                ))}

            </ul>}

        </div>

    );
}
export default ListContainer;