import React, { FC } from "react";

const Footer: FC = () => {

    return (
        <div className="bg-yellow-900 w-full h-[20rem] flex flex-col justify-center items-center">
            <div id="footer-icon-wrapper" className="flex flex-row justify-evenly items-center w-4/6 h-[10rem] mt-6">
                <a href="https://github.com/citizensnipz" target="_blank"><div id="github-icon" /></a>
                <a href="https://www.linkedin.com/in/joshkros/" target="_blank"><div id="linkedin-icon" /></a>
                <a href="https://t.me/CitizenSnipz" target="_blank"><div id="telegram-icon" /></a>
            </div>
            <p className="text-3xl text-amber-100 about-text">&#169; Josh Kroslowitz</p>
        </div>
    )

}


export default Footer;