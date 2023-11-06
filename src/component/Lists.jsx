const Lists = ({ item, clickRemoveButtonHandler, changeBtn }) => {
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
          <button className="cenclebtn" onClick={() => changeBtn(item.id)}>
            완료
          </button>
        </div>
      </div>
    );
  };
  export default Lists;