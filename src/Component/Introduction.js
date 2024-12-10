import { useState } from "react";
import intros from "./Data/intros";

function Introduction() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      {intros.map((intro, index) => (
        <button key={index} onClick={contentChange} value={index} className="btn">
          {intro.tab}
        </button>
      ))}
      <br /> <br />
      {intros[index].content}
    </div>
  );
}

export default Introduction;
