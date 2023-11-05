import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { id: 0, title: "제목이다", body: "내용이다", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // 핸들러
  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onBodyHandler = (event) => {
    setBody(event.target.value);
  };

  // 추가버튼 클릭
  const clickAddButtonHandler = () => {
    const newList = {
      id: list.length + 1,
      title,
      body,
    };
    setList([...list, newList]);
    setTitle("");
    setBody("");
  };
  // 삭제버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
  };

  return (
    <div className="layout">
      <div>
        <h1>To do list</h1>
        <div className="titlebox">
          <div>
            제목 :
            <input className="title" value={title} onChange={onTitleHandler} />
            &nbsp; 내용 :
            <input className="body" value={body} onChange={onBodyHandler} />
          </div>
          <div>
            <button className="addbutton" onClick={clickAddButtonHandler}>
              추가하기
            </button>
          </div>
        </div>
        <h2>Working</h2>
        <div className="appstyle">
          {list.map((item) => {
            return (
              <div className="component-style">
                <div className="text">
                  {item.title}
                  <br />
                  {item.body}
                  <br />
                </div>
                <div className="button1">
                  <button
                    className="removebtn"
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제
                  </button>
                  <button className="cenclebtn">취소/완료</button>
                </div>
              </div>
            );
          })}
        </div>
        <h2>Done</h2>
      </div>
    </div>
  );
}

export default App;
