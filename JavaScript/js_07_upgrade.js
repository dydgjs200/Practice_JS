// 배열 구조분해 할당 -> 순서 중요
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c"];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);
const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); // -> a,b,c,undif

const list = ["apple", "orange"];
const [f1, f2, f3 = "peach"] = list;
console.log(f1, f2, f3); //>apple, orange, peach

let num1 = 1,
  num2 = 3;
[num1, num2] = [num2, num1]; //swap value
console.log(num1, num2);

// 객체 구조분해 할당
// -> 키, 변수명이 일치
const obj = {
  title: "a",
  star: 1,
  content: "don't see",
};

const { content, star, title, price = 8000 } = obj; //자동으로 key값과 일치하는 것에 대응함
console.log(content, star, title, price);

// 콜론을 이용해서 새 변수명으로 바꿔 저장 가능
const { content: c, star: s, title: t } = obj;
console.log(c, s, t);

// -----------예시
const info = {
  name: "kdt",
  time: "09~14",
  content: "i'm hungry",
};
function getInfo(lect) {
  const { name: n, time: t, content: c } = lect;

  return [n, c, t];
}
const result = getInfo(info);
console.log(result);

// spread 연산자 -> 압축을 품
const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c"];
const spread = [...array1, ...array2];
console.log(spread, spread[spread.length - 1]);

// 문자열에서 spread -> 한글자씩 split
const str = "Hello world!";
console.log(...str);
console.log(str.split(""));

// 객체에서 spread
const chip = {
  base: "chip",
  company: "orion",
};

const potatoChip = {
  ...chip,
  flavor: "onion",
};

const sweetPotatoChip = {
  ...chip,
  ...potatoChip,
  cost: 1000,
  base: "cookie", //나중에 갱신된 값이 출력
};
console.log(sweetPotatoChip);

// 실습 spread
const word1 = "abc";
const word2 = "xyz";
console.log([...word1, ...word2]);

// rest 연산자
// 1. 함수에서 rest -> a,b는 대응되며 rest는 나머지를 출력
const values = [1, 2, 3, 4, 5];

function get(a, b, ...rest) {
  console.log("a > ", a);
  console.log("b > ", b);
  console.log("rest > ", rest);
}

//함수 호출 시 spread 사용
get(...values);
get(values); //이 경우 values = a로 모두 대응되며 b=undif, rest=[]

//2. 객체에서 rest
// const icecream = {
//   flavor: "choco",
//   price: 1000,
//   company: "bingre",
// };

// let { flavor, ...rest } = icecream;
// console.log(flavor, rest);

//3. 배열에서 rest
let number = [1, 2, 3, 4, 5];
let [o, tw, ...rest] = number;
console.log(rest);
