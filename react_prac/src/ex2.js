import React from "react";
// import "../App.css";
import book from "./1800.png";

const ex2 = ({ title, author, price, type }) => {
  return (
    <div className="all">
      <div className="best">이번주 베스트셀러</div>
      <img src={book} className="book_img"></img>
      <div className="title">책 이름</div>
      <div className="author">책 저자</div>
      <div className="price">1800</div>
      <div className="type">타입</div>
    </div>
  );
};

export default ex2;
