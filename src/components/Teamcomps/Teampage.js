import React from "react";
import "./Teampage.css";
import Bishal from './Team-image/bishal.png'
import Chairman from './Team-image/Director.JPG'
import Senior from './Team-image/senior-adviser.png'
import John from './Team-image/john.JPG'
import Aashma from './Team-image/aasma.JPG'
import Aadit from './Team-image/aadit.jpg'
const Team = () => {
  const teamMembers = [
    {
      name: "Bibek Basnet",
      title: "Chairman",
            image:Chairman  
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
        name: "John Karki",
        title: "Counsellor",
              image:John,
            },
     
      {
        name: "Aadit Thapa",
        title: "Destination Head",
        image: Aadit, 
      },
      {
        name: "Aashma Shrestha",
        title: "Recepionist",
        image: Aashma, 
      },
  ];


  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <p>
      "Alone we can do so little; together we can do so much."
        </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
