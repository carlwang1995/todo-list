import ACTION from "../global";

const Item = ({ id, content, complete, onDispatch }) => {
  // 定義點擊 checkbox 的動作，傳入對應的 action type 及 事項的 id 至 dispatch
  const toggleHandler = () => {
    onDispatch({ type: ACTION.TOGGLE, id });
  };
  // 定義點擊刪除鍵的動作，傳入對應的 action type 及 事項的 id 至 dispatch
  const closeButtonHandler = () => {
    onDispatch({ type: ACTION.DELETE, id });
  };
  return (
    <div className="flex h-12 my-2 justify-end bg-primary rounded-[3px] w-full max-w-[360px]">
      <div className="flex justify-between bg-white items-center h-full p-4 rounded-r-[3px] w-[98.5%] border-slate-100 border">
        <div className="flex items-center relative">
          <input
            type="checkbox"
            onClick={toggleHandler}
            className="peer text-white checked:bg-primary checked:border-primary hover:cursor-pointer w-5 h-5 appearance-none border rounded-[5px] border-third"
          />
          <span className="peer-checked:opacity-100 opacity-0 absolute text-white pointer-events-none font-bold translate-x-1">
            &#10003;
          </span>
          {/* 依據 complete 的布林值決定是否畫上刪除線 */}
          <p
            className={`ml-4 ${complete && "line-through"} text-primary max-w-[270px] overflow-hidden text-ellipsis`}
          >
            {content}
          </p>
        </div>
        <button
          onClick={closeButtonHandler}
          className="text-xl text-third font-bold"
        >
          &#215;
        </button>
      </div>
    </div>
  );
};

export default Item;
