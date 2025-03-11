import React from "react";
import southkoreaflag from "./southkoreaflag.png";
import "../MainCss.css";

const universities = [
  {
    name: "Pyeongtaek University",
    location: "Seodong-daero, Pyeongtaek-si, Gyeonggi-do, South Korea",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/%ED%8F%89%ED%83%9D%EB%8C%80%ED%95%99%EA%B5%90%28%E5%B9%B3%E6%BE%A4%E5%A4%A7%E5%AD%B8%E6%A0%A1%2C_Pyeongtaek_University%29.jpg",
  },
  {
    name: "Dong-eui University",
    location: " Eomgwang-ro, Busanjin District, Busan, South Korea",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Dong-Eui_Univ_19.JPG/1280px-Dong-Eui_Univ_19.JPG",
  },
  {
    name: "Namseoul University",
    location: "Seobuk-gu, Cheonan-si, Chungcheongnam-do, South Korea",
    image:
      "https://thumbs.dreamstime.com/b/seoul-national-university-hospital-building-jongno-gu-city-south-korea-july-122611795.jpg",
  },
  {
    name: "Kyungsung university",
    location: "309 Suyeong-ro, Nam-gu, Busan, South Korea",
    image:
      "https://kscms.ks.ac.kr/attach/IMAGE/CampusMgr/CampusMapUpload/2018/12/iNz4OXGWnwT29iE1.JPG",
  },
  {
    name: "Dong-A University",
    location: "Busan, South Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8M51_yqVFHY9x02Dg6kTwTqCWpcyQPYhow&s",
  },
  {
    name: "Tongmyong University",
    location: " 428 Sinseon-ro, Nam-gu, Busan, South Korea",
    image:
      "https://i.namu.wiki/i/4892Zl7gmzg4a4nPUJbstXAna9bmdw8OEg-qww65b8kkQG95kTU9Tncm6EZtJu7BPZbsLL_d-w1cYy851_tLPw.webp",
  },

  {
    name: "Sejong University",
    location: " 209 Neungdong-ro, Gwangjin District, Seoul, South Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6acm8l3urpry8jMx6r5ZSw09c3BFBBewkQ&s",
  },
  {
    name: "Jeonbuk National",
    location: "567 Baekje-daero, Deokjin-gu, Jeonju-si, Jeonbuk State, South Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfvLpCYN7i3DBQpWq8jT9k7KGDHWs562qHA&s",
  },
  {
    name: "Far East Universityy",
    location: " Eumseong-gun, Gamgok-myeon, Daehak-gil, South Korea",
    image:
      "https://mksprep.com/wp-content/uploads/2024/05/image-1-1024x488.png",
  },
  {
    name: "Hanyang University",
    location: "222 Wangsimni-ro, Seongdong-gu, Seoul, South Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKEcvlhfbU95twfSRUv5thAQUqPk4Oh-vBw&s",
  },
  {
    name: "Woosong University",
    location: "59 Baengnyong-ro, Dong-gu, Daejeon, South Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj5R1aIDoUZ8ldBaLmTgSc3aovH-K8IRnZQ&s",
  },
  {
    name: "Silla University",
    location: "140 Baegyang-daero 700beon-gil, Sasang-gu, Busan, South Korea",
    image:
      "https://gogohanguk.com/wp-content/uploads/2023/12/SIlla.jpg",
  },
  {
    name: "aSSIST University",
    location: " 46 Ewhayeodae 2-gil, Seodaemun-gu, Seoul, South Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SPy9yWg029BvoDZcke9ouTgcIZxnYHF8eA&s",
  },
  {
    name: "Jeju National University",
    location: "102 Jejudaehak-ro, 특별자치도 Jeju-si, Jeju-do, South Korea",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jnuimage.jpg/640px-Jnuimage.jpg",
  },
  
];

const SouthKoreaList = () => {
  return (
    <div className="hero-container">
      <div className="university-header">
        <div>
          <h1>Study In S.Korea </h1>
        </div>
        <div>
          <img src={southkoreaflag} alt="university" className="uni-flag" />
        </div>
      </div>
      <p className="description">
        South Korea has become one of the top destinations for international
        students due to its high-quality education, advanced technology, and
        vibrant culture. With globally recognized universities, affordable
        tuition fees, and various scholarship opportunities, South Korea offers
        an excellent environment for academic growth.
      </p>
      <h2>Why Study in South Korea?</h2>
      <ol>
        <span className="lexis-text">
          <li>World-Class Education</li>
        </span>
        <p>
          Universities like Pyeongtaek University, Dong-eui University, and
          Namseoul University University are ranked among the best globally.
        </p>
        <span className="lexis-text">
          <li>Affordable Tuition and Scholarships</li>
        </span>
        <p>
          The South Korean government and universities provide numerous
          scholarships for international students.
        </p>
        <span className="lexis-text">
          <li>Innovative Learning Environment</li>
        </span>
        <p>
          South Korea is known for its technological advancements, making it an
          ideal place for students in IT, engineering, and business.
        </p>
        <span className="lexis-text">
          <li>Cultural Experience</li>
        </span>
        <p>
          From K-pop and K-dramas to traditional palaces and temples, South
          Korea offers a unique cultural experience.
        </p>
        <span className="lexis-text">
          <li>Job Opportunities</li>
        </span>
        <p>
          Many international students find internships and job placements in top
          South Korean companies after graduation.
        </p>
      </ol>
      {/* <h2>Popular Courses for International Students</h2>
      <ul>
        <li>Computer Science & IT</li>
        <li>Business & Management</li>
        <li>Engineering</li>
        <li>Korean Language & Culture</li>
        <li>International Relations</li>
      </ul>
      <h2>Requirements to Study in South Korea</h2>
      <ul>
        <li>A valid passport</li>
        <li>University acceptance letter</li>
        <li>Student visa (D-2 visa)</li>
        <li>Proof of financial stability</li>
        <li>Health insurance</li>
      </ul> */}
      <h2>Universities in South Korea</h2>
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

export default SouthKoreaList;
