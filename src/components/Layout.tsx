import React, { FC } from "react";

const Layout: FC<{children: JSX.Element[]}> = ({children}) => {

    return (
        <div className="flex items-center flex-col">
            {children}
        </div>
    )

}


export default Layout;