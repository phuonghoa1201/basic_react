import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import LoadingSuccess from "../LoadingSuccess/LoadingSuccess";
import './DataLoader.css'
function DataLoader(){
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () =>{
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }
    return(
        <div className="dataLoader">
        {isLoading ? <LoadingSpinner/> : <LoadingSuccess/>}
        {isLoading? (
            <button className="completeBtn" onClick={finishLoading}>Complete Loading</button>):
            (<button className="reloadBtn" onClick={() => setIsLoading(true)}>Reaload</button>)
        }
        </div>
       
    );
}
export default DataLoader;