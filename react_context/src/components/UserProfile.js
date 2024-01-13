import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
  // useContext 사용해서 context 값을 쓸 수 있음
  useContext(UserContext);
  return <></>;
}

export default UserProfile;
