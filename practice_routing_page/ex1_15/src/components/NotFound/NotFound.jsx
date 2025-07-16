import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div className=" flex flex-col items-center bg-white dark:bg-gray-900 mt-10">
            <h2 className="mb-4  text-center text-5xl tracking-tight font-extrabold lg:text-3xl text-primary-600 dark:text-primary-500">404 - Page not found</h2>
            <p className="mb-4 text-center text-lg font-light text-gray-500 dark:text-gray-400">Sorry page not found</p>
           <Link to="/"> <button className=" bg-violet-500 hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white font-semibold px-6 py-2 rounded">Back to HomePage</button> </Link> 
        </div>
    );

}
export default NotFound;