// math 모듈 불러오기 1
// const math = require("./math.js");
// console.log(math.add(3, 2));
// console.log(math.sub(4, 20));

// math 모듈 불러오기 2 구조분해 -> 불러오는 이름이 동일해야함
// const { add, sub, PI, E } = require("./math.js");
// console.log(add(32, 460));

const cookie = {
  choco: "choco",
  vanilla: "vanilla",
  mint: "mint",
};

// 모듈 불러오기 package.json에 type module 추가
import { add, sub } from "./math.js";
console.log(add(3, 56));

// 구조분해 연습 1
const { mint, choco, vanilla } = cookie; //동일 파일 내에 있을 시 require할 필요 없음
console.log(mint, choco, vanilla);

//구조분해 연습 2 -> 배열은 인덱스로 대응
const arr = ["first", "second"];
const [a, b] = arr;
console.log(a, b);
