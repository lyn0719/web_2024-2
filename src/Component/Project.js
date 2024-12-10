import { useState } from "react";
import projects from "./Data/projects";

function Project() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="project">
      {projects.map((project, index) => (
        <button key={index}  onClick={contentChange} value={index} className="btn">
          {project.tab}
        </button>
      ))}

      {projects[index].content}
    </div>
  );
}

export default Project;
