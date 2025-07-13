import './ShoppingCart.css'

import { useState } from "react";
function ShoppingCart(){
    const[items, setItems]= useState([
        {
            id: 1,
            name: "Books"
        },
         {
            id: 2,
            name: "SeaShell"
        },
    ])

    const [newProductName, setNewProductName] = useState(" ")

    const handleAddProduct = () => {
        if(newProductName.trim() === " ") return;

        const newProduct = {
            id: Date.now(),
            name: newProductName.trim()
        }
        setItems(prevProduct => [...prevProduct, newProduct])
        setNewProductName("")
    }

    const handleDeleteProduct = (id) => {
        setItems(prevItems =>prevItems.filter(items=>items.id !== id) )

    }
    return(
        <div className="productCard">
            <ul className="itemProduct">
                {items.map(item=>(
                    <li key={item.id} className='liItem'><span>{item.name} </span>  <button className="btnDelete" onClick={()=>handleDeleteProduct(item.id)}>Delete</button></li>
                )
                )}
            </ul>
            <div className='addContainer'>
            <input className="inputProduct" type="text" placeholder="Enter item you want to add" value={newProductName} onChange={e => setNewProductName(e.target.value)}/>
            <button className="btnAdd" onClick={handleAddProduct}>Add Product</button>
          
            </div>
        </div>
    );
}
export default ShoppingCart;
