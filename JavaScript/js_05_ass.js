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
  var num = 1;
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

  console.log(day, writer);
  console.log(dayString);

  const table = document.getElementById("table");
  const newRow = table.insertRow();

  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  const newCell3 = newRow.insertCell(2);
  const newCell4 = newRow.insertCell(3);

  newCell1.innerText = num++;
  newCell2.innerText = writer;
  newCell3.innerText = content;
  newCell4.innerText = dayString;
}
