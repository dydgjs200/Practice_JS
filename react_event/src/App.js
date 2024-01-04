import "./App.css";
import Synth from "./Synth";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import Handler from "./components/HandlerEx";
import HandlerEx2 from "./components/HandlerEx2";
import HandlerEx3 from "./components/HandlerEx3";
import HandlerEx4 from "./components/HandlerEx4";

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

      <hr></hr>
      <hr />
      <HandlerEx4></HandlerEx4>
    </div>
  );
}

export default App;
