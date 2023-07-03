import React from "react";
import Navbar from "./components/navbar"
import FirstSection from "./components/firstSection";
import SecondSectionGrid from "./components/SecondSectionGrid";
import SectionThree from "./components/sectionthree";
import SingleTestimonialUi from "../src/components/testimonial/Testimonial"
import LastSection from "./components/LastSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FirstSection />
    <SecondSectionGrid />
    <SectionThree />
    <SingleTestimonialUi />
    <LastSection />
    <Footer />
    </div>
  );
}

export default App;
