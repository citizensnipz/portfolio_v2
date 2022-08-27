import React, { FC, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { projects, projectNames } from "../constants/workProjects";
import { selectWidth } from "../features/theme/themeReducer";

type Project = {
  name: string;
  languages: string[];
  frameworks: string[];
  description: string;
  url: string;
  img: string;
};

const Work: FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [projectDisplay, setProjectDisplay] = useState<Project>({} as Project);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const width = useAppSelector(selectWidth);
  const panXL = useRef<HTMLDivElement>(null);
  const panLG = useRef<HTMLDivElement>(null);
  const screenXL_static = useRef<HTMLDivElement>(null);
  const screenLG_static = useRef<HTMLDivElement>(null);
  const screenXS_static = useRef<HTMLDivElement>(null);
  const screenXL_display = useRef<HTMLDivElement>(null);
  const screenLG_display = useRef<HTMLDivElement>(null);
  const screenXS_display = useRef<HTMLDivElement>(null);

  const handleKnobClick = () => {
    
    if (!isPanelOpen && projectIndex < projectNames.length) {
        //panel is closed, index is valid value
        handleGuideClick(projectNames[projectIndex])
        //increment index
        setProjectIndex(projectIndex + 1)
    } else if (!isPanelOpen && projectIndex >= projectNames.length) {
        //panel is closed, index is invalid value
        //reset the panel to first project
        handleGuideClick(projectNames[0]);
        //reset the index
        setProjectIndex(0)
    } else if (isPanelOpen && projectIndex < projectNames.length) {
        //panel is open, index is valid value
        handleGuideClick(projectNames[projectIndex]);
        setTimeout(() => {
            handleGuideClick(projectNames[projectIndex], true);
        }, 500);
        //increment index
        setProjectIndex(projectIndex + 1);
    } else {
        //panel is open, index is invalid value
        handleGuideClick(projectNames[0]);
        setTimeout(() => {
            handleGuideClick(projectNames[0], true);
        }, 500);
        //reset the index
        setProjectIndex(0)
    }
  };

  const openPanel = () => {
    if (panLG.current !== null && panXL.current !== null) {
      panLG.current.classList.remove("hidden");
      panLG.current.classList.remove("info-anim-LG-in");
      panLG.current.classList.add("flex");
      panLG.current.classList.add("info-anim-LG-out");
      panXL.current.classList.remove("hidden");
      panXL.current.classList.remove("info-anim-in");
      panXL.current.classList.add("flex");
      panXL.current.classList.add("info-anim-out");
    }
  };

  const closePanel = () => {
    if (panLG.current !== null && panXL.current !== null) {
        panLG.current.classList.remove("info-anim-LG-out");
        panLG.current.classList.add("info-anim-LG-in");
        panXL.current.classList.remove("info-anim-out");
        panXL.current.classList.add("info-anim-in");
        setTimeout(() => {
            panLG.current?.classList.remove("flex");
            panLG.current?.classList.add("hidden");
            panXL.current?.classList.remove("flex");
            panXL.current?.classList.add("hidden");
        }, 250);

    }
  }
    

  const switchToStatic = (

  ) => {
    const staticElemArray = [
      screenXL_static.current,
      screenLG_static.current,
      screenXS_static.current,
    ];
    const displayElemArray = [
      screenXL_display.current,
      screenLG_display.current,
      screenXS_display.current,
    ];
    staticElemArray.forEach((el) => {
      el?.classList.add("block");
      el?.classList.remove("hidden");
    });
    displayElemArray.forEach((el) => {
      el?.classList.remove("block");
      el?.classList.add("hidden");
    });
  };

  const switchToDisplay = (

  ) => {
    const staticElemArray = [
      screenXL_static.current,
      screenLG_static.current,
      screenXS_static.current,
    ];
    const displayElemArray = [
      screenXL_display.current,
      screenLG_display.current,
      screenXS_display.current,
    ];
    staticElemArray.forEach((el) => {
      el?.classList.remove("block");
      el?.classList.add("hidden");
    });
    displayElemArray.forEach((el) => {
      el?.classList.add("block");
      el?.classList.remove("hidden");
    });
  };

  const handleGuideClick = (name: string, knobClick?: boolean) => {
    const project: Project = projects[name];
    setProjectDisplay(project);
    if (!isPanelOpen || knobClick) {
      openPanel();
      switchToDisplay();
      setIsPanelOpen(true);
    } else {
      closePanel();
      switchToStatic();
      setIsPanelOpen(false);
    }
  };

  useEffect(() => {}, [width]);

  return (
    <div
      id="work-bg"
      className="bg-yellow-600 dark:bg-indigo-900 w-full sm:h-[100vh] xs:h-[90vh]  flex flex-col justify-start items-center relative backdrop:pt-8 "
    >
      <h1 className="text-6xl h-[3rem] mt-4 section-title w-full flex items-center justify-center dark:text-[#eee8bf]">
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
            ref={panXL}
            className="w-[16rem] h-[30rem] hidden bg-white dark:bg-cyan-800 absolute z-0 flex-col items-center p-3 shadow-lg"
          >
            {projectDisplay.name !== undefined ? (
              <div className="flex flex-col items-center justify-between h-full">
                <h2 id="title" className="text-xl mt-14 dark:text-[#eee8bf]">
                  <a href={projectDisplay.url} target="_blank">
                    {projectDisplay.name}
                  </a>
                </h2>
                <div className="flex flex-col items-center">
                  <h4 id="subtitle" className="dark:text-[#eee8bf]">
                    Description:
                  </h4>
                  <p id="text" className="text-center dark:text-[#eee8bf]">
                    {projectDisplay.description}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 id="subtitle" className="dark:text-[#eee8bf]">
                    Languages:
                  </h4>
                  <p id="text" className="text-center dark:text-[#eee8bf]">
                    {projectDisplay.languages.join(", ")}
                  </p>
                </div>
                <div className="flex flex-col items-center mb-14">
                  <h4 id="subtitle" className="dark:text-[#eee8bf]">
                    Frameworks/Libraries:
                  </h4>
                  <p id="text" className="text-center dark:text-[#eee8bf]">
                    {projectDisplay.frameworks.join(", ")}
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
            <div
              id="tvScreenXL-static"
              ref={screenXL_static}
              className="shadow-lg"
            />
            <div
              id="tvScreenXL-display"
              ref={screenXL_display}
              className="shadow-lg hidden bg-black z-3"
            >
              <a href={projectDisplay.url} target="_blank">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("${projectDisplay.img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </a>
            </div>
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
        <div className="flex-row w-[35rem] absolute z-2 top-[32rem] xs:hidden sm:flex xl:hidden">
          <div id="tvLegLeft" />
          <div id="tvShadow" className="flex-grow" />
          <div id="tvLegRight" />
        </div>
        <div
          id="tvBoxWrapper"
          className="justify-center pt-8 flex-row absolute z-3 xs:hidden sm:flex xl:hidden"
        >
          <div
            id="tvFrameLG"
            className="flex justify-center items-center rounded-l-md shadow-2xl"
          >
            <div
              id="tvScreenLG-static"
              ref={screenLG_static}
              className="shadow-lg"
            />
            <div
              id="tvScreenLG-display"
              ref={screenLG_display}
              className="shadow-lg hidden"
            >
              <a href={projectDisplay.url} target="_blank">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("${projectDisplay.img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </a>
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
        {/* for xs mobile screens */}
        <div className="flex-row w-[22rem] absolute z-2 top-[19rem] xs:flex sm:hidden">
          <div id="tvLegLeftXS" className="" />
          <div id="tvShadowXS" className="flex-grow" />
          <div id="tvLegRightXS" />
        </div>
        <div
          id="tvBoxWrapper"
          className="justify-center pt-8 flex-row absolute z-3 xs:flex sm:hidden"
        >
          <div
            id="tvFrameXS"
            className="flex justify-center items-center rounded-l-md shadow-2xl"
          >
            <div
              id="tvScreenXS-static"
              ref={screenXS_static}
              className="shadow-lg "
            />
            <div
              id="tvScreenXS-display"
              ref={screenXS_display}
              className="shadow-lg hidden"
            >
              <a href={projectDisplay.url} target="_blank">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("${projectDisplay.img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </a>
            </div>
          </div>
          <div id="tvControlsXS" className="rounded-r-md">
            <div
              id="knobWrapper"
              className="h-full w-full p-8 flex flex-col items-center justify-between "
            >
              <div
                className="tvKnobXS animate-pulse"
                onClick={handleKnobClick}
              />
              <div className="tvKnobXS" />
              <div className="tvGrateXS" />
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
              ref={panLG}
              className="bg-white dark:bg-cyan-800 xs:w-full sm:w-5/6 h-full absolute flex-col items-center rounded-t-md z-0"
            >
              {projectDisplay.name !== undefined ? (
                <div className="flex xs:flex-col sm:flex-row items-between items-center p-4">
                  <h2
                    id="title"
                    className="xs:text-md sm:text-xl dark:text-[#eee8bf]"
                  >
                    <a href={projectDisplay.url} target="_blank">
                      {projectDisplay.name}
                    </a>
                  </h2>
                  <div className="flex flex-row">
                    <div className="flex flex-col items-center">
                      <h4 id="subtitle" className="dark:text-[#eee8bf]">
                        Description:
                      </h4>
                      <p
                        id="text"
                        className="text-center dark:text-[#eee8bf] xs:text-sm sm:text-md"
                      >
                        {projectDisplay.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h4 id="subtitle" className="dark:text-[#eee8bf]">
                        Languages:
                      </h4>
                      <p
                        id="text"
                        className="text-center dark:text-[#eee8bf] xs:text-sm sm:text-md"
                      >
                        {projectDisplay.languages.join(", ")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h4 id="subtitle" className="dark:text-[#eee8bf]">
                        Frameworks/Libraries:
                      </h4>
                      <p
                        id="text"
                        className="text-center dark:text-[#eee8bf] xs:text-sm sm:text-md"
                      >
                        {projectDisplay.frameworks.join(", ")}
                      </p>
                    </div>
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
