import React from "react";
import ProductiveImage from "../images/illustration-stay-productive.png"

const SectionThree = () => {
return(
    <div>
        <div className="bg-main-background w-screen font-serif md:flex  p-10 pt-20 text-white  gap-10">
            <div className=" ">
                <img className=" w-100%" src={ProductiveImage} alt="illustration" />
            </div>
            <div className="pt-10 md:pt-10 space-y-4  lg:space-y-7">
                <h1 className="text-4xl font-bold md:w-80"> Stay productive, wherever you are</h1>
                <p className="xl:text-lg opacity-40 text-sm lg::w-38rem">Never let location be an issue when accessing your files. Fylo 
                    has you covered for all of your file storage needs.</p>
            <p className="xl:text-lg text-sm opacity-40 lg:w-38rem">Securely share files and folders with friends, family and colleagues for live 
                collaboration. No email attachments required.</p>
            </div>

        </div>
    </div>
)


}

export default SectionThree;



