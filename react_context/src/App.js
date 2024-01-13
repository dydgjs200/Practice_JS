import { createContext } from "react";

function App() {
  const MyContext = createContext("defaultValue");
  console.log(MyContext);
  return <div className="App"></div>;
}

export default App;
