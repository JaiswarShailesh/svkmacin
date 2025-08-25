import React from "react";
import SectionHeader from "./sectionHeader";
import newsAndEvents from "../data/newsAndEvents";

const NewsAndEventsSection = () => {
  const featuredNews = newsAndEvents.find((item) => item.type === "featured");
  const otherNews = newsAndEvents.filter((item) => item.type !== "featured");

  return (
    <section id="newsAndEvents" className="newsAndEvents section">
      <SectionHeader title={`SVKM's`} subTitle={"News & Events"} />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Featured News */}
          {featuredNews && (
            <div className="col-lg-6">
              <div className="card border-0 mb-4">
                <a href={featuredNews.link}>
                  <img
                    className="card-img-top"
                    src={featuredNews.image}
                    alt={featuredNews.title}
                  />
                </a>
                <div
                  className="date-pos text-center text-white p-3 bg-theme-primary"
                  title={`${featuredNews.author}  ${featuredNews.date}`}
                >
                  {featuredNews.author} &nbsp; &nbsp; {featuredNews.date}
                </div>
                <h5 className="font-weight-medium mt-3">
                  <a
                    href={featuredNews.link}
                    className="link text-decoration-none"
                  >
                    {featuredNews.title}
                  </a>
                </h5>
                <p className="m-t-20">{featuredNews.description}</p>
              </div>
            </div>
          )}

          {/* Other News */}
          <div className="col-lg-6">
            <div className="row">
              {otherNews.map((news) => (
                <div className="col-md-6" key={news.id}>
                  <div className="card border-0 mb-4">
                    <a href={news.link}>
                      <img
                        className="card-img-top"
                        src={news.image}
                        alt={news.title}
                      />
                    </a>
                    <div className="date-pos text-center text-white p-3 bg-theme-primary">
                      {news.author} &nbsp; &nbsp; {news.date}
                    </div>
                    <h6 className="font-weight-medium mt-3">
                      <a href={news.link} className="link text-decoration-none">
                        {news.title}
                      </a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;
