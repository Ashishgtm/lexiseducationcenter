import React from "react";
import "../MainCss.css";
import canada from "./Canadaflag.png"; // Assuming you have a Canada flag image

const universities = [
  {
    name: "University of Toronto",
    location: "27 King's College Cir, Toronto, ON M5S 1A1, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6m27gjsbQtMG_ZLd5DiXXosht3abtkmM7jQ&s",
  },
  {
    name: "Confederation College",
    location: "	P.O. Box 398, 1450 Nakina Drive, Thunder Bay, Ontario, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBULOZFVWEuLBSmovgTPW5apmwC-jDsMfgdg&s",
  },
  {
    name: "Cape Breton University",
    location: " 1250 Grand Lake Rd, Sydney, NS B1M 1A2, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXKLk8BQAU9B8bLM_KpR4PvPPgIkHKqjB_A&s",
  },
  {
    name: "Capilano University",
    location: "2055 Purcell Way, North Vancouver, BC V7J 3H5, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUn3_I4nnZUAlbmIj0bQzTeWfPDcKoPF2iIg&s",
  },
  {
    name: "Lakeland College",
    location: " 5707 College Dr, Vermilion, AB T9X 1K5, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx7dC2Z93VYWembrrSr7EKdSZtcy7fRVoAg&s",
  },
  {
    name: "University Canada West",
    location: " 626 West Pender Street, Vancouver, V6B 1V9, Canada",
    image:
      "https://www.ucanwest.ca/_next/image?url=https%3A%2F%2Fwpvip.guscancolleges.ca%2Fucanwest%2Fwp-content%2Fuploads%2Fsites%2F3%2F2022%2F11%2FUCW-Vancouver-House-Campus-3.webp&w=3840&q=100",
  },

  {
    name: "Stenberg College",
    location: "13450 102 Ave Suite 750, Surrey, BC V3T 5X3, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5vEX2O8y1-63n6ePXo5rgq6phf9NZDRG0w&s",
  },
  {
    name: "Yorkville University ",
    location: "Ontario, British Columbia, and New Brunswick, Canada",
    image:
      "https://images.shiksha.com/mediadata/images/1544506324php4ZI38w.jpeg",
  },
  {
    name: "Matrix College",
    location: " 320 Boul Crémazie E #300, Montreal, Quebec H2P 0C5, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK0QI9uzd6vYlKo_FVSr0s88kEgN2axfKkA&s",
  },
  {
    name: "Mount Saint Vincent University",
    location: "166 Bedford Hwy, Halifax, NS B0N 2T0, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lShmjbW5meDfwRLAQQS1AtMbnVgvOcqpFQ&s",
  },
  {
    name: "Wilfrid Laurier University Waterloo Campus",
    location: " 75 University Ave W, Waterloo, ON N2L 3C5, Canada",
    image:
      "https://www.applyboard.com/_next/image?url=https%3A%2F%2Fphotos.applyboard.com%2Fschool_photos%2F000%2F016%2F856%2Fphotos%2Foptimized%2FWilfrid-Laurier-University-March2022.webp%3F1659728025&w=3840&q=75",
  },
  {
    name: "Mohawk College",
    location: " 135 Fennell Ave W, Hamilton, ON L9C 0E5, Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbYICJwQJOR5PHQ9Y-XFO0mCqh0sbQ8yI_A&s",
  },
];

const StudyCanada = () => {
  return (
    <div className="hero-container">
      <div className="university-header">
        <div>
          <h1>Study In Canada </h1>
        </div>
        <div>
          <img src={canada} alt="university" className="uni-flag" />
        </div>
      </div>
      <p className="description">
        Canada is renowned for its world-class education system, diverse
        culture, and high quality of life. With globally recognized
        universities, a welcoming environment, and post-study work
        opportunities, Canada is a top choice for international students.
      </p>
      <h2>Why Study in Canada?</h2>
      <ol>
        <span className="lexis-text">
          <li>Top-Ranked Universities</li>
        </span>
        <p>
          Canada is home to prestigious institutions like the University of
          Toronto, University of British Columbia, and McGill University, which
          consistently rank among the best in the world.
        </p>

        <span className="lexis-text">
          <li>Scholarships and Financial Aid</li>
        </span>
        <p>
          Numerous scholarships, such as the Canada Graduate Scholarships and
          university-specific grants, are available to support international
          students.
        </p>

        <span className="lexis-text">
          <li>Research and Technology</li>
        </span>
        <p>
          Canada is a hub for cutting-edge research and innovation, offering
          students access to state-of-the-art facilities and opportunities to
          work on groundbreaking projects.
        </p>

        <span className="lexis-text">
          <li>Career Opportunities</li>
        </span>
        <p>
          Graduates can benefit from Canada’s strong economy and post-study work
          visa options, allowing them to gain valuable work experience in fields
          like engineering, healthcare, and business.
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
      <h2>Requirements to Study in Canada</h2>
      <ul>
        <li>Valid passport</li>

        <li>Offer letter from a Canadian university</li>

        <li>Student Visa (Study Permit)</li>

        <li>
          Proof of financial stability (to cover tuition and living expenses)
        </li>

        <li>English proficiency test scores (e.g., IELTS, TOEFL, or PTE)</li>

        <li>Health insurance (mandatory for international students)</li>
      </ul> */}
      <h2>Top Universities / Colleges in Canada</h2>
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

export default StudyCanada;
