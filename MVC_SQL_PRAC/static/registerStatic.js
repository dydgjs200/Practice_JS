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
      <p> id : ${data.id}</p>
      <p> userid : ${data.userid}</p>
      <p> name : ${data.name}</p>
      <p> pw : ${data.pw}</p>
      <button type="button" onclick="DeleteRegister('<%= data.userid%>');">삭제하기</button>
      <button type="button" onclick = "UpdateRegister(this)">수정하기</button>
    </div>
  `;
    const userBox = document.querySelector(".userBox");
    userBox.insertAdjacentHTML("beforeend", html);
    form.reset();
  });
}

// 웹상에서만 제거되므로 axios를 통해 값 전송 필요
function DeleteRegister(userid) {
  axios({
    method: "DELETE",
    url: "/register",
    data: {
      userid: userid,
    },
  }).then((res) => {
    console.log(res.data);

    // userBox는 db length
    // userBox[i].child는 해당 디비 순번의 아래 p태그들
    const userBox = document.querySelectorAll(".userBox > .userInfoBox");

    for (let i = 0; i < userBox.length; i++) {
      const useridTag = userBox[i].children[1].textContent;
      const useridText = useridTag.split(" : ")[1];

      console.log(userid);
      console.log(useridText);

      if (useridText == userid) {
        console.log("true");
        userBox[i].style.display = "none";
        break;
      }
    }
  });
}

function UpdateRegister(obj) {
  const form = document.forms["register-form"];
  form.userid.textContent = obj.userid;

  console.log("obj > ", obj);
  console.log("userid > ", obj.userid);
}
