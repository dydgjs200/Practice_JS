import React, { useState } from "react";

function MapEx() {
  const [selectType, setSelectType] = useState(["제목", "작성자"]);
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [list, setList] = useState([]);

  const [searchList, setSearchList] = useState([]);

  const submitTtile = (event) => {
    setTitle(event.target.value);
    console.log("title > ", event.target.value);
  };
  const submitWriter = (event) => {
    if (event.key == "Enter") {
      addList();
    } else {
      setWriter(event.target.value);
    }
  };

  const addList = () => {
    let copyList = [...list];
    copyList.push([title, writer]);
    setList(copyList);

    console.log("list > ", copyList);
  };

  const removeList = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  return (
    <div>
      <fieldset>
        <form>
          작성자 : <input type="text" onChange={submitTtile} />
          제목 :{" "}
          <input type="text" onChange={submitWriter} onKeyDown={submitWriter} />
          <button type="button" onClick={addList}>
            제출
          </button>
        </form>
      </fieldset>

      {list.map((value, key) => {
        return (
          <p
            key={key}
            onDoubleClick={() => {
              removeList(key);
            }}
          >
            {value[0]} : {value[1]}
          </p>
        );
      })}

      <div className="search">
        <select>
          <option value={selectType[0]}>{selectType[0]}</option>
          <option value={selectType[1]}>{selectType[1]}</option>
        </select>
        <input type="text" placeholder="검색어 입력" />
        <button type="button">제출</button>
      </div>

      <div>
        <table border={3} cellPadding={3} cellSpacing={3}>
          <thead>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </thead>

          {list.map((value, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{value[1]}</td>
                <td>{value[0]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default MapEx;
