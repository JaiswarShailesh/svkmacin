import React from "react";
import aboutUsBanner from "../assets/images/about_svkm_thumbnail.png";

const AboutUsSection = () => {
  return (
    // <!-- About Section -->
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={aboutUsBanner}
              className="img-fluid"
              style={{
                clipPath:
                  "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              }}
              alt="svkm building"
            />
          </div>

          <div
            className="col-lg-6 order-2 order-lg-1 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>About SVKM</h3>
            <p className="fst-italic">
              Shri Vile Parle Kelavani Mandal is a Public Charitable Trust
              registered under the Society’s Registration Act and Bombay Public
              Trust Act. From its humble beginnings in 1934, when it took over
              the Rashtriya Shala, a school established in 1921 in the wake of
              the National Movement, the Mandal today has grown into a big
              educational complex imparting high-level education to more than
              35,000 students.
            </p>
            <p>
              The ethos of the Mandal, is marked by patriotic fervor, selfless
              service and a spirit of indigenous enterprise. These values
              permeate all the institutions set up by the Mandal and are the
              guiding principles for all of them.
            </p>
            <p>
              After beginning its journey in the early 1930s SVKM has blossomed
              into an educational colossus that has attained national
              recognition in multiple streams of higher education. With a strong
              guiding philosophy of providing education to all levels of the
              student community along with creating a feeling of bonding and
              commitment amongst academic and nonacademic employees.
            </p>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    //* <!-- /About Section --> */
  );
};

export default AboutUsSection;
