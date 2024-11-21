const ProgressBar = ({ todos }) => {
  // 將完成的事項篩選出來，放置新的陣列 completeTodo
  const completeTodo = todos.filter((todo) => todo.complete === true);
  // 完成事項陣列長度除以全部事項陣列長度，即可得出完成事項的占比
  const completePersent =
    Math.floor((completeTodo.length / todos.length) * 100) + "%";
  const initPersent = "0%";
  return (
    <div className="flex items-center my-2">
      <span className="text-primary">
        {todos.length === 0 ? initPersent : completePersent}
      </span>
      {/* 進度條 */}
      <div className="w-full h-4 bg-white ml-2 rounded-full">
        <div
          className="h-full bg-[rgb(154,175,238)] rounded-full transition-all"
          style={{
            width: `${todos.length === 0 ? initPersent : completePersent}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
