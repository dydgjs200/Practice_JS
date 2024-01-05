import { useRef } from "react";

const RefFUnc1 = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default RefFUnc1;
