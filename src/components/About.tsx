import React, { FC } from "react";
import Stats from "./Stats";

const About: FC = () => {
  return (
    <div id="about-bg" className="w-full sm:h-[125vh] lg:h-screen relative">
      <div className="flex flex-col justify-center h-full">
        <div id="about-arrow" className="top-[-10rem] absolute" />
        <div className="flex justify-center w-full h-[7rem] relative">
          <h1 className="text-6xl section-title h-full">About</h1>
        </div>

        {/*for lg screens and up */}
        <div className="w-full h-full flex-row xs:hidden lg:flex ">
          <div className="h-full w-4/6">
            <Stats />
          </div>

          <div className="w-2/6 h-full flex flex-col ">
            <div className="h-[80rem] w-full">
              <div id="profile-pic"></div>
            </div>

            <div className="flex justify-center w-full h-full mt-16">
              <div className="text-lg flex justify-center w-4/6 text-center about-text">
                I'm a full-stack developer with a focus on front-end
                development. My passion is bringing data to life on the screen
                and connecting people with web3 technologies
              </div>
            </div>
          </div>
        </div>
        {/*for sm screens and below */}
        <div className="w-full h-full flex-col xs:flex lg:hidden">
          <div className="h-full w-full flex justify-center ">
            <Stats />
          </div>
          <div className="w-full h-full flex flex-col ">
            <div id="profile-pic" className="min-h-[25rem] scale-75"></div>
            <div className="flex justify-center w-full h-full mb-8">
              <div className="text-lg flex justify-center w-4/6 text-center about-text">
                I'm a full-stack developer with a focus on front-end
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
