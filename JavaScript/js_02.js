// 함수 선언문
function a() {
  return 1;
}

//함수 표현식
let b = function () {
  return 2;
};

//화살표 함수
let c = () => {
  return 3;
};

//assign#1
function multifly(a, b) {
  return a * b;
}
console.log(multifly(3, 7));

// //assign#2
// let width = prompt("한 변을 입력하시오");
// let square = function (w) {
//   return w ** 2;
// };
// console.log(square(Number(width)));

//assign#3
function add(a, b) {
  return alert(a + b);
}
function sub(a, b) {
  return alert(Math.abs(a - b));
}
function divide(a, b) {
  return alert(a * b);
}
function mul(a, b) {
  return alert(a / b);
}

//assign#4
// let age = Number(prompt("나이 입력"));
// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else {
//   console.log("유아");
// }

// // //assign#5
// let age = Number(prompt("나이 입력"));
// let gender = prompt("성별 입력(남자/여자)");

// if (age >= 20) {
//   genderString = gender == "남자" ? "남자" : "여자";
//   console.log("성인 " + genderString);
// } else if (age >= 17) {
//   genderString = gender == "남자" ? "남학생" : "여학생";
//   console.log("고등 " + genderString);
// } else if (age >= 14) {
//   genderString = gender == "남자" ? "남학생" : "여학생";
//   console.log("중등 " + genderString);
// } else if (age >= 8) {
//   genderString = gender == "남자" ? "남학생" : "여학생";
//   console.log("초등 " + genderString);
// } else {
//   console.log("유아 ");
// }

//assign#6
let now = new Date().getHours();
now < 13 ? console.log("오전") : console.log("오후");

// //assign#7
// let res = [];
// let lastNumber = Number(prompt("제한 숫자 입력"));
// for (let i = 1; i <= 10000; i++) {
//   if (i % 2 == 1 && i % 13 == 0) {
//     if (i > lastNumber) {
//       break;
//     }
//     res.push(i);
//   }
// }
// console.log(res);

//assign#8
for (let i = 1; i < 10; i++) {
  console.log(`--- ${i} 단 ---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//assign#9
let n = Number(prompt("제한 숫자"));
let pos = 1;
let sum = 0;

while (pos <= n) {
  if (pos % 2 == 0 || pos % 3 == 0) {
    sum += pos;
  }
  pos++;
}
console.log(sum);
