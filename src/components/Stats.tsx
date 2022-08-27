import React, { FC, useEffect } from "react";
import StatBar from "./StatBar";

const Stats: FC = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("stat-fill");
      } else {
        entry.target.classList.remove("stat-fill");
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const targets = document.querySelectorAll(".stat");
    const observer = new IntersectionObserver(callback, options);
    targets.forEach((elem) => {
      observer.observe(elem);
    });
  });

  return (
    <div className="xs:w-[21rem] sm:w-[40rem] md:w-11/12 lg:w-full flex xs:items-center sm:justify-center md:items-start xs:flex-col sm:flex-row m-8 p-3 rounded-lg bg-gradient-to-t from-amber-200 to-amber-100 dark:from-fuchsia-800 dark:to-purple-800 shadow-lg">
      <div className="h-full xs:w-full md:w-1/2">
        <div className="flex justify-center stat-title xs:text-md sm:text-2xl lg:text-3xl mb-6 dark:text-[#eee8bf]">
          Languages
        </div>

        <StatBar name="HTML" value="95" />
        <StatBar name="CSS" value="90" />
        <StatBar name="JavaScript" value="80" />
        <StatBar name="TypeScript" value="75" />
        <StatBar name="Solidity" value="60" />
        <StatBar name="Ruby/Rails" value="30" />
      </div>
      <div className="h-full xs:w-full sm:w-1/2">
        <div className="flex justify-center stat-title xs:text-md sm:text-2xl lg:text-3xl mb-6 dark:text-[#eee8bf]">
          Frameworks/Libraries
        </div>
        <StatBar name="React" value="90" />
        <StatBar name="Next.js" value="50" />
        <StatBar name="Material UI" value="85" />
        <StatBar name="Tailwind CSS" value="70" />
        <StatBar name="Node/Express" value="85" />
        <StatBar name="GraphQL" value="50" />
        <StatBar name="MongoDB/Mongoose" value="60" />
      </div>
    </div>
  );
};

export default Stats;
