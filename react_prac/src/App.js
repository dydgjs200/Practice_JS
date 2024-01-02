import "./App.css";
import { useState } from "react";

function App() {
  // 서버에서 가져온 데이터라고 가정함.
  let post = "강남 우동 맛집";
  // useState는 변수를 잠깐 담아놓는 그릇같은거 a=쓸때 사용, b=state 변경할 때 사용
  // useState를 쓰는 이유 = 일반 변수는 변경될 시 코드 수정 필요, useState는 변경될 시 자동 렌더링
  // 즉, useState를 쓰는 궁극적 이유는 변수가 변경 시 자동으로 html에 반영되게 하려고
  // 자주 변경될 거 같은애들을 useState로 선언해라. (ex. 날짜, 글 제목 등)
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  const [isModalOpen, setModal] = useState([false]);

  return (
    // return 안에는 하나의 부모태그로 끝나야함.
    <div className="App">
      <div className="black-nav">
        {/* 인라인 스타일 기입 시, object이므로 중괄호 필요 */}
        {/* font-size는 '-'가 뺄셈 기호이므로 fontSize로 써줘야함 */}
        <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          // 기존 state가 array/obj면 독립적 카피본을 만들어서 수정해야함.
          // spread ...을 사용하는 이유는 새로운 메모리 주소로 할당해야하기 때문임. (만약 사용하지 않는다면 let copy = 글제목의 경우 같은 메모리를 참조함)
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글 수정
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        글 제목 정렬하기(가나다 순)
      </button>

      <div className="list">
        <h4>
          {/* 변수는 중괄호 => 데이터 바인딩 */}
          {글제목[0]}
          {/* state는 변경함수로 변경해야함(변경함수 괄호 안에 state) */}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>2월 17일 발행</p>
        <button
          onClick={() => {
            // 모달이 이미 켜졌는지 확인 필요 -> conversion 해줌
            setModal(!isModalOpen);
          }}
        >
          세부 내용
        </button>
        {/* isModalOpen이 true일 경우 Modal 컴포넌트 생성 */}
        {isModalOpen && <Modal></Modal>}
      </div>

      <div className="list">
        <h4>
          {글제목[1]}
          {/* state는 변경함수로 변경해야함(변경함수 괄호 안에 state) */}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {/* 컴포넌트를 쓰는 이유 
      1. 반복적 html
      2. 큰 페이지를 컴포넌트로
      3. 자주 변경되는 것들
      */}
      {/* <Modal></Modal> */}
    </div>
  );
}

// 컴포넌트 관례 : 다른 function 바깥 위치, 영어 대문자 시작
// 1. function 만들기
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기
// 굳이 병렬적 부모태그를 만들어야한다면, <> </> fragment 문법으로 감싸서 사용
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>제목</p>
    </div>
  );
}

export default App;
