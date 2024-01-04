import React, { useState } from "react";

function Alphabet() {
  const [alphabet, setAlphabet] = useState(["b", "a", "n", "a", "n", "a"]);

  return (
    <div>
      <ol>
        {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ol>
    </div>
  );
}

export default Alphabet;
