import React, { useState } from "react";
import allCampuses from "../data/allCampuses"; // Import your campus data

const OurRoots = () => {
  const [filter, setFilter] = useState("All");

  // Extract unique categories dynamically
  const categories = ["All", ...new Set(allCampuses.map((c) => c.category))];

  // Filter campuses based on selected category
  const filteredCampuses =
    filter === "All"
      ? allCampuses
      : allCampuses.filter((campus) => campus.category === filter);

  return (
    <section id="ourRoots" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>SVKM's</h2>
        <p>Roots</p>
      </div>
      {/* End Section Title */}

      <div id="features" className="features section">
        <div className="container">
          {/* Filter Buttons */}
          <div
            className="d-flex justify-content-center mb-4 flex-wrap gap-2"
            data-aos="fade-up"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${
                  filter === cat
                    ? "btn-theme-primary"
                    : "btn-theme-primary-outline"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Campus Grid */}
          <div className="row gy-4">
            {filteredCampuses.map((campus, index) => (
              <div
                className="col-lg-4 col-md-4"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)} // dynamic delay
                key={campus.id}
              >
                <div className="features-item campus-card">
                  {/* Dynamic Icon or Default */}
                  {/* <i
                    className="bi bi-mortarboard"
                    style={{ color: getRandomColor(), fontSize: "2rem" }}
                  ></i> */}
                  <img src={campus.logo} alt="campus logo" className="campus-logo" />
                  <h3 className="mt-2">
                    <a
                      href={campus.website_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stretched-link"
                    >
                      {campus.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Utility for random colors
const colors = [
  "#ffbb2c",
  "#5578ff",
  "#e80368",
  "#e361ff",
  "#47aeff",
  "#ffa76e",
  "#11dbcf",
  "#4233ff",
  "#b2904f",
  "#b20969",
  "#ff5828",
  "#29cc61",
];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default OurRoots;
