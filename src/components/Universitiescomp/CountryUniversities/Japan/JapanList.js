import React from "react";
import '../MainCss.css'
import japanflag from './japanflag.png'

const universities = [
  {
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    image: "https://www.tohoku.ac.jp/en/news/images/075_meets_the_standards_required_to_be_accredited_as_a_university_ta.jpg",
  },
  {
    name: "Kyoto University",
    location: "Kyoto, Japan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/220px-Kyoto_University_Clock_Tower.jpg",
  },
  {
    name: "Osaka University",
    location: "Osaka, Japan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Osaka_City_University_Main_Building_20190818.jpg/1200px-Osaka_City_University_Main_Building_20190818.jpg",
  },
  {
    name: "Tohoku University",
    location: "Sendai, Japan",
    image: "https://www.tohoku.ac.jp/en/news/images/075_meets_the_standards_required_to_be_accredited_as_a_university_ta.jpg",
  },
  {
    name: "Nagoya University",
    location: "Nagoya, Japan",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Nufs-2.jpg",
  },
  {
    name: "Hokkaido University",
    location: "Sapporo, Japan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyHWInw1gGAYCQCbTIzUZt6IKhSJwmJCHig&s",
  },
];

const StudyJapan = () => {
  return (
    <div className="hero-container">
 <div className="university-header">
        <div>
      <h1>Study In Japan </h1></div>
      <div><img src={japanflag} alt="university" className="uni-flag"/>
      </div></div>
      <p className="description">
        Japan is known for its high-quality education, cutting-edge technology, and cultural richness.
        With world-class universities and various scholarship opportunities, Japan is an excellent
        destination for international students.
      </p>
      <h2>Why Study in Japan?</h2>
      <ol>
        <span className="lexis-text"><li>Top-Ranked Universities</li></span>
        <p>Japan is home to prestigious universities such as the University of Tokyo and Kyoto University.</p>
        
        <span className="lexis-text"><li>Scholarships and Financial Aid</li></span>
        <p>Many government and university scholarships are available for international students.</p>
        
        <span className="lexis-text"><li>Research and Technology</li></span>
        <p>Japan is a leader in technological advancements and research opportunities.</p>
        
        <span className="lexis-text"><li>Career Opportunities</li></span>
        <p>Graduates can explore job opportunities in Japan's strong economy and global companies.</p>
      </ol>
      {/* <h2>Popular Courses for International Students</h2>
      <ul>
        <li>Engineering & Technology</li>
        <li>Business & Economics</li>
        <li>Artificial Intelligence & Robotics</li>
        <li>Japanese Language & Culture</li>
        <li>International Relations</li>
      </ul>
      <h2>Requirements to Study in Japan</h2>
      <ul>
        <li>Valid passport</li>
        <li>University acceptance letter</li>
        <li>Student Visa (Japan Student Visa)</li>
        <li>Proof of financial stability</li>
        <li>Japanese or English proficiency test scores</li>
      </ul> */}
      <h2>Top Universities in Japan</h2>
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
