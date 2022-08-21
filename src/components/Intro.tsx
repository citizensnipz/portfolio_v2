import React, { FC } from "react";

const Intro: FC = () => {
  return (
    <div id="intro-bg" className="bg-yellow-500 w-full h-screen relative">
      <div
        id="blob1"
        className="absolute ring-8 ring-amber-400 top-[25vh] sm:left-[2%] md:left-[15%] lg:left-[25%] z-0"
      ></div>
      <div
        id="blob2"
        className="absolute top-[25vh] sm:left-[2%] md:left-[15%] lg:left-[25%] z-0"
      ></div>
      <div className="absolute top-[42vh] sm:left-[30%] md:left-[40%] lg:left-[45%] xl:left-[42%] z-1">
        <h1
          id="name"
          className="text-6xl font-bold rotate-[-4deg] text-amber-50"
        >
          Josh Kroslowitz
        </h1>
        <h3 id="subtitle" className="text-1xl font-bold rotate-[-4deg] ml-10">
          web developer
        </h3>
      </div>
      <div className="absolute top-[60vh] sm:left-[63%] lg:left-[57%]">
      <div id="burst-8" className=""></div>
      </div>
      
      <div id="bubble" className="absolute ring-2 ring-inset ring-zinc-800 flex justify-center items-center top-[60vh] sm:left-[60%] lg:left-[55%]">
        
        <h4 className="text-2xl">now in web3!</h4>
        
      </div>
    </div>
  );
};

export default Intro;
