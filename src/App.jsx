import React, { useState } from "react";
import Lists from "./component/Lists";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { id: 0, title: "리엑트 강의", body: "리엑트 강의듣기", isDone: false },
    { id: 1, title: "복습", body: "프로잭트", isDone: true },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [btn, setBtn] = useState("완료");
  // 핸들러
  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onBodyHandler = (event) => {
    setBody(event.target.value);
  };

  // 추가버튼
  const clickAddButtonHandler = () => {
    const newList = {
      id: list.length + 1,
      title,
      body,
      isDone: false,
    };
    setList([...list, newList]);
    setTitle("");
    setBody("");
  };
  // 삭제버튼
  const clickRemoveButtonHandler = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  // 완료,취소 버튼 클릭
  // isDone 값이 바뀔때 마다 자리를 옮기기
  // 1. 버튼을 누른다
  //  2. 누른놈의 isdone이 false이면 true로  바꾼다.
  //  3. isDone 이 true 이면 false로 바꾼다.
  //  4. setList로 출력한다.
  const changeBtn = (id) => {
    const newFind = list.find((todo) => todo.id === id);
    if (newFind.isDone === true) {
      newFind.isDone = false;
    } else {
      newFind.isDone = true;
    }
    console.log(newFind);

    const newList = list.filter((todo) => todo.id !== id);
    setList([...newList, newFind]);
  };

  // const changeBtn = (id) =>{
  //   const upDatedTodo = list.filter((item) =>{
  //      if(item.id === id){
  //       item.isDone = ! item.isDone;
  //   } return item })
  //   setList(upDatedTodo)
  // }

  return (
    <div className="layout">
      <div>
        <h1> To do list</h1>
        <div className="headbox">
          <div>
            제목 :
            <input className="title" value={title} onChange={onTitleHandler} />
            &nbsp; 내용 :{" "}
            <input className="boxbody" value={body} onChange={onBodyHandler} />
          </div>
          <div className="addbutton">
            <button onClick={clickAddButtonHandler}>추가하기</button>
          </div>
        </div>
        <div className="body">
          <h2>Working</h2>
          <div className="appstyle">
            {list.map((item) => {
              if (item.isDone === false) {
                return (
                  <Lists
                    key={item.id}
                    item={item}
                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                    changeBtn={changeBtn}
                  />
                );
              }
            })}
          </div>
          <h2>Done</h2>
          <div className="appstyle">
            {list.map((item) => {
              if (item.isDone === true) {
                return (
                  <Lists
                    key={item.id}
                    item={item}
                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                    changeBtn={changeBtn}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
