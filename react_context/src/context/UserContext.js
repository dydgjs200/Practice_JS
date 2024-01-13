import { createContext } from "react";

const defaultUser = {
  name: "hong",
  setName: () => {}, //이름 변경함수
};

export const UserContext = createContext(defaultUser);
