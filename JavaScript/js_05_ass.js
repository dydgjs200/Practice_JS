let num = 0;

function calculator() {
  let a = Number(document.getElementById("value1").value);
  let b = Number(document.getElementById("value2").value);

  let oper = document.getElementById("oper").value;
  var num = 0;
  switch (oper) {
    case "+":
      num = a + b;
      break;
    case "-":
      num = a - b;
      break;
    case "/":
      num = a / b;
      break;
    case "*":
      num = a * b;
      break;
  }

  document.getElementById("res").value = num;
}

function reset() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("oper").value = "";
  document.getElementById("res").value = "";
}

////////////////////////

// number가 안올라가는거 처리하기
function writing() {
  var writer, content;
  var day = new Date();

  let days = [];
  days[0] = day.getFullYear();
  days[1] = day.getMonth();
  days[2] = day.getDate();
  days[3] = day.getHours();
  days[4] = day.getMinutes();
  var dayString = `${days[0]}-${days[1]}-${days[2]} ${days[3]} : ${days[4]}`;

  writer = document.getElementById("writer").value;
  content = document.getElementById("content").value;

  // // 테이블 추가하기 1번방법

  // const table = document.getElementById("table");
  // const newRow = table.insertRow();

  // const newCell1 = newRow.insertCell(0);
  // const newCell2 = newRow.insertCell(1);
  // const newCell3 = newRow.insertCell(2);
  // const newCell4 = newRow.insertCell(3);

  // num += 1;

  // newCell1.innerText = num;
  // newCell2.innerText = writer;
  // newCell3.innerText = content;
  // newCell4.innerText = dayString;

  // 테이블 추가하기 2번방법 ->table 선택 후 tr을 만들어줌 -> tr(garo) 밑에 appendChild로 자식으로 td를 4개 추가해줌. -> td안에는 innerText로 집어넣기
  let table = document.getElementById("table");
  let garo = document.createElement("tr");

  //td 만들기 4개
  let td = [];

  for (var i = 0; i < 4; i++) {
    td[i] = document.createElement("td");

    switch (i) {
      case 0:
        td[i].innerText = ++num;
        break;
      case 1:
        td[i].innerText = writer;
        break;
      case 2:
        td[i].innerText = content;
        break;
      case 3:
        td[i].innerText = dayString;
        break;
    }
  }

  //td 안의 내용 채우기

  table.appendChild(garo);
  for (var i = 0; i < td.length; i++) {
    garo.appendChild(td[i]);
  }
}
