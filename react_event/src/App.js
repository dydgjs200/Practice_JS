import "./App.css";
import Synth from "./Synth";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import Handler from "./components/HandlerEx";
import HandlerEx2 from "./components/HandlerEx2";
import HandlerEx3 from "./components/HandlerEx3";

function App() {
  return (
    <div>
      <Synth></Synth>

      <hr />

      <ClassBind></ClassBind>

      <hr />

      <Counter></Counter>

      <hr />

      <Handler></Handler>

      <hr />
      <HandlerEx2></HandlerEx2>

      <hr />
      <HandlerEx3></HandlerEx3>
    </div>
  );
}

export default App;
