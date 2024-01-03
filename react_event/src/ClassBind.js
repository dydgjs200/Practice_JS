import React, { useState, Component } from "react";

class ClassBind extends Component {
  state = {
    name: "yong",
  };

  // 이벤트 사용 - 화살표 함수
  printConsole = () => {
    console.log("this", this);
    console.log("state", this.state);
  };

  // 이벤트 사용 - 매개변수 전달 시
  printConsole3 = (msg) => {
    console.log("msg", msg);
  };

  // 이벤트 사용 - 바인드
  printConsole2 = () => {
    console.log("this", this);
    console.log("state", this.state);
  };

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <button onClick={this.printConsole}>printConsole</button>
        <button onClick={this.printConsole2.bind(this)}>printConsole2</button>
        <button onClick={() => this.printConsole3("hello")}>
          printConsole3
        </button>
      </div>
    );
  }
}

export default ClassBind;
