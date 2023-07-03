import React from "react";


class LastSection extends React.Component {

render() {
    return(
           <div className="bg-footer-background w-screen relative  px-4 md:px-36  xl:px-96 ">
            <div className="text-center  bg-testimonials-background shadow-2xl p-7 font-serif mx-auto  relative top-6   md:-top-28 xl:-top-32 space-y-10 rounded-md">
                <div className="space-y-4"> 
                    <h1 className="text-2xl text-White"> Get early access today</h1>
                    <p className="text-sm text-white opacity-40" >It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
                         our support team would be happy to help you</p>
                </div>
                <div className="md:flex gap-3 space-y-10 md:space-y-0">
                    <input className="w-100% h-12 rounded-3xl pl-4" placeholder="email@emample.com" />
                    <button className=" bg-Blue text-White rounded-3xl w-100% h-12">Get Started For Free</button>
                </div>
            </div>
        </div>
    )
}

}

export default LastSection;