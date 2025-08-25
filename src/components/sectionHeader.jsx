import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
