// 폼 데이터 /login post로 전송
function loginUser() {
  const form = document.forms["login-field"];

  axios({
    method: "post",
    url: "/login",
    data: {
      id: form.id.value,
      password: form.password.value,
    },
  }).then((result) => {
    console.log("form data result access > ", result.data);

    // object가 아닐 시, 토큰값이 아닌 경고 메시지가 들어옴
    if (typeof result.data === "object") {
      //const { userId, AccessToken, RefreshToken } = result.data;
      document.location.href = "/board";
    } else {
      alert(result.data);
      form.reset();
    }
  });
}

function registerUser() {
  const regiForm = document.forms["register-field"];

  axios({
    method: "post",
    url: "/register",
    data: {
      id: regiForm.reg_id.value,
      password: regiForm.reg_password.value,
    },
  }).then((res) => {
    alert("회원가입 성공");

    console.log("해시된 비밀번호 값 > ", res);
    document.location.href = "/login";
  });
}
