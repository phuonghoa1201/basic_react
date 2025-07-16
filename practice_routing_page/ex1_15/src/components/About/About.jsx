import ShowSkills from "../Button/ShowSkills/ShowSkills.jsx";
import { NavLink } from "react-router-dom";
function About() {
    return (
        <section className="flex justify-center items-center h-screen flex-col">
            <h2 className="text-4xl md:text-5xl font-bold">About me</h2>
            <p className=" mt-3 text-gray-700 text-center w-[700px] mb-3 "> I love creating clean and efficient code, constantly learning new technologies to improve my skills.
                My goal is to build web applications that provide great user experiences and solve real-world problems.
                Outside of coding, I enjoy reading tech blogs and exploring new programming languages.</p>

            <ShowSkills />
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    `px-4 py-2 mt-4 transition-colors duration-300 
    ${isActive
                        ? "bg-violet-700 text-white font-semibold"
                        : "bg-gray-200 text-gray-700 hover:bg-violet-600 hover:text-white"}`
                }
            >
                Go to Project
            </NavLink>


        </section>

    );
}
export default About;