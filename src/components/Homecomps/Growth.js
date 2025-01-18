import React from "react";
import "./growth.css";

const GrowthSection = () => {
  return (
    <section className="growth-section">
        <div className="growth-div">
      <div className="growth-content">
        <h2>Accelerating your academic growth overseas</h2>
        <p>
          Our education consultants can support with excellence in guidance with
          education and visa consultancy in Nepal. We've been growing since 2003
          with over 50 branches across 15 countries. You can enjoy a wide range
          of services for fulfilling your dreams to study in Australia, the UK,
          Canada, and the US.
        </p>
      </div>
      <div className="growth-map">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/14/09/world-map-306338_640.png" // Replace this URL with the actual world map image
          alt="World Map with Branch Locations"
        />
      </div>
      </div>
      <div className="growth-stats">
        <div className="stat">
          <h3>100,000+</h3>
          <p>International Students Assisted</p>
        </div>
        <div className="stat">
          <h3>10,000+</h3>
          <p>Scholarships Approved</p>
        </div>
        <div className="stat">
          <h3>25,000+</h3>
          <p>Enrolled in IELTS/PTE Preparation Classes</p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
