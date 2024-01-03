import React, { useState } from "react";

function HandlerEx3() {
  const [display, setDisplay] = useState("block");
  const [btnText, setBtnText] = useState("사라져라");
  const [number, setNumber] = useState(1);
  const conversion = (type) => {
    setNumber(type + 1);
    console.log("type > ", type);
    if (type % 2 == 1) {
      setDisplay("none");
      setBtnText("보여라");
    } else {
      setDisplay("block");
      setBtnText("사라져라");
    }
  };
  return (
    <div>
      <h1 style={{ display: display }}>안녕하세요</h1>
      <button onClick={() => conversion(number)}>{btnText}</button>
    </div>
  );
}

export default HandlerEx3;
