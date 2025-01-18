import React from "react";
import "./Teampage.css";
import Bishal from './Team-image/bishal.jpg'
import Bettye from './Team-image/president.jpg'
import Finance from './Team-image/finance.jpg'
import Cheif from './Team-image/cheif.jpg'
import Thomas from './Team-image/Thomas.jpg'
import Reception from './Team-image/reception.jpg'
const Team = () => {
  const teamMembers = [
    {
      name: "Kazzi Bishal Raj Basnet",
      title: "CEO & Co-Founder",
            image:Bishal  
          },
    {
      name: "Bettye Steuber",
      title: "President",
      image: Bettye, 
    },
    {
      name: "Lana Rodhes",
      title: "Chief Financial Officer",
      image: Finance, 
    },
    {
        name: "Brian Duffy",
        title: "Proffessor",
              image:Cheif,
            },
      {
        name: "Thomas Shelby",
        title: "Chief Marketing Officer",
        image: Thomas, 
      },
      {
        name: "Alina Lopez",
        title: "Receptionist",
        image: Reception, 
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
