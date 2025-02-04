import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faGlobe,
  faPlaneDeparture,
  faFileAlt,
  faPassport,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./service.css"; // Import your CSS file

function Service() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divId) => {
    setHoveredDiv(divId);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    <div className="service-container">
      <div className="service-heading">Services</div>
      <div className="service-headtext">
        "The greatest glory in living lies not in never falling, but in rising
        every time we fall."
      </div>

      <div className="service-topics">
        <div
          className={`service-div ${hoveredDiv === "career" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("career")}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faLightbulb}
              className="icon services-icon"
            />{" "}
            Career Counselling
          </h3>
          <p>
            Assists in identifying and developing essential skills for career
            success, such as communication, problem-solving, and critical
            thinking.
          </p>
          <Link to="/offer" className="readmore">
            Read More →
          </Link>
        </div>

        <div
          className={`service-div ${hoveredDiv === "test" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("test")}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="icon services-icon"
            />
            Test Preparation
          </h3>
          <p>
            Lexis Education Center helps you to develope your skill of languages
            by various test such as IELTS, PTE, TOFEL, NAT, SAT, GRE and many
            more.
          </p>
          <Link to="/offer" className="readmore">
            Read More →
          </Link>
        </div>

        <div
          className={`service-div ${hoveredDiv === "visa" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("visa")}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            <FontAwesomeIcon icon={faPassport} className="icon services-icon" />
            Visa Processing
          </h3>
          <p>
            We understand that visa applications can be stressful. Our dedicated
            team provides personalized support and guidance, making the process
            as smooth and stress-free as possible.
          </p>
          <Link to="/offer" className="readmore">
            Read More →
          </Link>
        </div>

        <div
          className={`service-div ${hoveredDiv === "travel" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("travel")}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className="icon services-icon"
            />
            Travel Assistance
          </h3>
          <p>
            Focus on your studies, not travel logistics. Our travel assistance
            services take care of all your travel arrangements, from flights and
            accommodation to visa assistance.
          </p>
          <Link to="/offer" className="readmore">
            Read More →
          </Link>
        </div>

        <div
          className={`service-div ${hoveredDiv === "ielts" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("ielts")}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            <FontAwesomeIcon icon={faGlobe} className="icon services-icon" />
            Learning Center
          </h3>
          <p>
            Discover the beauty of Korean and Japanese languages with our expert
            guidance. Start your journey today and unlock new cultural horizons
            and endless opportunities!
          </p>
          <Link to="/offer" className="readmore">
            Read More →
          </Link>
        </div>

        <div
          className={`service-div ${
            hoveredDiv === "documentation" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("documentation")}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            {" "}
            <FontAwesomeIcon icon={faFileAlt} className="icon services-icon" />
            Documentation Guidance
          </h3>
          <p>
            By offering documentation guidance, abroad education consultancies
            can help students navigate the often complex and confusing process
            of applying to study abroad.
          </p>
          <Link to="/offer" className="readmore">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
