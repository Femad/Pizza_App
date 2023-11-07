import React from "react";

const FilterBtn = (props) => {
  return (
    <button
      className="py-[3px] px-[8px] rounded-[15px] text-center font-bold hover:text-white mr-2 hover:bg-black border-[1px] focus:text-white focus:bg-black"
      onClick={props.onClick}
    >
      {props.btnValue}
    </button>
  );
};

export default FilterBtn;
