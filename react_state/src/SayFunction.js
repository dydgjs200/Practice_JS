import React, { useState } from "react";

function SayFunction() {
  console.log(useState("welcome"));
  const [message, setMessage] = useState("");
  const input = () => {
    setMessage("입장");
  };
  const output = () => {
    setMessage("퇴장");
  };
  return (
    <div>
      <button onClick={input}>입장</button>
      <button onClick={output}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;
