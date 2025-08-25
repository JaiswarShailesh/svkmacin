import React from "react";
import CountUp from "react-countup";
import stats from "../data/stats";

const KeyHighLights = () => {
  return (
    <section id="counts" class="section counts light-background">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          {stats.map((item) => (
            <div class="col-lg-3 col-md-6" key={item.id}>
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <span className="purecounter">
                  <CountUp end={item.end} duration={2} suffix={item.suffix} />
                </span>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighLights;
