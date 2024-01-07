import React, { useEffect, useMemo, useRef, useState } from "react";

function Counter() {
  const [cnt, setCnt] = useState(0);
  // 여러개의 ref를 관리하려면 객체로 하자
  const inputRef = {
    input1: useRef(),
    input2: useRef(),
  };

  useEffect(() => {
    // 렌더링 후 실행
    console.log("Counter > ", cnt);

    // cnt 값이 update 할 때 focus
    return () => {
      if (cnt >= 5) {
        setCnt(0);
        inputRef.input1.current.focus();
      }
    };
  }, [cnt]);

  const incresement = () => {
    setCnt(cnt + 1);
  };

  const keyDownEnter = (event) => {
    if (event.key === "Enter") {
      inputRef.input1.current.focus();
    }
  };

  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={incresement}>버튼</button>

      <hr />

      <input type="text" ref={inputRef.input1} placeholder="number1"></input>
      <input
        type="text"
        ref={inputRef.input2}
        onKeyDown={keyDownEnter}
        placeholder="number2"
      ></input>
      <button type="button">제출</button>
    </div>
  );
}

export default Counter;
