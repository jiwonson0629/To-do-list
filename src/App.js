import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { id: 0, title: "리엑트 강의", body: "리엑트 강의듣기", isDone: false },
    { id: 1, title: "복습", body: "프로잭트", isDone: true }]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [btn, setBtn] = useState('취소');
  // 핸들러
  const onTitleHandler = (event) => {setTitle(event.target.value);};
  const onBodyHandler = (event) => {setBody(event.target.value);};

  // 추가버튼 
  const clickAddButtonHandler = () => {
    const newList = {
      id: list.length + 1,
      title,
      body,
      isDone:false,
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
   const changeBtn = (id) =>{
   const newFind = list.find((todo) => todo.id === id);
   if(newFind.isDone === true){
    newFind.isDone = false
   }else{
    newFind.isDone = true
   }
   console.log(newFind);
   
   const newList = list.filter((todo) => todo.id !== id);
   setList([...newList,newFind]); 
   
   }




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
        <h1>  To do list</h1>
        <div className="titlebox">
          <div>
            제목 :<input className="title" value={title} onChange={onTitleHandler} />
            &nbsp; 내용 : <input className="body" value={body} onChange={onBodyHandler} />
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
            if(item.isDone === false) {
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
                    onClick={() => clickRemoveButtonHandler(item.id)}>삭제</button>
                  <button className="cenclebtn" onClick={() => changeBtn(item.id)}>취소/완료</button>
                </div>
              </div>
            );
            }
            
          })}
        </div>
        <h2>Done</h2>
        <div className="appstyle">
          {list.map((item) => {
            if(item.isDone === true){
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
                    onClick={() => clickRemoveButtonHandler(item.id)}>삭제</button>
                  <button className="cenclebtn" onClick={() => changeBtn(item.id)}>{btn}</button>
                </div>
              </div>
            );
            }
            
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
