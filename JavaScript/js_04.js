var date = new Date();

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay()); //일요일 0 ~ 토요일 5
console.log(date);

console.log(typeof date);

console.log(
  `현재 시각 ${date.getFullYear()} 년 ${
    date.getMonth() + 1
  } 월 ${date.getDate()} 일 입니다.`
);

//현재 평일인지 주말인지 판단하기.
var day = date.getDay();

switch (day) {
  case 0 || 6:
    console.log("주말");
    break;
  default:
    console.log("평일");
}

// 1 <= x <101
var num = Math.random() * 100 + 1;
console.log(parseInt(num));

//DOM API
let dom1 = document.getElementById("green");
console.log(dom1);

let dom2 = document.getElementsByClassName("box");
console.log(dom2);
for (var i = 0; i < dom2.length; i++) {
  console.log(dom2[i]);
}

let dom3 = document.getElementsByTagName("div");
console.log(dom3);

let dom4 = document.getElementsByName("username");
console.log(dom4);

//DOM 요소 다루기
let parent = document.getElementById("parent");
console.log(parent);
let parentChildren = parent.children;
let parentChildNodes = parent.childNodes;

console.log("children : ", parentChildren);
console.log("children : ", parentChildNodes.parentChildren);
console.log("childNodes : ", parentChildNodes);

// 자식 추가 (추가할 부모 선택 -> 자식 만들기 -> 자식 붙이기)
let child1 = document.createElement("div");
child1.innerText = "네번째 텍스트";
parent.appendChild(child1);

//문자열(요소) 삽입
let two = document.getElementById("two");
two.innerHTML = "<strong>강조</strong>";
two.textContent =
  "       text Content<strong>태그 강조</strong>.    ^^&      221";
two.innerText = "m    kddd    zbbbf";

//ClassList
let greenBox = document.getElementById("green");
function addClass() {
  greenBox.classList.add("box1");
  console.log(greenBox.classList);
}
function removeClass() {
  greenBox.classList.remove("box1");
}
// 해당 클래스가 포함되어있는지 확인
function containClass() {
  console.log(greenBox.classList.contains("box1"));
}
// 클래스 존재 시 제거, 없으면 추가
function toggleClass() {
  greenBox.classList.toggle("d-none");
}

//요소 속성추가
let inputElement = document.getElementById(".box");
inputElement.style = "background-color: red";
