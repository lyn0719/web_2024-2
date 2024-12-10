import { useState } from "react";
import contests from "./Data/contests";

function Contest() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="contest">
      {contests.map((contest, index) => (
        <button key={index} onClick={contentChange} value={index} className="btn">
          {contest.tab}
        </button>
      ))}
      {contests[index].content}
    </div>
  );
}

export default Contest;
