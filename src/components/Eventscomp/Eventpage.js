import React from "react";
import "./Eventpage.css";

import ukevent from './eventimage/uk.jpg'
import curtin from './eventimage/curtin.png'
import sop from './eventimage/sop.png'
import top from './eventimage/top.jpg'
import eventone from './eventimage/eventone.jpg'
import seminar from './eventimage/seminar.jpg'
import newyork from './eventimage/newyork.jpg'

const EventCards = () => {
  const events = [
    {
      title: "UK Special Webinar",
      date: "14th Dec, 2022 - 25th Jun, 2022",
      time: "01:31 AM - 01:31 AM",
      image: ukevent , // Replace with the actual path
    },
    {
      title: "Curtin University Special Session",
      date: "23rd Dec, 2022 - 25th Jun, 2022",
      time: "17:30 PM - 17:30 PM",
      image:curtin, // Replace with the actual path
    },
    {
      title: "SOP Session from Curtin University",
      date: "22nd Dec, 2022 - 25th Jun, 2022",
      time: "01:00 AM - 01:00 AM",
      image: sop, // Replace with the actual path
    },
    {
      title: "Scholarship Opportunities Seminar",
      date: "1st Jan, 2023 - 30th Jun, 2023",
      time: "12:00 PM - 12:30 PM",
      image: top, // Replace with the actual path
    },
    {
      title: "Study Abroad Webinar Series",
      date: "22nd Dec, 2022 - 25th Jun, 2022",
      time: "01:00 AM - 01:00 AM",
      image: eventone, // Replace with the actual path
    },
    {
      title: "Top IT Careers and Certifications for 2025",
      date: "22nd Dec, 2022 - 25th Jun, 2022",
      time: "01:00 AM - 01:00 AM",
      image: seminar, // Replace with the actual path
    },
    {
      title: "PR Pathways for Skilled Workers",
      date: "22nd Dec, 2022 - 25th Jun, 2022",
      time: "01:00 AM - 01:00 AM",
      image: newyork, // Replace with the actual path
    },
  ];


  return (
    <div className="event-heading">
       <h2>Our Events</h2>
      <p>
      ""An event is the bridge that connects ideas to reality." "
        </p>
    <div className="event-cards-container">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.image} alt={event.title} className="event-image" />
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default EventCards;
