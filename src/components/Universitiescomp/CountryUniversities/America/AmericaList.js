import React from "react";
import americaflag from './americaflag.png'
import '../MainCss.css'
const universities = [
  {
    name: "Webster University",
    location: "470 E Lockwood Ave,Webster Groves, MO 63119,USA",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIKifGa-2xx1pgNgvRuYNfmjgkhBmPV26FA&s',
  },
  {
    name: "Washington University of Science and Technology (WUST)",
    location: "2900 Eisenhower Ave, Alexandria, VA 22314,USA",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoQRUPh8EHmRllPZQvlN3JPXnh6iK5qZiUw&s',
  },
  {
    name: "California Miramar University",
    location: "3550 Camino Del Rio N #208, San Diego, CA 92108, USA",
    image: 'https://www.calmu.edu/hubfs/CMU_December2023/images/1498047526phpp5UGhY.png',
  },
  {
    name: "Texas State University",
    location: "601 University Dr, San Marcos, TX 78666, USA",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8TI3pB3S59tr5CctRJPAgZR-32VpKTyoHA&s',
  },
  {
    name: "Arkansas State University",
    location: "2105 East Aggie Rd, Jonesboro, AR 72401,USA",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPpQ-km-5aBCulDIddU2M6V-SF4YPQ5Gxow&s',
  },
  {
    name: "Stanton University",
    location: " 888 Disneyland Dr # 400, Anaheim, CA 92802, USA",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMBznWs-EHAGemYTtNTUKizC6AEn6F2qoyw&s',
  },
  {
    name: "Wilkes University ",
    location: " 84 W South St, Wilkes-Barre, PA 18766, USA",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcRJwaSrYhn0O1K8CETxRvUQPhEtqXRAnnw&s',
  },
];

const StudyUSA = () => {
  return (
    <div className="hero-container">
  <div className="university-header">
        <div>
      <h1>Study In USA </h1></div>
      <div><img src={americaflag} alt="university" className="uni-flag"/>
      </div></div>
      <p className="description">
     
        The United States is home to some of the world's top-ranked universities, offering
        high-quality education, diverse research opportunities, and excellent career prospects.
        With cutting-edge technology, innovative teaching methods, and cultural diversity,
        studying in the USA is a dream for many international students.
      </p>
      <h2>Why Study in the USA?</h2>
      <ol>
        <span className="lexis-text"><li>World-Renowned Universities</li></span>
        <p>The USA has many globally recognized institutions like Harvard, Stanford, and MIT.</p>
        
        <span className="lexis-text"><li>Scholarship Opportunities</li></span>
        <p>There are numerous scholarships and financial aid options for international students.</p>
        
        <span className="lexis-text"><li>Research and Innovation</li></span>
        <p>The USA leads in research and technological advancements in multiple fields.</p>
        
        <span className="lexis-text"><li>Job and Internship Prospects</li></span>
        <p>Students can find internship opportunities and work placements with top global companies.</p>
      </ol>
      {/* <h2>Popular Courses for International Students</h2>
      <ul>
        <li>Computer Science & IT</li>
        <li>Business & Management</li>
        <li>Engineering & Technology</li>
        <li>Data Science & AI</li>
        <li>Health Sciences</li>
      </ul>
      <h2>Requirements to Study in the USA</h2>
      <ul>
        <li>Valid passport</li>
        <li>University acceptance letter</li>
        <li>F-1 Student Visa</li>
        <li>Proof of financial stability</li>
        <li>English proficiency test scores (TOEFL/IELTS)</li>
      </ul> */}
      <h2>Top Universities in the USA</h2>
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

export default StudyUSA;