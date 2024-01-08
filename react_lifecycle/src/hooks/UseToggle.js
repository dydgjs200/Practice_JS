import { useState } from "react";

function UseToggle(initValue = false) {
  // setValue = 토글 상태 변화 setter
  const [value, setValue] = useState(initValue);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

export default UseToggle;
