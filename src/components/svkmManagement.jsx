import React from "react";

const SvkmManagementSection = () => {
  return (
    <section id="administrationSection" className="testimonials section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>SVKM's</h2>
        <p>Administration</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div id="pricing" className="pricing section">
          <div className="container">
            <div className="row gy-3">
              <div
                className="col-xl-6 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="pricing-item">
                  <h3>Managing Commitee</h3>
                  <p>
                    It is the supreme body authorized to take decisions on all
                    matters including the financial aspects of SVKM which has 30
                    members and 9 Trustees
                  </p>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="pricing-item">
                  <h3>Executive Commitee</h3>
                  <p>
                    It has 59 members and is expected to meet every month and
                    take decisions on various matters of policy
                  </p>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SvkmManagementSection;
