
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import './HomeD.css'
import Udaya from './images/udaya.jpg';
import Rakshya from './images/rakshya.JPG'
import pooja from './images/pooja.jpg';
import Archana from './images/archana.JPG';
import sapan from './images/sapan.jpg'
import safalta from './images/safalta.jpg'
import adarsha from './images/adarsha.jpg'

const testimonials = [
  {
    name: "Udaya Thapa",
    role: "Student",
    rating: 5,
    message:
      "US is a land of opportunity with fine education. So, each and every new commerce should emphasize their visa processing from the right place, and I personally suggest Lexis to be the best place out there in Nepal.",
    image: Udaya
  },
  {
    name: "Pooja Guragain",
    role: "RN",
    rating: 5,
    message: "I felt confident every step of the way knowing I was in capable hands. Highly recommended!",
    image: pooja

  },
  {
    name: "Rakshya Katuwal",
    role: "Applicant",
    rating: 4,
    message: "Their mentorship has been invaluable. Lexis has a way of bringing out the best in everyone they work with.",
    image: Rakshya

  },
  {
    name: "Archana Chettri",
    role: "Student",
    rating: 5,
    message: "The guidance and support I received were top-notch. Lexis truly cares about helping others achieve their dreams.",
    image: Archana

  },
  {
    name: "Adarsha Aryal",
    role: "Applicant",
    rating: 4,
    message: "Their innovative approach to cybersecurity helped secure our operations. Highly recommended for anyone serious about protecting their digital assets!",
    image: adarsha
  },
  {
    name: "Sapan Adhikari",
    role: "Student",
    rating: 5,
    message: "The professionalism and expertise were beyond my expectations. I highly recommend their services to anyone seeking reliable and efficient solutions!",
    image: sapan

  },
  {
    name: "Safalta Giri",
    role: "Applicant",
    rating: 4,
    message: "Working with Lexis has been a game-changer for me. Their knowledge and dedication have made a significant impact on my goals.",
    image: safalta

  },

];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="testimonials-container">
    <div className='abouttesti'>Testimonials</div>

    <div className="saying">What They Are Saying About Us</div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
/>
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <div className="rating">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="message">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
