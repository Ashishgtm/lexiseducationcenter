import React from "react";
import "../MainCss.css";
import australia from "./australia.png";
const universities = [
  {
    name: "The University of Adelaide",
    location: "Adelaide SA 5005, Australia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtqG627gnjOcNGoJ7mWnPmkoIVg1ThdEgFg&s",
  },
  {
    name: "Australian Catholic University",
    location: "115 Victoria Parade, Fitzroy VIC 3065, Australia",
    image:
      "https://images-intl.prod.aws.idp-connect.com/commimg/video/CH/myhc_368026.jpg",
  },
  {
    name: "Charles Darwin University",
    location: "	Ellengowan Drive, Darwin, Northern Territory, 0810, Australia",
    image:
      "https://images.squarespace-cdn.com/content/v1/63edd9aa49ca9d1e9422aa05/ae2adb13-2bd5-47e1-a449-d0b5ca51f02e/CDU-MAGE-B_NO-LOGO-scaled.jpeg",
  },
  {
    name: "Curtin University",
    location: "Kent St, Bentley WA 6102, Australia",
    image:
      "https://s30991.pcdn.co/wp-content/uploads/sites/4/2023/06/curtin-perth-2000x1000px-scaled.jpg.optimal.jpg",
  },
  {
    name: "La Trobe University",
    location: "	Plenty Road, Melbourne, Victoria, 3086, Australia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlZhzZ0-ERmOaFld_MuP7GBoqIHkWi4Jxzw&s",
  },
  {
    name: "Macquarie University",
    location: " Balaclava Rd, Macquarie Park NSW 2113, Australia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHn48V8x3axB1N1OUiUGNAdmclClZ8LbxPg&s",
  },
];

const StudyJapan = () => {
  return (
    <div className="hero-container">
      <div className="university-header">
        <div>
          <h1>Study In Australia </h1>
        </div>
        <div>
          <img src={australia} alt="university" className="uni-flag" />
        </div>
      </div>
      <p className="description">
        Australia is renowned for its world-class education system, diverse
        culture, and high quality of life. With globally recognized
        universities, a welcoming environment, and post-study work
        opportunities, Australia is a top choice for international students.
      </p>
      <h2>Why Study in Australia?</h2>
      <ol>
        <span className="lexis-text">
          <li>Top-Ranked Universities</li>
        </span>
        <p>
          Australia is home to prestigious institutions like the University of
          Melbourne, Australian National University (ANU), and the University of
          Sydney, which consistently rank among the best in the world..
        </p>

        <span className="lexis-text">
          <li>Scholarships and Financial Aid</li>
        </span>
        <p>
          Numerous scholarships, such as the Australia Awards and
          university-specific grants, are available to support international
          students.
        </p>

        <span className="lexis-text">
          <li>Research and Technology</li>
        </span>
        <p>
          Australia is a hub for cutting-edge research and innovation, offering
          students access to state-of-the-art facilities and opportunities to
          work on groundbreaking projects.
        </p>

        <span className="lexis-text">
          <li>Career Opportunities</li>
        </span>
        <p>
          Graduates can benefit from Australia’s strong economy and post-study
          work visa options, allowing them to gain valuable work experience in
          fields like engineering, healthcare, and business.
        </p>
      </ol>
      {/* <h2>Popular Courses for International Students</h2>
      <ul>
        <li>Engineering & Technology</li>
        <li>Business & Management</li>
        <li>Artificial Intelligence & Robotics</li>
        <li>Healthcare & Medicine</li>
        <li>Information Technology (IT) & Computer Science</li>
        <li>Environmental Science & Sustainability</li>
        <li>Hospitality & Tourism</li>
      </ul>
      <h2>Requirements to Study in Australia</h2>
      <ul>
        <li>Valid passport</li>

        <li>Offer letter from an Australian university</li>

        <li>Student Visa (Subclass 500)</li>

        <li>
          Proof of financial stability (to cover tuition and living expenses)
        </li>

        <li>English proficiency test scores (e.g., IELTS, TOEFL, or PTE)</li>

        <li>Health insurance (Overseas Student Health Cover - OSHC)</li>
      </ul> */}
      <h2>Top Universities in Australia</h2>
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
