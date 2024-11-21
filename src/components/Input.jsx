import { useState } from "react";
import ACTION from "../global";

const Input = ({ rollToBottom, onDispatch }) => {
  const [todoContent, setTodoContent] = useState("");

  const submitHandler = (e) => {
    // 須取消觸發 from 預設的 submit event
    e.preventDefault();
    // 新增事項到 dispatch
    onDispatch({ type: ACTION.ADD, todoContent });
    // 滾動到最下方
    rollToBottom();
    // 清空 todoContent
    setTodoContent("");
  };

  const inputHandler = (e) => {
    setTodoContent(e.target.value);
  };

  return (
    <>
      <h3 className="text-second">Add to list</h3>
      {/* 定義一個 from，包含 input 輸入框作為 React controlled component，及時掌控與更新 todoContent 狀態並進行提交 */}
      <form onSubmit={submitHandler} className="h-10 flex flex-nowrap mt-2">
        <input
          autoFocus
          type="text"
          onChange={inputHandler}
          value={todoContent}
          className="h-full px-2 rounded-[3px] w-full focus:outline-none text-primary"
        />
        <button className="bg-primary h-full w-12 px-2 text-white ml-2 rounded-[3px] text-3xl">
          &#43;
        </button>
      </form>
    </>
  );
};

export default Input;
