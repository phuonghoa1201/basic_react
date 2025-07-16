import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>}/>
         <Route path="/projects/:id" element={<ProjectDetails />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
