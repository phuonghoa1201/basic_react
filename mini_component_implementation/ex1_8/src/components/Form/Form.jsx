import { useState } from "react";
import './Form.css'
function Form(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({name, email})
        alert("Summit successfully!")

    }
    return(
        <div>
            <h3>Ex5 Form components</h3>
            <form onSubmit={handleSubmit} className="formContainer">
            <h4 className="textForm">Fill in the Form</h4>
            <input className="inputText" value={name} onChange={handleChangeName} placeholder="Please enter your name: "/>
            <br></br>
            <input  className="inputText" value={email} onChange={handleChangeEmail} placeholder="Please enter your email: "/>
            <br></br>
            <button className="sendBtn">Send</button>
            </form>

        </div>
    );
}
export default Form;