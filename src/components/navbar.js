import React from "react"
import Logo from "../images/logo.svg"
import IllustrationIntro from "../images/illustration-intro.png"
import menuBar from "..//images/icons8-menu.svg";
import CloseIcon from "../images/icons8-close.svg"

function Navbar () {
return(
    <div className="  bg-Dark-Blue font-serif">
        <nav className="flex justify-between p-10">
            <div className="logo-container">
                <img className=" w-20" src={Logo} alt="logo"/>
            </div>
            <ul className="hidden md:flex gap-7 text-White">
                <li><h1 >Featurs</h1></li>
                <li><h1 >Teams</h1></li>
                <li><h1 >Sign In</h1></li>
            </ul>
            <div className="md:hidden" >
                <div id="menu"><img alt="menu" className="h-9 cursor-pointer" src={menuBar} /></div>
               <div  className="hidden md:hidden" id="close"> <img className="consor-pointer h-9" src={CloseIcon} alt="CloseIcon" /> </div>
                <div className="navigation z-10 absolute list-none text-Blue  pt-10 hidden md:hidden">
                <li><h1 >Featurs</h1></li>
                <li><h1 >Teams</h1></li>
                <li><h1 >Sign In</h1></li>
                </div>
            </div>
        </nav>
        <div className="justify-center flex">
            <div>
                <img src={IllustrationIntro} alt="Illstraction"/>
            </div>
        </div>
    </div>
)
}








export default Navbar;