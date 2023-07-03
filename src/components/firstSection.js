import React from "react";
import DesktopCurve from "../images/bg-curvy-desktop.svg"
import MobileCurve from "../images/bg-curvy-mobile.svg"

function FirstSection () {
return(
    <div className=" bg-Dark-Blue w-screen font-serif">
        <div className="text-White relative">
            <img className="hidden md:block w-screen" src={DesktopCurve} alt="curve"/>
           <img className="md:hidden w-screen"  src={MobileCurve} alt="curve"/>
            <div className="flex justify-center text-center">
            <div className="space-y-7 md:space-y-4text-center absolute top-0 md:top-3 w-20rem md:w-38rem">
                <h1 className=" md:text-3xl font-bold ">All your files in one secure location, accessible anywhere.</h1>
                <p className="text-xs md:text-lg opacity-40">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                 <button className="h-14 w-56 rounded-full bg-Blue">Get Started</button>
            </div>
            </div>
        </div>
    </div>
)
}




export default FirstSection;