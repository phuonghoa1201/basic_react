import { NavLink } from "react-router-dom";

function Card({cards}) {
  
    return (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className=" border-solid border border-gray-300 p-6 shadow-md hover:shadow-xl transition-shadow bg-white aspect-square flex flex-col"
                >
                    <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-700">{card.description}</p>
                    <div className="mt-auto">
                        <NavLink to={`${card.id}`} className={({ isActive }) => isActive ? "text-violet-700 underline font-semibold mt-auto" : "text-gray-700 hover:text-violet-700 hover:underline"}
                    ><button className="bg-violet-500  hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white font-semibold px-3 py-1 rounded" >View Detail</button></NavLink>
                    </div>
                    
                </div>
            ))}
        </div>


    );

}
export default Card;