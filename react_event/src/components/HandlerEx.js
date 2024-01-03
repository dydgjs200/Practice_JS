import React, { useState, Component } from "react";

class HandlerEx extends Component {
  state = {
    str: "hello world",
  };
  render() {
    return (
      <div>
        <h1>{this.state.str}</h1>
        <button
          onClick={() => {
            this.setState({ str: "goodbye" });
          }}
        >
          Handler 버튼
        </button>
      </div>
    );
  }
}

export default HandlerEx;
