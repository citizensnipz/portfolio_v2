import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setWidth } from "../features/theme/themeReducer";

const Layout: FC<{children: JSX.Element[]}> = ({children}) => {
    const dispatch = useAppDispatch();
    

    useEffect(() => {
        let windowWidth = window.innerWidth;
        console.log(windowWidth)
        dispatch(setWidth(windowWidth));
    }, [])

    return (
        <div id="layout" className="flex items-center flex-col">
            {children}
        </div>
    )

}


export default Layout;