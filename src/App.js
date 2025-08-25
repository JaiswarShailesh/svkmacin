import React from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Footer from "./components/footer";
import Courses from "./components/courses";
import AboutUsSection from "./components/aboutUsSection";
import SvkmManagementSection from "./components/svkmManagement";
import IndiaMap from "./components/map";
import OurRoots from "./components/ourRoots";
import TestimonialSection from "./components/testimonialSection";
import KeyHighLights from "./components/keyHighlights";
import NewsAndEventsSection from "./components/newsAndEventsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutUsSection />
      <KeyHighLights />
      <SvkmManagementSection />
      {/* <Courses /> */}
      {/* <IndiaMap /> */}
      <OurRoots />
      <NewsAndEventsSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default App;
