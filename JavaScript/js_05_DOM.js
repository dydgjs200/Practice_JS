let container = document.getElementById("container");
let greenBox = document.getElementById("green");
let redBox = document.getElementById("red");

console.log("children : ", container.children);

//parentNode 부모 요소를 가져옴
function getparent() {
  console.log(greenBox.parentNode);
}

// element를 기준으로 보여줌
function sibling() {
  console.log(redBox.previousElementSibling);
}
// element와 관련된 모든거를 보여줌
function prevSibling() {
  console.log(redBox.previousSibling);
}

// 요소 추가
let ul = document.querySelector("ul");
function createNode() {
  var li = document.createElement("li");
  li.innerText = "새로 추가된 리스트";
  console.log("li : ", li);
}
// 버튼 클릭 시 리스트에 항목이 추가.
function appendNode() {
  var li = document.createElement("li");
  li.innerText = "새로 추가된 리스트";

  console.log(ul);
  ul.append(li);
  ul.append("text");
}
function appendChildNode() {
  var li = document.createElement("li");
  li.innerText = "새로 추가된 리스트";

  console.log(ul);
  ul.appendChild(li);
  ul.appendChild("text"); //error : appendChild는 요소 노드만 추가 가능
}
function prepend() {
  var li = document.createElement("li");
  li.innerText = "새로 추가된 prepend child";

  let ul = document.querySelector("ul");
  ul.prepend(li);
}

function beforeNode() {
  let standard = document.getElementById("li"); //기준 요소 잡기
  var li = document.createElement("li");
  li.innerText = "새로 추가된 before";
  standard.before(li);
}

function removeNode() {
  let standard = document.getElementById("li");
  standard.remove();
}

function removeChildNode() {
  let ul = document.querySelector("ul");
  let standard = document.getElementById("li");
  ul.removeChild(standard);
}

/////////////// addEventListener
// function으로 콜백함수 e를 받는게 중요
let eventBox = document.querySelector(".eventBox");
let eventInput = document.querySelector(".eventInput");

eventBox.addEventListener("click", function () {
  alert("click!");
});
eventBox.addEventListener("mouseover", function (e) {
  console.log("e : ", e);
  e.currentTarget.style.backgroundColor = "blue";
});
eventBox.addEventListener("mouseout", function (e) {
  e.currentTarget.style.backgroundColor = "white";
});
eventInput.addEventListener("focus", function (e) {
  e.currentTarget.style.backgroundColor = "aqua";
});

//scroll(현재 홈페이지의 스크롤을 이용)
window.addEventListener("scroll", function () {
  console.log("scroll");
});
