import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

  // defaultUser로 설정한 값 (name, setName)
  // 이름 변경을 위한 useState

  const [name, setName] = useState();
  return (
    // provider = 컴포넌트에 value 설정
    <UserContext.Provider value={{ name: name, setName: setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
