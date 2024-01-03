import React, { useState } from "react";

function HandlerEx2() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  const changeText = (type) => {
    if (type == 1) {
      setText("빨간색 글씨");
      setColor("red");
    } else if (type == 2) {
      setText("파란색 글씨");
      setColor("blue");
    }
  };
  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={() => changeText(1)}>빨간색</button>
      <button onClick={() => changeText(2)}>빨간색</button>
    </div>
  );
}

export default HandlerEx2;
