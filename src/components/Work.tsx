import React, { FC } from "react";

const Work: FC = () => {
  const handleKnobClick = () => {
    console.log("Knob clicked!");
  };

  return (
    <div className="bg-yellow-600 w-full h-screen flex flex-col justify-start items-center pt-8 ">
      <h1 className="text-6xl section-title w-full flex justify-center">
        Work
      </h1>
      <div id="tvWrapper" className="flex flex-col w-full items-center relative z-1">
        <div className="flex flex-row w-[44rem] absolute z-2 top-[32rem] ">
          <div id="tvLegLeft" />
          <div id="tvShadow" className="flex-grow"/>
          <div id="tvLegRight" />
        </div>
        <div
          id="tvBoxWrapper"
          className="flex justify-center pt-8 flex-row absolute z-3"
        >
          <div
            id="tvFrame"
            className="flex justify-center items-center rounded-l-md shadow-2xl"
          >
            <div id="tvScreen" className="shadow-lg" />
          </div>
          <div id="tvControls" className="rounded-r-md">
            <div
              id="knobWrapper"
              className="h-full w-full p-8 flex flex-col items-center justify-between "
            >
              <div className="tvKnob animate-pulse" onClick={handleKnobClick} />
              <div className="tvKnob" />
              <div className="tvGrate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
