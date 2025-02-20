import React from "react";
import Ukflag from "./uk-flag.png";
import "../MainCss.css";
const universities = [
  {
    name: "University Of Sunderland",
    location: " Sunderland, UK",
    image:
      "https://images.shiksha.com/mediadata/images/1537432048phphoR0m5.jpeg",
  },
  {
    name: "Cardiff University",
    location: "Cardiff CF10 3AT,UK",
    image:
      "https://images.shiksha.com/mediadata/images/1534412382phpYPav1d.jpeg",
  },
  {
    name: "University of the West of Scotland",
    location: "Hamilton International Technology Park, Stephenson Pl, Blantyre, Glasgow G72 0LH, UK",
    image:
      "https://www.uws.ac.uk/media/2915/lanarkshire-campus-uws-5.jpg?width=400&height=300&v=1dab69a1f0fd100",
  },
  {
    name: "University of East London",
    location: "University Way, London E16 2RD, UK",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8iQfIkYd-FmPFDrXMcIt5UKn0zoL37rbMQ&s",
  },
  {
    name: "The University of Buckingham",
    location: "Hunter St, Buckingham MK18 1EG,",
    image:
      "https://www.torriseconsultancy.com/wp-content/uploads/2017/11/FI-Why-Study-at-The-University-of-Buckingham-1024x480.jpg",
  },
  {
    name: "London Metropolitan University",
    location: "166-220 Holloway Rd, London N7 8DB, UK",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO-xH_m2ELt4SNCMr8UWkn8l0BQ4Ip77TUrDvEa=s680-w680-h510",
  },
  {
    name: "BPP University",
    location: " 142 Uxbridge Rd, London W12 8AA, UK",
    image:
      "https://images.shiksha.com/mediadata/images/1411040730phpL3WRkg_g.jpg",
  },
  {
    name: "University of Greenwich",
    location: "Old Royal Naval College, Park Row, London SE10 9LS, UK",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_uor4fMisSx6rS_YduCB3RQos4sCs1kO0yjXZymTvzu0-vwZKaReRi1NNv9Pgxh9B2J9W0Fbqqs9fNmawm60FvA-7HH6-MWuk2dT4BVSaBjc-pgOknhcpnjlzQCmMct2brBQ=s680-w680-h510",
  },
  {
    name: "Middlesex University London",
    location: "The Burroughs, London NW4 4BT, UK",
    image:
      "https://pxlv6-mdxacuk.terminalfour.net/fit-in/2200x1610/filters:quality(75)/19x0:1581x1143/prod01/channel_3/media/training-area/training-archive/Middlesex_University,_The_Burroughs,_Hendon.jpg",
  },
];

const StudyJapan = () => {
  return (
    <div className="hero-container">
      <div className="university-header">
        <div>
          <h1>Study In UK </h1>
        </div>
        <div>
          <img src={Ukflag} alt="university" className="uni-flag" />
        </div>
      </div>
      <p className="description">
        The United Kingdom is globally recognized for its prestigious
        universities, rich history, and cultural diversity. With a long-standing
        reputation for academic excellence and a wide range of courses, the UK
        is a top destination for international students.
      </p>
      <h2>Why Study in UK?</h2>
      <ol>
        <span className="lexis-text">
          <li>World-Class Universities</li>
        </span>
        <p>
          The UK is home to some of the world’s most prestigious institutions,
          including the University of Oxford, University of Cambridge, Imperial
          College London, and University College London (UCL).
        </p>

        <span className="lexis-text">
          <li>Scholarships and Financial Aid</li>
        </span>
        <p>
          Numerous scholarships, such as the Chevening Scholarship, Commonwealth
          Scholarship, and university-specific grants, are available to support
          international students.
        </p>

        <span className="lexis-text">
          <li>Innovation and Research</li>
        </span>
        <p>
          The UK is a global leader in research and innovation, offering
          students access to cutting-edge facilities and opportunities to work
          on groundbreaking projects.
        </p>

        <span className="lexis-text">
          <li>Career Opportunities</li>
        </span>
        <p>
          Graduates can benefit from the UK’s strong economy and post-study work
          visa (Graduate Route), which allows them to stay and work in the UK
          for up to two years (or three years for PhD graduates).
        </p>
        <span className="lexis-text">
          <li>Cultural Experience</li>
        </span>
        <p>
          The UK offers a rich cultural experience, with its historic landmarks,
          vibrant cities, and diverse communities, making it an exciting place
          to live and study.
        </p>
      </ol>
      {/* <h2>Popular Courses for International Students</h2>
      <ul>
        <li>Business & Management</li>
        <li>Engineering & Technology</li>
        <li>Medicine & Healthcare</li>
        <li>Law & International Relations</li>
        <li>Computer Science & Artificial Intelligence</li>
        <li>Arts, Design, and Humanities</li>
      </ul>
      <h2>Requirements to Study in the UK</h2>
      <ul>
        <li>Valid passport</li>
        <li>Offer letter from a UK university</li>
        <li>Student Visa (Tier 4 Visa)</li>
        <li>
          Proof of financial stability (to cover tuition fees and living
          expenses)
        </li>
        <li>English proficiency test scores (e.g., IELTS, TOEFL, or PTE)</li>
        <li>Tuberculosis (TB) test results (if required)</li>
        <li>
          Health surcharge payment (for access to the UK’s National Health
          Service - NHS)
        </li>
      </ul> */}
      <h2>Top Universities in UK</h2>
      <div className="hero-unis">
        {universities.map((uni, index) => (
          <div key={index} className="uni-card">
            <img src={uni.image} alt={uni.name} className="hero-uni" />
            <p className="uni-name">{uni.name}</p>
            <p className="uni-location">{uni.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyJapan;
