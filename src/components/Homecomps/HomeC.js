import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link} from 'react-router-dom';
import './HomeC.css'; // Import the CSS file
import Flag from 'react-world-flags';

const universities = [
  {
    name: 'University Of Sunderland',
    country: 'United Kingdom',
    flagCode: 'GB', // ISO country code for the UK
    image: 'https://images.shiksha.com/mediadata/images/1537432048phphoR0m5.jpeg',
  },
  {
    name: 'Pyeongtaek University',
    country: 'South Korea',
    flagCode: 'KR', // ISO country code for South Korea
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/%ED%8F%89%ED%83%9D%EB%8C%80%ED%95%99%EA%B5%90%28%E5%B9%B3%E6%BE%A4%E5%A4%A7%E5%AD%B8%E6%A0%A1%2C_Pyeongtaek_University%29.jpg',
  },
  {
    name: 'Webster University',
    country: 'United State Of America',
    flagCode: 'US', // ISO country code for the USA
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIKifGa-2xx1pgNgvRuYNfmjgkhBmPV26FA&s',
  },
  {
    name: 'Dong-eui University',
    country: 'South Korea',
    flagCode: 'KR', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Dong-Eui_Univ_19.JPG/1280px-Dong-Eui_Univ_19.JPG',
  },
  {
    name: 'Cardiff University',
    country: 'United Kingdom, Wales',
    flagCode: 'GB', // ISO country code for the USA
    image: 'https://images.shiksha.com/mediadata/images/1534412382phpYPav1d.jpeg',
  },
  {
    name: 'La Trobe University',
    country: 'Australia',
    flagCode: 'AUS', 
    image: 'https://blueskyconsultancy.com/wp-content/uploads/2023/03/latrobe-university.webp',
  },
  {
    name: 'Coventry University',
    country: 'United Kingdom',
    flagCode: 'GB', // ISO country code for the UK
    image: 'https://images.shiksha.com/mediadata/images/1535015055phpMMRSDL_g.jpg',
  },
  {
    name: 'Namseoul University ',
    country: 'South Korea',
    flagCode: 'KR', // ISO country code for Japan
    image: 'https://thumbs.dreamstime.com/b/seoul-national-university-hospital-building-jongno-gu-city-south-korea-july-122611795.jpg',
  },
  {
    name: 'Washington University of Science and Technology (WUST)',
    country: 'United State Of America',
    flagCode: 'US', // ISO country code for the USA
    image: 'https://lh3.googleusercontent.com/p/AF1QipNezjtwYG8eJ4LeRHDzIE46comO8X7Wnw-VWk8b=s680-w680-h510',
  }
 

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
