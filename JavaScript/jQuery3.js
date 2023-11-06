function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  //클래스 모두 제거
  $("#hi").removeClass();
  // fs-50 클래스만 제거
  // $("#hi").removeClass("fs-50");
}
function hasClass() {
  // true or false 반환
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  // 있으면 삭제, 없으면 추가
  $("#hi").toggleClass("bg-pink");
}
function switchClass() {
  $("#hi").switchClass("color-blue", "color-orange", 2);
}
