import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectTheme,
  selectWidth,
  setTheme,
} from "../features/theme/themeReducer";
import NavBar from "./NavBar";

const Intro: FC = () => {
  const theme = useAppSelector(selectTheme);
  const width = useAppSelector(selectWidth);

  useEffect(() => {
    console.log(width);
  }, [theme]);

  return (
    <div
      id="intro-bg"
      className="bg-gradient-to-t from-[#D98145] to-[#F2DF4D] dark:from-[#495ED6] dark:to-[#5FA8ED] w-full h-[120vh] flex justify-center relative"
    >
      {width > 639 ? (
        <div
          id="blob1"
          className="absolute ring-8 ring-amber-400 dark:ring-blue-600 bg-[#F8714F] dark:bg-blue-400 top-[25vh]  z-0 shadow-2xl"
        />
      ) : (
        <div
          id="blob1-xs"
          className="absolute ring-8 ring-amber-400 dark:ring-blue-600 bg-[#F8714F] dark:bg-blue-400 top-[30vh]  z-0 shadow-2xl"
        />
      )}
      <div className="flex justify-center">
        {(() => {
          //sm+ screen, dark mode
          if (width > 639 && theme == "dark") {
            return (
              <div
                id="blob2-dark"
                className="absolute top-[25vh] z-0"
              />
            );
          }
          //xs screen, dark mode
          if (width < 640 && theme == "dark") {
            return (
              <div
                id="blob2-dark-xs"
                className="absolute top-[29vh] z-0"
              />
            );
          }
          //sm+ screen, light mode
          if (width > 639 && theme == "light") {
            return <div
              id="blob2"
              className="absolute top-[25vh] z-0"
            />;
          }
          //xs screen, light mode
          if (width < 640 && theme == "light") {
            return <div
            id="blob2-xs"
            className="absolute top-[29vh] z-0"
          />
          }
        })()}
      </div>

      <div className="absolute top-[42vh]  z-1">
        <h1
          id="name"
          className="text-6xl font-bold rotate-[-4deg] dark:text-[#eee8bf] text-amber-50"
        >
          Josh Kroslowitz
        </h1>
        <h3
          id="job-title"
          className="text-1xl dark:text-[#eee8bf] text-amber-50 font-bold rotate-[-4deg] ml-10"
        >
          full-stack web developer
        </h3>
      </div>
      <div className="absolute top-[60vh] xs:left-[65%] sm:left-[63%] lg:left-[57%]">
        <div id="burst-8" className="bg-orange-700 dark:bg-sky-300"></div>
      </div>

      <div
        id="bubble"
        className="absolute bg-white dark:bg-sky-200 ring-2 ring-inset ring-zinc-800 dark:ring-black flex justify-center items-center top-[60vh] xs:left-[60%] lg:left-[55%] xl:left-[55.5%]"
      >
        <h4 className="text-2xl text-black ">
          now in web3!
        </h4>
      </div>
      <div id="navbar" className="absolute bottom-3 w-full h-[7rem] z-10">
        <NavBar />
      </div>
    </div>
  );
};

export default Intro;
