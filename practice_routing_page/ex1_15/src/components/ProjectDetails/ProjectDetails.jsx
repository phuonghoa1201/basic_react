import { useParams, Link } from "react-router-dom";

const cards = [
  { id: 1, title: "Project 1", description: "Short description 1. Short description 1." },
  { id: 2, title: "Project 2", description: "Short description 2. Short description 1." },
  { id: 3, title: "Project 3", description: "Short description 3. Short description 1." },
  { id: 4, title: "Project 4", description: "Short description 4. Short description 1." },
];

function ProjectDetails(){
    const { id } = useParams();
    const project = cards.find((p) =>p.id === parseInt(id));

if (!project) {
    return <div className="text-center text-red-500 mt-10">Project not found!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h2>
      <p className="text-gray-700 text-lg mb-6 text-center">{project.description}</p>
      <Link
        to="/projects"
        className="bg-violet-500 hover:bg-violet-700 text-white font-semibold px-4 py-2 rounded"
      >
        Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetails;