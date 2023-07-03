import React from "react";
import AccessImage from "../images/icon-access-anywhere.svg";
import SecurityImage from "../images/icon-security.svg";
import CollabrationImage from "..//images/icon-collaboration.svg";
import StoreImage from "..//images/icon-any-file.svg" 
import SingleGridElement from "./SingleGridElement";


const SecondSectionGrid = () => {
    return (
        <div className=" bg-main-background w-screen text-White text-center md:pt-20 pt-36 lg:pt-0  grid md:grid-cols-2 gap-10 px-10 lg:px-64">
         <SingleGridElement
         image={AccessImage}
         header="Access your files, anywhere"
         description="The ability to use a smartphone, tablet, or computer to access your account
          means your files follow you everywhere"
         />
                <SingleGridElement
         image={SecurityImage}
         header="Security you can trust "
         description="2-factor authentication and user-controlled encryption are just a couple of the security
          features we allow to help secure your files."
         />
                 <SingleGridElement
         image={CollabrationImage}
         header=" Real-time collaboration"
         description=" Securely share files and folders with friends,
          family and colleagues for live collaboration. No email attachments required."
         />
                   <SingleGridElement
         image={StoreImage}
         header="Store any type of file"
         description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
         file types to be securely stored and shared. "
         />
        </div>
    )
}




export default SecondSectionGrid;