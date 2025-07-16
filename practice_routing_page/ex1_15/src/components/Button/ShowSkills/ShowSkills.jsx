import { useState } from "react";
function ShowSkills() {

    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="flex flex-col items-center gap-3 max-w-md mx-auto p-4">

            {show && <ul className="flex flex-wrap gap-4 mb-5">
                <li className="bg-violet-100 text-violet-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-violet-500 transition duration-300 cursor-pointer">Self-Study</li>
                <li className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-green-500 transition duration-300 cursor-pointer">Team Work</li>
                <li className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-orange-500 transition duration-300 cursor-pointer ">HTML, CSS</li>
                <li className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-500 transition duration-300 cursor-pointer ">React Basic</li>
                <li className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-orange-500 transition duration-300 cursor-pointer ">HTML, CSS</li>
                <li className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-500 transition duration-300 cursor-pointer ">React Basic</li>
            </ul>}



            <button className="bg-violet-500 hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white font-semibold px-6 py-2 rounded" onClick={handleShow}>{show ? 'Hide Skill' : 'Show Skill'}</button>
        </div>
    );
}
export default ShowSkills;