function CreateRegister() {
  const form = document.forms["register-form"];
  const id = form.id.value;
  const userid = form.userid.value;
  const name = form.name.value;
  const pw = form.pw.value;

  console.log(id, userid, name, pw);

  // 정규표현식을 pw에 추가 예정
  const PW_pattern = new RegExp("[a-z]");
  console.log(PW_pattern.test(pw));

  if (userid.length == 0 || name.length == 0 || pw.length == 0) {
    alert("아이디, 이름, 비밀번호를 입력");
    return;
  }

  axios({
    method: "post",
    url: "/register",
    data: {
      id: id,
      userid: userid,
      name: name,
      pw: pw,
    },
  }).then((result) => {
    console.log("axios data > ", result.data);
    const data = result.data;

    const html = `
    <div class="userInfoBox">
      <p>${data.id}</p>
      <p>${data.userid}</p>
      <p>${data.name}</p>
      <p>${data.pw}</p>
    </div>
  `;
    const userBox = document.querySelector(".userBox");
    userBox.insertAdjacentHTML("beforeend", html);
    form.reset();
  });
}

function DeleteRegister() {
  const form = document.forms["register-form"];
  const id = form.id.value;

  const userBox = document.querySelectorAll(".userBox > .userInfoBox");
  console.log("userBox > ", userBox);
  // 삭제하는 박스가 몇번째인지 알아야함. -> 아이디 입력 시, 그에 맞는 박스 제거
  userBox.style.display = none;
}
