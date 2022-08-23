import React, { FC } from "react";

const Work: FC = () => {
  const handleKnobClick = () => {
    console.log("Knob clicked!");
  };

  const handleGuideClick = (name: string) => {
    console.log("Guide clicked!");
  }

  return (
    <div className="bg-yellow-600 w-full h-screen flex flex-col justify-start items-center relative backdrop:pt-8 ">
      <h1 className="text-6xl h-[8rem] section-title w-full flex items-center justify-center">
        Work
      </h1>
      <div
        id="tvWrapper"
        className="flex flex-col w-full items-center relative z-1"
      >
        <div className="flex flex-row w-[44rem] absolute z-2 top-[32rem] ">
          <div id="tvLegLeft" />
          <div id="tvShadow" className="flex-grow" />
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
      <div className="w-full h-[9rem] absolute bottom-0 flex flex-row items-center bg-gradient-to-t from-slate-300 to-white mt-5">
        <div id="tvGuideLogo" className="ml-6 w-2/12"/>
        <div className="h-full w-10/12 flex-row flex items-center justify-center">
            <button onClick={() => handleGuideClick("nexaprism")} className="text-2xl animate-bounce bg-amber-200 rounded-lg p-2 shadow-md about-text">nexaprism</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
