function setValue() {
  $("#input1").val("setting");
  // == document.getElementById("input1").value = "setting";
}

function getValue() {
  alert($("#input1").val());
}

function changeStyle() {
  $("span").css("font-size", "28px");
  $("span").css("background-color", "orange");
  //span요소.style = "font-size"
}

function changeAttr() {
  $("#input1").attr("placeholder", "input");
  //input요소.setAttribute('placeholder','input')
}

function changeText() {
  $("span").text("글자");
  //span요소.innerText
}

function changeHTML() {
  $("p").html("<h3>jQuery html</h3>");
  //p요소.innerHTML
}
