function login() {
  const form = document.forms["login"];
  console.log(form);

  axios({
    method: "post",
    url: "/login",
    data: {
      email: form.email.value,
      password: form.pw.value,
    },
  }).then((result) => {
    console.log("axios 전송 성공 > ", result);
  });
}
