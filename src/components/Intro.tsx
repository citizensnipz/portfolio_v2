import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTheme, setTheme } from "../features/theme/themeReducer";
import NavBar from "./NavBar";

const Intro: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {}, [theme]);

  return (
    <div
      id="intro-bg"
      className="bg-gradient-to-t from-[#D98145] to-[#F2DF4D] dark:from-[#495ED6] dark:to-[#5FA8ED] w-full h-[120vh] relative"
    >
      <div
        id="blob1"
        className="absolute ring-8 ring-amber-400 dark:ring-blue-600 bg-[#F8714F] dark:bg-blue-400 top-[25vh] sm:left-[2%] md:left-[15%] lg:left-[25%] z-0 shadow-2xl"
      ></div>
      {theme == "dark" ? (
        <div
          id="blob2-dark"
          className="absolute top-[25vh] sm:left-[2%] md:left-[15%] lg:left-[25%] z-0"
        />
      ) : (
        <div
          id="blob2"
          className="absolute top-[25vh] sm:left-[2%] md:left-[15%] lg:left-[25%] z-0"
        />
      )}

      <div className="absolute top-[42vh] xs:left-[30%] md:left-[40%] lg:left-[45%] xl:left-[42%] 2xl:left-[38%] z-1">
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
          web developer
        </h3>
      </div>
      <div className="absolute top-[60vh] xs:left-[65%] sm:left-[63%] lg:left-[57%]">
        <div id="burst-8" className="bg-yellow-500 dark:bg-[#7B56F7]"></div>
      </div>

      <div
        id="bubble"
        className="absolute bg-white dark:bg-blue-800 ring-2 ring-inset ring-zinc-800 flex justify-center items-center top-[60vh] xs:left-[60%] lg:left-[55%] xl:left-[55.5%]"
      >
        <h4 className="text-2xl text-black dark:text-[#eee8bf]">
          now in web3!
        </h4>
      </div>
      <div id="navbar" className="absolute bottom-0 w-full h-[7rem] z-10">
        <NavBar />
      </div>
    </div>
  );
};

export default Intro;
