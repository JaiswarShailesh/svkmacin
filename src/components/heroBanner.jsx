import React, { useEffect } from "react";
import bannerImage from "../assets/images/svkm_hero_banner.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src={bannerImage} alt="Ayurveda Hero Banner" data-aos="fade-in" />

        <div className="container">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Healing with Tradition,
            <br />
            Empowering with Knowledge
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Bringing the ancient wisdom of Ayurveda to modern healthcare.
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="courses.html" className="btn-get-started">
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </>
  );
};

export default HeroBanner;
