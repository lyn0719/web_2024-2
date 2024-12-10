import { useState } from "react";
import careers from "./Data/careers";

function Carears() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="career">
      {careers.map((career, index) => (
        <button key={index} onClick={contentChange} value={index} className="btn">
          {career.tab}
        </button>
      ))}
      {careers[index].content}
    </div>
  );
}

export default Carears;
