import React, { useState } from "react";
import "./Teampage.css";
import Bishal from './Team-image/bishal.png'
import Chairman from './Team-image/Director.JPG'
import Senior from './Team-image/senior-adviser.png'
import Languageteacher from './Team-image/language-teacher.jpeg'
import John from './Team-image/john.JPG'
import Priti from './Team-image/pretti.jpg'
import Aadit from './Team-image/aadit.jpg'
import Ashish from './Team-image/Ashish.jpg'

const Team = () => {
  const [isHovering, setIsHovering] = useState(false);

  const teamMembers = [
    {
      name: "Bibek Basnet",
      title: "Chairman",
      image: Chairman  
    },
    {
      name: "Bishal Basnet",
      title: "CEO",
      image: Bishal, 
    },
    {
      name: "Doyong Jung",
      title: "Senior Advisor",
      image: Senior, 
    },
    {
      name: "Raj Tamang",
      title: "Korean Language Instructor",
      image: Languageteacher, 
    },
    {
      name: "John Karki",
      title: "Counsellor",
      image: John,
    },
    {
      name: "Aadit Thapa",
      title: "Destination Head",
      image: Aadit, 
    },
    {
      name: "Priti Lama",
      title: "Recepionist",
      image: Priti, 
    },
    {
      name: "Ashish Gautam",
      title: "IT Head",
      image: Ashish, 
    },
  ];

  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <p>
        "Alone we can do so little; together we can do so much."
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => {
          const isAshish = member.name === "Ashish Gautam";

          const card = (
            <div className="team-card" key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                {isAshish && isHovering && (
                  <div className="hover-overlay">
                    <span>Click Me</span>
                  </div>
                )}
              </div>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          );

          return isAshish ? (
            <a
              key={index}
              href="https://www.aashish-gautam.com.np"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="ashish-link"
            >
              {card}
            </a>
          ) : (
            card
          );
        })}
      </div>
    </div>
  );
};

export default Team;