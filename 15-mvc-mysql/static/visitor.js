const tbody = document.querySelector("tbody");
const btnGroup = document.querySelector("#button-group");

// 폼의 등록 버튼 클릭시
// - 테이블에 데이터 추가
function createVisitor() {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름 또는 방명록 기입해주세요!");
    return;
  }

  // name 10글자 유효성 검사
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만입니다!");
    return;
  }

  axios({
    method: "POST",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);
    const data = res.data;

    const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button">삭제</button></td>
            </tr>
        `;
    // insertAdjacentHTML: 특정 요소에 html 추가
    tbody.insertAdjacentHTML("beforeend", html);
    form.reset();
  });
}

// 폼의 수정 버튼 클릭시
// form input에 값 넣기
// 변경 취소 버튼 보이기
function editVisitor(id) {
  // 1. form input 값 넣기 -> DB에서 값 받아서 넣기
  axios({
    method: "get",
    // 1). req.query 이용 -> url: `visitor?id=${id}` -> 인자로 받은 id 값에 대한 url query 생성(라우터에 등록 필요!)
    // url: `visitor?id=${id}`,

    // 2). req.params 이용 -> req.query로 서버에서 받으면 된다. (서버 경로는 /visitor임)
    // url: "/visitor",
    // params: {
    //   id: id,
    // },

    // 3). 서버에서 req.params로 받기 -> url은 /visitor/:id -> 라우터에서 경로 등록 필요
    url: `/visitor/${id}`,
  }).then((res) => {
    console.log("edit visitor get data > ", res.data);

    const { name, comment } = res.data;
    const form = document.forms["visitor-form"]; //폼 불러오기
    form.name.value = name;
    form.comment.value = comment;
  });

  //   2. 변경, 취소 버튼 보이기
  const html = `
    <button type="button" onclick = "editDo(${id})">변경</button>
    <button type="button" onclick = "editCancel()">취소</button>
  `;

  btnGroup.innerHTML = html;
}

// 수정 -> 변경 버튼 나오니까
// 변경 버튼 클릭시 데이터 변경
function editDo(id) {
  const form = document.forms["visitor-form"];

  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);

    const children = document.querySelector(`#tr_${id}`).children; //테이블 행을 하나 가져와서 그 내부자식을 선택
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;

    // 입력창 초기화
    editCancel();
  });
}

// 취소 -> input 초기화, 등록 버튼 보이기
function editCancel() {
  const form = document.forms["visitor-form"];
  form.reset();

  //등록 버튼 보이기
  const html = `<button type="button" onclick = "createVisitor">등록</button>`;
  btnGroup.innerHTML = html;
}

function editCancel() {
  const form = document.forms["visitor-form"];
  // input 초기화
  form.reset();

  // 등록 버튼 보이기
  const html = `<button type="button" onclick="createVisitor()">등록</button>`;
  btnGroup.innerHTML = html;
}

// 삭제 버튼 클릭시
// - DB에 삭제
// - 테이블(EJS)에서 해당 행 삭제
function deleteVisitor(obj, id) {
  console.log("obj >", obj); // button 태그

  // console.log(confirm("정말 삭제하시겠습니까?"));
  if (!confirm("정말 삭제하시겠습니까?")) return;

  axios({
    method: "DELETE",
    url: "/visitor",
    data: {
      id: id,
    },
  }).then((res) => {
    console.log(res.data);

    // 직접 접근
    obj.parentElement.parentElement.remove();
    // closest()을 통한 접근
    obj.closest(`#tr_${id}`).remove();
  });
}
