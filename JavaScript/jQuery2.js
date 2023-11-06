function appendJS() {
  //DOM으로 추가하기
  //1 부모 ul 선택
  //2 추가할 자식 li 요소 만들기
  //3 li 요소에 내용 추가
  //4 ul에 자식 li 추가
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerText = "red";
  ul.append(li);
}
function appendjQuery() {
  //jQuery로 추가하기
  $("ul").append("<li>blue</li>");
}

function prependJS() {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerText = "prepend pink";
  ul.prepend(li);
}
function prependjQuery() {
  //jQuery로 추가하기
  $("ul").prepend("<li>prepend yellow</li>");
}

function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before JS";
  green.before(li);
}
function beforejQuery() {
  $(".green").before("<li>before jQuery</li>");
}
function afterJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after JS";
  green.after(li);
}
function afterjQuery() {
  $(".green").after("<li>after jQuery</li>");
}

// 요소 삭제
function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}
function removejQuery() {
  $("#li2").remove();
}
function emptyJS() {
  let nums = document.querySelector(".nums");
  //li.removeChild(매개변수);
  nums.innerHTML = "";
}
function emptyjQuery() {
  $(".nums").empty();
}

//요소 탐색
function findParent() {
  //부모 요소
  console.log($("#li2").parent());
}
function findParents() {
  //조상 요소
  console.log($("#li2").parents());
}
function findNext() {
  // == nextSibling
  console.log($("#li2").next());
  //인덱스로 접근 가능
  console.log($("#li2").next()[0]);
}
function findPrev() {
  // == previousSibling
  console.log($("#li2").prev());
}
function findChildren() {
  // 자식 요소 반환  == children
  console.log($(".nums").children());
}
