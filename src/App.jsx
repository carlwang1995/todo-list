import { useReducer, useRef, useEffect, useState } from "react";
import ACTION from "./global";
import Input from "./components/Input";
import List from "./components/List";
import ProgressBar from "./components/ProgressBar";

// 定義 reducer，集中管理"新增任務"、"切換完成狀態"、"刪除任務"等動作
function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD: {
      // 以新增時間作為每筆資料的獨立 id
      const id = new Date().getTime();
      const { todoContent } = action;
      return [...state, { id, todoContent, complete: false }];
    }
    case ACTION.TOGGLE: {
      // 使用 map 方法遍歷 state 的每個元素，若與傳入的 action 為相同的 id 則將 complete 變更為相反的布林值，並返回新的陣列
      const newState = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      });
      return newState;
    }
    case ACTION.DELETE: {
      // 使用 filter 方法遍歷 state 的每個元素，篩選出與傳入的 action 不同 id 的項目，並返回新的陣列
      const newState = state.filter((item) => item.id !== action.id);
      return newState;
    }
    default: {
      return state;
    }
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [isAdd, setIsAdd] = useState(false);
  // listBoxRef 用來取得事項列表(List)的 DOM 物件，以利後續操作滾動條。將其傳遞到 List 組件的 prop
  const listBoxRef = useRef(null);

  // 使用 useEffect 操作 DOM，當新增事項時，isAdd 狀態變更為 true，並滾動至最下方。結束後再將 isAdd 的狀態改回 false
  useEffect(() => {
    if (isAdd && listBoxRef.current) {
      listBoxRef.current.scrollTop = listBoxRef.current.scrollHeight;
    }
    setIsAdd(false);
  }, [isAdd]);

  // 將 isAdd 設為 true 的 setter function 包成函式，傳遞到 Input 組件的 prop
  const rollToBottom = () => {
    setIsAdd(true);
  };

  return (
    <>
      <main
        // 當事項數量大於 4 時會顯示 scrollbar，版面寬度增加給 scrollbar 的空間
        className={`mainBackgroundColor ${todos.length > 4 ? "w-[408px]" : "contentWide"} h-[550px] flex flex-col justify-between overflow-hidden shadow-md relative`}
      >
        <section>
          <div className="contentWide px-5 pt-5 flex flex-col">
            <h1 className="text-2xl text-primary">Todo List</h1>
            <p className="text-xs mt-1 text-second">Add things to do</p>
            <hr className="my-2 border-[1.5px] border-third" />
            <ProgressBar todos={todos} />
          </div>
          <List todos={todos} listBoxRef={listBoxRef} onDispatch={dispatch} />
        </section>
        <section className="contentWide p-5">
          <Input rollToBottom={rollToBottom} onDispatch={dispatch} />
        </section>
      </main>
    </>
  );
};

export default App;
