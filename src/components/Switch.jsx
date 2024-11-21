const Switch = ({ isSorted, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`flex w-12 h-6 px-[2px] rounded-full hover:cursor-pointer items-center box-border transition-all ${isSorted ? "bg-third" : "bg-white"}`}
    >
      <span
        className={`w-5 h-5 rounded-full  transition-all ${isSorted ? "bg-white translate-x-6" : "bg-third"} `}
      ></span>
    </div>
  );
};

export default Switch;
