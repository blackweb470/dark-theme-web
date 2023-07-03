import React from "react";
import SingleTestimonialUi from "../testimonial/SingleTestimonialUi"
import Profile1 from "./profile/profile-1.jpg"
import Profile2 from "./profile/profile-2.jpg"
import Profile3 from "./profile/profile-3.jpg"
import Quote from "./profile/bg-quotes.png"


const TestimonialUi = () => {
return(
    <div className=" bg-main-background lg:h-45rem  md:h-60rem  xl:h-40rem p-4 md:p-32">
        <img src={Quote} alt="Quote" />
       <div className="grid lg:grid-cols-3  gap-5 md:grid-cols-2">
       <SingleTestimonialUi
        picture={Profile1}
        name="Satish Patel"
        occupation="Founder & CEO, Huddle"
        />
        <SingleTestimonialUi
        picture={Profile2}
        name="Bruce McKenzie"
        occupation="Founder & CEO, Huddle"
        />
        <SingleTestimonialUi
        picture={Profile3}
        name="Iva Boyd"
        occupation="Founder & CEO, Huddle"
        />
       </div>
    </div>
)
}


export default TestimonialUi;