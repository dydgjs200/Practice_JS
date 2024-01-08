import UseToggle from "./hooks/UseToggle";

function Faq() {
  const [isFaqOpen, setIsFaqOpen] = UseToggle();
  console.log("isFaqOpen", UseToggle());
  return (
    <>
      <h1>custom hook Use Toggle</h1>
      <div onClick={setIsFaqOpen}>Q. 리액트에서 커스텀 훅 만들 수 있나?</div>
      {isFaqOpen && <div>A. 가능합니다.</div>}
    </>
  );
}

export default Faq;
