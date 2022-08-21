import React, { FC } from "react";
import profilePic from "../img/japanese_josh.jpeg";

const About: FC = () => {

    return (
        <div id="about-bg" className="w-full h-screen flex justify-center relative">
            <div id="about-arrow" className="top-[-4.5rem] absolute"></div>
            <h1 className="text-3xl font-bold underline">About</h1>
            <div className="absolute right-10">
            <img id="profile-pic" src={profilePic} height="20rem" width="600px" />
            </div>
            
        </div>
    )

}


export default About;