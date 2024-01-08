import { useForm } from "react-hook-form";

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("onValid", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름 입력",
            minLength: { message: "이름은 필수" },
          })}
        />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username.message}</div>
        )}
        <input
          type="text"
          placeholder="나이"
          {...register("age", {
            validate: {
              useNumber: (v) =>
                Number(v) >= 0 || "0이상의 숫자만 입력 가능합니다.",
            },
          })}
        />
        {errors.age && <div style={{ color: "red" }}>{errors.age.message}</div>}
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default UserForm;
