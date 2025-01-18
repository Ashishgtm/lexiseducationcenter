import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link} from 'react-router-dom';
import './HomeC.css'; // Import the CSS file
import Flag from 'react-world-flags';

const universities = [
  {
    name: 'University of Cambridge',
    country: 'United Kingdom',
    flagCode: 'GB', // ISO country code for the UK
    image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
  },
  {
    name: 'Seoul National University ',
    country: 'South Korea',
    flagCode: 'KR', // ISO country code for South Korea
    image: 'https://mcdonnell.wustl.edu/app/uploads/2020/10/SNU.jpg',
  },
  {
    name: 'Webster University',
    country: 'United State Of America',
    flagCode: 'US', // ISO country code for the USA
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIKifGa-2xx1pgNgvRuYNfmjgkhBmPV26FA&s',
  },
  {
    name: 'University of Tokyo',
    country: 'Japan',
    flagCode: 'JP', // ISO country code for Japan
    image: 'https://images.unsplash.com/photo-1593344560663-4c1cdc7d28ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Macquarie University',
    country: 'Australia',
    flagCode: 'AUS', 
    image: 'https://studylink.org/vnt_upload/study/03_08_2021/example_page_banner_02_small.jpg',
  },
];


   

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const UniversityCarousel = () => {
    const CustomLeftArrow = ({ onClick }) => (
        <button 
          className="custom-arrow custom-arrow-left" 
          onClick={onClick}
          aria-label="Previous"
        >
          ‹
        </button>
      );
    
      const CustomRightArrow = ({ onClick }) => (
        <button 
          className="custom-arrow custom-arrow-right" 
          onClick={onClick}
          aria-label="Next"
        >
          ›
        </button>
      );

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Discover Top Universities</h2>
      <div className="universities">Universities All Around The World</div>

      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {universities.map((uni, index) => (
          <div key={index} className="carousel-item">
            <img src={uni.image} alt={uni.name} className="carousel-image" />
            <h3 className="carousel-university-name">{uni.name}</h3>
            <p className="carousel-university-country">
            <Flag code={uni.flagCode} style={{ width: '20px', height: '14px', marginRight: '5px' }} />

              {uni.flag} {uni.country}
            </p>
          </div>
        ))}
      </Carousel>

      <Link to="/universities"><button class="call-to-action-uni">More Universities ...</button></Link>

    </div>
  );
};

export default UniversityCarousel;
