import "./App.css";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
import CounterFunc from "./CounterFunc";
import StateEx1 from "./StateEx1";
import StateEx2 from "./StateEx2";

function App() {
  return (
    <div className="App">
      <Counter></Counter>

      <hr></hr>
      <SayFunction></SayFunction>
      <CounterFunc></CounterFunc>

      <hr></hr>
      <StateEx1></StateEx1>

      <hr></hr>
      <StateEx2></StateEx2>
    </div>
  );
}

export default App;
