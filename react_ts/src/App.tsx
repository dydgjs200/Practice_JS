import React from "react";
import Student from "./component/Student";
import TodoList from "./component/TodoList";

function App() {
  const handleClick = (name: string, grade: number) => {
    alert(`학생 이름 ${name} 학년 ${grade}`);
  };
  return (
    <div className="App">
      <Student name="yong" grade={3} subject="math" handleClick={handleClick} />
      <Student name="yong" grade={3} handleClick={handleClick} />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
