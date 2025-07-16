import Card from "../Card/Card.jsx";


function Projects(){
      const cards = [
        { id: 1, title: "Project 1", description: "Short description 1. Short description 1." },
        { id: 2, title: "Project 2", description: "Short description 2. Short description 1." },
        { id: 3, title: "Project 3", description: "Short description 3. Short description 1." },
        { id: 4, title: "Project 4", description: "Short description 4. Short description 1." },
    ]
    return(
        <div className="max-w-6xl mx-auto p-6 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10">My Projects</h2>
            <Card cards={cards}/>
        </div>
    );
}
export default Projects;