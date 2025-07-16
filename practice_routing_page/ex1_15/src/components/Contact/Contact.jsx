import { useState } from "react";
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    }
    return (
        <div className=" flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-30">
                <h1 className="text-center text-violet-900 text-3xl">Contact Me </h1>
                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" value={name} htmlFor="username">
                        Name
                    </label>
                    <input onChange={handleChangeName} className="shadow appearance-none border border-violet-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input onChange={handleChangeEmail} value={email} className="shadow appearance-none border border-violet-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Message:
                </label>
                <textarea placeholder="Message:" onChange={handleChangeMessage} value={message} className="shadow appearance-none border border-violet-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>

                <div className="flex items-center justify-center">
                    <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <div className="text-center text-gray-500 text-xs mb-4">
                <footer className="text-center text-gray-500 text-xs">
                    &copy;Email: 1234@gmail.com
                </footer>

            </div>


        </div>

    );

}
export default Contact;