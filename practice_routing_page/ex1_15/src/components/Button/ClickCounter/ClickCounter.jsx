import { useState } from "react";
import { Link } from "react-router-dom";

function ClickCounter() {
    const [count, setCount] = useState(0)

    const handleClickCount = () => {
        setCount(c => c + 1)
    }

    return (
        <div>
        <Link to="/about">
        <button  onClick={handleClickCount} className="bg-violet-500 hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white font-semibold px-6 py-2 rounded">
            Call to Action
        </button>
        </Link>
        
        <p className="mt-2 text-sm text-gray-600">You have clicked: {count}</p>
        </div>
    );


}
export default ClickCounter;