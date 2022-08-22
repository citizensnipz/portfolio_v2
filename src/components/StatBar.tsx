import React, { FC } from "react";

const StatBar: FC<{ name: string; value: string }> = ({ name, value }) => {
  return (
    <div className="w-full h-10 bg-transparent flex items-center justify-between p-2 mt-2 mb-2">
      <div className="flex justify-center pl-2 pr-2 min-w-[8rem] w-2/6 stat-name xs:text-sm sm:text-md lg:text-xl">{name}</div>
      <div className="w-4/6 flex justify-end">
        <div
          style={{ width: value + "%" }}
          className="bg-gradient-to-r from-yellow-600 to-red-600 bg-left shadow-md h-8 rounded-lg stat"
        />
      </div>
    </div>
  );
};

export default StatBar;
