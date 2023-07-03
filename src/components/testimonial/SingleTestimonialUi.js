import React from "react";

const SingleTestimonialUi = (props) => {
    return(
        <div>
            <div className=" font-Fraunces text-White bg-testimonials-background rounded-md p-10 space-y-10  shadow-2xl ">
                <div><p>See how Fylo works Fylo has improved our team productivity by an order of magnitude. Since making the
                     switch our team has become a well-oiled collaboration machine.</p></div>
                <div className="flex gap-4">
                    <div><img className=" w-14 rounded-full" alt="" src={props.picture}  /></div>
                    <div className=" font-serif pt-2">
                        <h1 className="text-xs">{props.name}</h1>
                       <h1 className=" opacity-30 text-xs"> {props.occupation}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SingleTestimonialUi;