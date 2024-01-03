import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`msg : ${msg}, number : ${number}`);
  };
  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`msg : ${msg}, number : ${number}`);
  };
  return (
    <div>
      <h1>function component</h1>
      <h2>{number}</h2>
      <button onClick={increase}>더하기</button>

      <hr></hr>
      <button onClick={() => alertMsg("hello")}>hello</button>
      <button onClick={(e) => consoleMsg(e, "hello")}>console hello</button>
    </div>
  );
}

export default Counter;
