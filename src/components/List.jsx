import { useState } from "react";
import Item from "./Item";
import Switch from "./Switch";

const List = ({ todos, listBoxRef, onDispatch }) => {
  const [isSorted, setIsSorted] = useState(false);
  // 依據 isSorted 狀態決定是否改變排序(未完成在上方；完成在下方)，並將結果賦予到變數 newTodos 中
  let newTodos;
  if (isSorted) {
    // isSorted 為 true，進行排序。將已完成的事項篩選至 doneTodos 陣列中；未完成事項篩選至 undoneTodos 陣列中，再將兩者解構合併賦予到變數 newTodos 中
    const doneTodos = [];
    const undoneTodos = [];
    todos.forEach((todo) => {
      if (todo.complete === true) {
        doneTodos.push(todo);
      } else {
        undoneTodos.push(todo);
      }
    });
    newTodos = [...undoneTodos, ...doneTodos];
  } else {
    // isSorted 為 false，則不變更排序方式，賦予到變數 newTodos 中
    newTodos = todos;
  }

  // 定義給 switch icon 切換 isSorted 狀態的函式
  const switchHandler = () => {
    setIsSorted(!isSorted);
  };

  return (
    <>
      <div
        className="h-[232px] overflow-x-hidden text-second relative scroll-smooth pl-5"
        ref={listBoxRef}
      >
        {newTodos.length === 0
          ? "You have nothing to do."
          : newTodos.map((todo) => (
              <Item
                key={todo.id}
                id={todo.id}
                content={todo.todoContent}
                complete={todo.complete}
                onDispatch={onDispatch}
              />
            ))}
      </div>
      <div className="contentWide px-5 flex flex-col">
        <hr className="my-2 border-[1.5px] border-third" />
        <div className="flex justify-end">
          <p className="mr-2 text-second text-sm">Move done things to end?</p>
          <Switch isSorted={isSorted} onToggle={switchHandler} />
        </div>
      </div>
    </>
  );
};

export default List;
