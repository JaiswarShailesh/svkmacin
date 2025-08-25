import React, { useEffect } from "react";
import logo from "../assets/images/SVKM_logo.png";

const Navbar = () => {
  useEffect(() => {
    // Scroll effect
    const toggleScrolled = () => {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add("scrolled")
        : selectBody.classList.remove("scrolled");
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const mobileNavToogle = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

    // Hide mobile nav on link click
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    // Dropdown toggle
    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle("active");
          this.parentNode.nextElementSibling.classList.toggle(
            "dropdown-active"
          );
          e.stopImmediatePropagation();
        });
      });

    return () => {
      // cleanup listeners when component unmounts
      document.removeEventListener("scroll", toggleScrolled);
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          {/* <h1 className="sitename">SVKM</h1> */}
          <img src={logo} alt="SVKM Logo" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>About Us</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Our President</a>
                </li>
                <li>
                  <a href="#"> Past Presidents</a>
                </li>
                <li>
                  <a href="#">SVKM Leading Lady</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Awards & Achivements</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Institutes</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">School</a>
                </li>
                <li>
                  <a href="#">Junior College</a>
                </li>
                <li>
                  <a href="#">Degree & Post Graduate</a>
                </li>
                <li>
                  <a href="#">
                    Professional Institutes/Deemed-to-be-University
                  </a>
                </li>
                <li>
                  <a href="#">
                    Ketkiben Mukeshbhai Patel, Central Library (Shirpur)
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Tender Notices</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Hospital</a>
                </li>
                <li>
                  <a href="#">Civil</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Student Facilities</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">student Counselling</a>
                </li>
                <li>
                  <a href="#">Accomdation</a>
                </li>
                <li>
                  <a href="#">Placement & softskill</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Community</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">News & updates </a>
                </li>
                <li>
                  <a href="#">Event</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/events">Careers</a>
            </li>
            <li>
              <a href="/events">Contact Us</a>
            </li>

            {/* <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* <a className="btn-getstarted" href="/courses">
          Get Started
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;
