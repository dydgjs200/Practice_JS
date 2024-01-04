import { useState } from "react";

function HandlerEx4() {
  const [color, setColor] = useState(["black", "orange", "blue"]);
  const [selectColor, setSelectColor] = useState(color[0]);
  const [backColor, setBackColor] = useState(color[0]);
  const [img, setImg] = useState(["apple", "orange", "watermelon"]);
  const [selectImg, setSelectImg] = useState(img[0]);

  const [text, setText] = useState("");

  const changeImg = (event) => {
    setSelectImg(event.target.value);
  };
  const changeColor = (event) => {
    setSelectColor(event.target.value);
  };
  const changeBack = (event) => {
    setBackColor(event.target.value);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="selectBox">
        과일 :{" "}
        <select onChange={changeImg}>
          <option value={img[0]}>apple</option>
          <option value={img[1]}>orange</option>
          <option value={img[2]}>watermelon</option>
        </select>
        글자색 :{" "}
        <select onChange={changeColor}>
          <option value={color[0]}>black</option>
          <option value={color[1]}>orange</option>
          <option value={color[2]}>blue</option>
        </select>
        배경색 :{" "}
        <select onChange={changeBack}>
          <option value={color[0]}>black</option>
          <option value={color[1]}>orange</option>
          <option value={color[2]}>blue</option>
        </select>
        내용 :{" "}
        <input
          type="text"
          placeholder="과일 입력"
          onChange={changeText}
        ></input>
      </div>
      <br></br>
      <img
        className="imgBox"
        src={`${process.env.PUBLIC_URL}/img/${selectImg}.jpg`}
        alt={`Fruit ${img}`}
      ></img>
      <p
        className="textInput"
        style={{ color: selectColor, backgroundColor: backColor }}
      >
        {text}
      </p>
    </div>
  );
}

export default HandlerEx4;
