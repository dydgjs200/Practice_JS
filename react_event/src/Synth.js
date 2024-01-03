function Synth() {
  const syn = (e) => {
    console.log("dd > ", e);

    // e 객체는 syntheticEvent (합성이벤트 -> 리액트가 dom이 아닌 virtual dom을 사용하는 것처럼 nativeEvent를 감싼 syntheticEvent 사용)
    // onClick, onChange 같은 것은 리액트의 고유 이벤트 객체이다.
    // 이벤트 종료 시, 초기화 되어 정보 참조가 불가능
  };

  const printInputValue = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button onClick={syn}>Synth event console</button>
      <input type="text" onChange={printInputValue}></input>
    </div>
  );
}

export default Synth;
