import React from "react";
import Logo from "..//images/logo.svg"
import LocationIcon from "../images/icon-location.svg"
import TelephoneIcon from "../images/icon-phone.svg"
import Email from "../images/icon-email.svg";
import FacebookIcon from "../images/icons8-facebook (1).svg"
import TwitterIcon from "../images/icons8-twitter-logo.svg"
import InstagramIcon from "../images/icons8-instagram.svg"

function Footer () {
    return(
        <div className=" p-10 bg-footer-background w-screen md:px-28 font-serif  text-White">
            <div className="md:grid  gap-10 md:grid-cols-2 space-y-10 lg:grid-cols-3 xl:grid-cols-5">
                <div className="space-y-4">
                     <img src={Logo} alt="logo" className="w-20"></img>
                        <div className="flex gap-5 ">
                            <img alt="locationIcon" src={LocationIcon} className="w-3 h-8" />
                            <p className="opacity-40 text-sm md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                 eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-5">
                  <img src={TelephoneIcon} alt="telephone" className="" />
                  <span className="opacity-40">+1-543-123-4567</span>
                  </div>
                  <div className="flex gap-5">
                  <img src={Email} alt="email" />
                  <span className="opacity-40">example@fylo.com</span>
                  </div>
                </div>
                <div>
                    <ul className="opacity-40">
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                <ul className="opacity-40">
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="pt-5 md:-0">
                <ul className="flex gap-5">
                      <div className="border w-9 flex justify-center h-9 rounded-full "> <img className="w-6" alt="facebook" src={FacebookIcon} /></div>
                       <div className="border w-9 flex justify-center h-9 rounded-full "><img className="w-6" alt="twitter" src={TwitterIcon} /></div>
                        <div className="border w-9 flex justify-center h-9 rounded-full "><img className="w-6" alt="instagram" src={InstagramIcon} /></div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer; 