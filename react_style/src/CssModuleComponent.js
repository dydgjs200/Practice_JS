// CssModule
// - 클래스명 중복 방지
// - css 파일 확장 : .module.css
// 리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때 css 파일에 선언한 클래스 이름들이 모두 고유해짐
import style from "../src/styles/CssModuleComponent.css";

function CssModuleComponent() {
  console.log(style);
  return (
    <>
      <div className={style.container}></div>
    </>
  );
}

export default CssModuleComponent;
