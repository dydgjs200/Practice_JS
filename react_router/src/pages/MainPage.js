import { useSearchParams } from "react-router-dom";

function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("Search >", searchParams.get("mode"));
  return (
    <div className={["Main", searchParams.get("mode")].join(" ")}>
      <h1>Main page</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: "Dark" });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default MainPage;
