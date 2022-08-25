import React, { FC, useEffect, useState } from "react";
import { projects, projectNames } from "../constants/workProjects";

type Project = {
  name: string;
  languages: string[];
  frameworks: string[];
  description: string;
  url: string;
  img: string;
};

const Work: FC = () => {
  const [isXLPanelOpen, setIsXLPanelOpen] = useState<boolean>(false);
  const [isLGPanelOpen, setIsLGPanelOpen] = useState<boolean>(false);
  const [projectDisplay, setProjectDisplay] = useState<Project>({} as Project);

  const handleKnobClick = () => {
    console.log("Knob clicked!");
  };

  const handleGuideClick = (name: string) => {
    const project: Project = projects[name];
    console.log(project.img)
    setProjectDisplay(project);
    const panelXL = document.getElementById("info-panel-XL");
    const panelLG = document.getElementById("info-panel-LG");
    const screenLG_static = document.getElementById("tvScreenLG-static");
    const screenLG_display = document.getElementById("tvScreenLG-display");
    const windowWidth = window.innerWidth;
    //ensures that large and small panels will be closed when changing window sizes
    //and that the first click always opens the panel
    if (windowWidth > 1279) {
      setIsXLPanelOpen(!isXLPanelOpen);
      setIsLGPanelOpen(false);
      panelLG?.classList.remove("info-anim-LG-out");
      panelLG?.classList.add("info-anim-LG-In");
    } else {
      setIsLGPanelOpen(!isLGPanelOpen);
      setIsXLPanelOpen(false);
      panelXL?.classList.remove("info-anim-out");
      panelXL?.classList.add("info-anim-in");
    }

    if (isXLPanelOpen && windowWidth > 1279) {
      //closes XL panel
      panelXL?.classList.remove("info-anim-out");
      panelXL?.classList.add("info-anim-in");
      setTimeout(() => {
        panelXL?.classList.remove("flex");
        panelXL?.classList.add("hidden");
      }, 1000);
    } else if (!isXLPanelOpen && windowWidth > 1279) {
      //opens XL panel
      panelXL?.classList.remove("hidden");
      panelXL?.classList.remove("info-anim-in");
      panelXL?.classList.add("flex");
      panelXL?.classList.add("info-anim-out");
    } else if (isLGPanelOpen && windowWidth < 1280) {
      //closes LG panel
      panelLG?.classList.remove("info-anim-LG-out");
      panelLG?.classList.add("info-anim-LG-in");
      screenLG_static?.classList.add("block");
      screenLG_static?.classList.remove("hidden");
      screenLG_display?.classList.remove("block");
      screenLG_display?.classList.add("hidden");
      setTimeout(() => {
        panelLG?.classList.remove("flex");
        panelLG?.classList.add("hidden");
      }, 1000);
    } else if (!isLGPanelOpen && windowWidth < 1280) {
      //opens LG panel
      panelLG?.classList.remove("hidden");
      panelLG?.classList.remove("info-anim-LG-in");
      panelLG?.classList.add("flex");
      panelLG?.classList.add("info-anim-LG-out");
      screenLG_static?.classList.remove("block");
      screenLG_static?.classList.add("hidden");
      screenLG_display?.classList.remove("hidden");
      screenLG_display?.classList.add("block");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-yellow-600 w-full h-[100vh] flex flex-col justify-start items-center relative backdrop:pt-8 ">
      <h1 className="text-6xl h-[8rem] section-title w-full flex items-center justify-center">
        Work
      </h1>
      <div
        id="tvWrapper"
        className="flex flex-col w-full items-center relative z-1"
      >
        {/* xl screens and above */}
        <div className="flex-row w-[44rem] absolute z-2 top-[32rem] xs:hidden xl:flex">
          <div
            id="info-panel-XL"
            className="w-[16rem] h-[30rem] hidden bg-white absolute z-0 flex-col items-center p-3 shadow-lg"
          >
            {projectDisplay.name !== undefined ? (
              <div className="flex flex-col items-center justify-between h-full">
                <h2 id="title" className="text-xl mt-14">
                  {projectDisplay.name}
                </h2>
                <div className="flex flex-col items-center">
                  <h4 id="subtitle">Description:</h4>
                  <p id="text" className="text-center">
                    {projectDisplay.description}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 id="subtitle">Languages:</h4>
                  <p id="text" className="text-center">
                    {projectDisplay.languages.join(" ")}
                  </p>
                </div>
                <div className="flex flex-col items-center mb-14">
                  <h4 id="subtitle">Frameworks/Libraries:</h4>
                  <p id="text" className="text-center">
                    {projectDisplay.frameworks.join(" ")}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <div id="tvLegLeft" />
          <div id="tvShadow" className="flex-grow" />
          <div id="tvLegRight" />
        </div>
        <div
          id="tvBoxWrapper"
          className="justify-center pt-8 flex-row absolute z-3 xs:hidden xl:flex"
        >
          <div
            id="tvFrameXL"
            className="flex justify-center items-center rounded-l-md shadow-2xl"
          >
            <div id="tvScreenXL" className="shadow-lg" />
          </div>
          <div id="tvControlsXL" className="rounded-r-md">
            <div
              id="knobWrapper"
              className="h-full w-full p-8 flex flex-col items-center justify-between "
            >
              <div
                className="tvKnobXL animate-pulse"
                onClick={handleKnobClick}
              />
              <div className="tvKnobXL" />
              <div className="tvGrateXL" />
            </div>
          </div>
        </div>
        {/* lg screens and below */}
        <div className="flex-row w-[35rem] absolute z-2 top-[32rem] xs:flex xl:hidden">
          <div id="tvLegLeft" />
          <div id="tvShadow" className="flex-grow" />
          <div id="tvLegRight" />
        </div>
        <div
          id="tvBoxWrapper"
          className="justify-center pt-8 flex-row absolute z-3 xs:flex xl:hidden"
        >
          <div
            id="tvFrameLG"
            className="flex justify-center items-center rounded-l-md shadow-2xl"
          >
            <div id="tvScreenLG-static" className="shadow-lg" />
            <div id="tvScreenLG-display" className="shadow-lg hidden"  >
                <div className="w-full h-full" style={{background: `url("${projectDisplay.img}") no-repeat`}} />
            </div>
          </div>
          <div id="tvControlsLG" className="rounded-r-md">
            <div
              id="knobWrapper"
              className="h-full w-full p-8 flex flex-col items-center justify-between "
            >
              <div
                className="tvKnobLG animate-pulse"
                onClick={handleKnobClick}
              />
              <div className="tvKnobLG" />
              <div className="tvGrateLG" />
            </div>
          </div>
        </div>
      </div>

      {/* TV guide controls */}
      <div id="atTheBottom" className="w-full h-[9rem] absolute bottom-0 mt-5">
        <div
          id="relativeWrapper"
          className="w-full h-full flex flex-row justify-center relative z-2"
        >
          <div
            id="info-panel-LG-wrapper"
            className="w-full h-full justify-center sm:flex xl:hidden"
          >
            <div
              id="info-panel-LG"
              className="bg-white w-5/6 h-full absolute flex-col items-center rounded-t-md z-0"
            >
              {projectDisplay.name !== undefined ? (
                <div className="flex flex-row items-between items-center p-4">
                  <h2 id="title" className="text-xl">
                    {projectDisplay.name}
                  </h2>
                  <div className="flex flex-col items-center">
                  <h4 id="subtitle">Description:</h4>
                  <p id="text" className="text-center">
                    {projectDisplay.description}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 id="subtitle">Languages:</h4>
                  <p id="text" className="text-center">
                    {projectDisplay.languages.join(" ")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 id="subtitle">Frameworks/Libraries:</h4>
                  <p id="text" className="text-center">
                    {projectDisplay.frameworks.join(" ")}
                  </p>
                </div>
                </div>
              ) : null}
            </div>
          </div>

          <div
            id="bg"
            className="w-full h-full flex flex-row bg-gradient-to-t from-slate-300 to-white absolute z-1"
          >
            <div id="tvGuideLogo" className="ml-6 w-2/12 min-w-[12rem]" />
            <div className="h-full w-10/12 flex-row flex items-center justify-center">
              {projectNames.map((p) => {
                return (
                  <button
                    key={p}
                    onClick={() => {
                      handleGuideClick(p);
                    }}
                    className="text-2xl animate-bounce bg-amber-200 rounded-lg p-2 shadow-md about-text"
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
