import { useForm } from "react-hook-form";

function Form() {
  // register = input tag에 할당 -> value 변경 감지 / handlesubmit = form submit 이벤트 호출 / watch = 특정 폼 필드 값을 실시간 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log("onValid", data);
  };
  const onInValid = (err) => {
    console.log("onInvalid", err);
  };
  return (
    <>
      <h1>react-hook-form 라이브러리</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        {/*  */}
        <input
          type="text"
          placeholder="user name"
          {...register("username", {
            required: "이름을 입력해라",
            minLength: { message: "이름 2글자 이상 입력", value: 2 },
          })}
        ></input>

        {/* 에러 메시지 */}
        {errors.username?.message}

        <br />

        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "이메일 입력해라",
            validate: {
              useGmail: (value) => {
                return value.includes("gmail.com") || "gmail로만 가입 가능함";
              },
            },
          })}
        ></input>
        {errors.email?.message}
        <br />

        <input type="text" placeholder="password" {...register("password")} />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form;
