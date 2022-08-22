import React, { FC } from "react";

const Work: FC = () => {
  return (
    <div className="bg-yellow-600 w-full h-screen flex flex-col justify-start pt-8">
      <h1 className="text-6xl section-title w-full flex justify-center">
        Work
      </h1>
      <div className="flex justify-center">
        <div id="tvScreen" />
      </div>
    </div>
  );
};

export default Work;
