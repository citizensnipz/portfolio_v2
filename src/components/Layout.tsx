import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setWidth } from "../features/theme/themeReducer";

const Layout: FC<{ children: JSX.Element[] }> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const widthOutput = document.getElementById("layout");

    //dynamically updates the width of the browser window
    function reportWindowSize() {
        if(widthOutput) {
            let width = window.innerWidth;
            dispatch(setWidth(width));
        }
    }
    window.onresize = reportWindowSize;
  }, []);

  return (
    <div id="layout" className="flex items-center flex-col">
      {children}
    </div>
  );
};

export default Layout;
