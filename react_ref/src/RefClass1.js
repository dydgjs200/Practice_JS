import React, { Component } from "react";

class RefClass1 extends Component {
  handleFocus = () => {
    console.log(this);
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>클래스 컴포넌트 - 버튼 클릭 시 input에 focus 처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        ></input>
        <button onClick={this.handleFocus}>버툰</button>
      </>
    );
  }
}

export default RefClass1;
