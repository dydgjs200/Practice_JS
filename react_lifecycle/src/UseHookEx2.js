import React, { useEffect, useMemo, useReducer, useState } from "react";

function UseHookEx2() {
  const [num, setNum] = useState([0, 0]);
  const [res, setRes] = useState(0);

  // num 원소가 하나라도 변경 시 곱셈 실행 -> 얘는 useEffect처럼 바로 적용된다..
  const mul = useMemo(() => {
    const res = num[0] * num[1];
    return setRes(res);
  }, [num]);

  const inputNumber = (index, value) => {
    // 직접 접근하지 않기 위해 changeNumber를 카피
    const changeNumber = [...num];
    changeNumber[index] = Number(value);
    // 입력받은 input의 순서 및 value를 set해줌
    setNum(changeNumber);
  };

  // reducer
  const reducer = (prevNumber, action) => {
    switch (action) {
      case "Plus":
        return prevNumber + 1;
      case "Minus":
        return prevNumber - 1;
      case "Mul":
        return prevNumber * 2;
      default:
        return prevNumber;
    }
  };
  // reducer는 먼저 정의하고 use해줘야함!!!!!!!
  const [redNum, setRedNum] = useReducer(reducer, 0);
  return (
    <div>
      <h1>연산 값 미리보기 : {res}</h1>
      <input
        type="text"
        placeholder="num1"
        onChange={(event) => {
          inputNumber(0, event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="num2"
        onChange={(event) => {
          inputNumber(1, event.target.value);
        }}
      ></input>

      <hr />
      <hr />

      <h1>{redNum}</h1>
      <button type="button" onClick={() => setRedNum("Plus")}>
        {" "}
        + 1
      </button>
      <button type="button" onClick={() => setRedNum("Minus")}>
        {" "}
        - 1
      </button>
      <button type="button" onClick={() => setRedNum("Mul")}>
        {" "}
        * 2
      </button>
    </div>
  );
}
export default UseHookEx2;
