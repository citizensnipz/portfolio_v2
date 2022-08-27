import React, { FC, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { selectTheme, selectWidth } from "../features/theme/themeReducer";
import Stats from "./Stats";

const About: FC = () => {
  const theme = useAppSelector(selectTheme);
  const width = useAppSelector(selectWidth);

  useEffect(() => {}, [theme]);
  return (
    <div
      id="about-bg"
      className="w-full sm:h-[158vh] lg:h-screen relative bg-gradient-to-t from-[#F0B359] to-[#F2DF4D] dark:from-slate-700 dark:to-[#7B56F7]"
    >
      <div className="flex flex-col justify-center h-full">
        {theme == "dark" ? (
          <div id="about-arrow-dark" className="top-[-10rem] absolute" />
        ) : (
          <div id="about-arrow" className="top-[-10rem] absolute" />
        )}

        <div className="flex justify-center w-full h-[7rem] relative">
          <h1 className="text-6xl section-title h-full dark:text-[#eee8bf]">About</h1>
        </div>

        {/*for lg screens and up */}
        <div className="w-full h-full flex-row xs:hidden lg:flex ">
          <div className="h-full w-4/6">
            <Stats />
            <div className="h-[20rem] w-full flex flex-row justify-evenly pt-4">
              <div className="h-[15rem] w-[11rem] flex flex-col items-center">
                <div id="fasterTrait" />
                <p className="text-center about-text pt-4 dark:text-[#eee8bf]">
                  Optimization and performance are top priorities
                </p>
              </div>
              <div className="h-[14rem] w-[11rem] flex flex-col items-center ">
                <div id="cleanTrait" />
                <p className="text-center about-text pt-4 dark:text-[#eee8bf]">
                  Clean, readable and dev friendly code
                </p>
              </div>
              <div className="h-[14rem] w-[11rem] flex flex-col items-center ">
                <div id="dynamicTrait" />
                <p className="text-center about-text pt-4 dark:text-[#eee8bf]">
                  Dynamic, interactive UIs that invite the user
                </p>
              </div>
            </div>
          </div>

          <div className="w-2/6 h-full flex flex-col ">
            <div className="h-[80rem] w-full">
              <div id="profile-pic"></div>
            </div>

            <div className="flex justify-center w-full h-full mt-16">
              <div className="text-lg flex justify-center w-4/6 text-center about-text dark:text-[#eee8bf]">
                I'm a full-stack developer with a focus on front-end
                development. My passion is bringing data to life on the screen
                and connecting people with web3 technologies
              </div>
            </div>
          </div>
        </div>
        {/*for md screens and below */}
        <div className="w-full h-full flex-col xs:flex lg:hidden">
          <div className="h-full w-full flex justify-center items-center flex-col">
            <Stats />
            <div className="h-[15rem] w-full flex flex-row justify-evenly pt-4">
              <div className="h-[15rem] w-[11rem] flex flex-col items-center">
                {width > 639 ? (
                  <div id="fasterTrait" />
                ): (
                  <div id="fasterTrait-xs" />
                )}
                
                <p className="text-center xs:text-sm about-text pt-4 dark:text-[#eee8bf]">
                  Optimization and performance are top priorities
                </p>
              </div>
              <div className="h-[14rem] w-[11rem] flex flex-col items-center ">
              {width > 639 ? (
                  <div id="cleanTrait" />
                ): (
                  <div id="cleanTrait-xs" />
                )}
                <p className="text-center xs:text-sm about-text pt-4 dark:text-[#eee8bf]">
                  Clean, readable and dev friendly code
                </p>
              </div>
              <div className="h-[14rem] w-[11rem] flex flex-col items-center ">
              {width > 639 ? (
                  <div id="dynamicTrait" />
                ): (
                  <div id="dynamicTrait-xs" />
                )}
                <p className="text-center xs:text-sm about-text pt-4 dark:text-[#eee8bf]">
                  Dynamic, interactive UIs that invite the user
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div id="profile-pic" className="min-h-[23rem] scale-[0.60]"></div>
            <div className="flex justify-center w-full h-full mb-8">
              <div className="text-lg flex justify-center w-4/6 text-center about-text dark:text-[#eee8bf]">
                I'm a full-stack developer from Florida, USA with a focus on front-end
                development. My passion is bringing data to life on the screen
                and connecting people with web3 technologies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
