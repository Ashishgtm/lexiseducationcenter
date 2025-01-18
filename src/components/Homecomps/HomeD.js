
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import './HomeD.css'
import Ashish from './images/ashish.jpg';
import Suman from './images/suman';
import pooja from './images/pooja.jpg';
import pawan from './images/pawan.jpg';
import Bishal from './images/bishal.jpg';
import milan from './images/milan.jpg';
import nischal from './images/nischal.jpg';

const testimonials = [
  {
    name: "Ashish Gtm",
    role: "Computer Engineer",
    rating: 5,
    message:
      "Australia is a land of opportunity with fine education. So, each and every new commerce should emphasize their visa processing from the right place, and I personally suggest Lexis to be the best place out there in Nepal.",
    image: Ashish
  },
  {
    name: "Pooja Guragain",
    role: "Graduate",
    rating: 5,
    message: "I felt confident every step of the way knowing I was in capable hands. Highly recommended!",
    image: pooja

  },
  {
    name: "Suman Shrestha",
    role: "Professional",
    rating: 4,
    message: "Their mentorship has been invaluable. Lexis has a way of bringing out the best in everyone they work with.",
    image: Suman

  },
  {
    name: "Pawan Giri",
    role: "Student",
    rating: 5,
    message: "The guidance and support I received were top-notch. Lexis truly cares about helping others achieve their dreams.",
    image: pawan

  },
  {
    name: "Bishal Pokhrel",
    role: "Applicant",
    rating: 4,
    message: "Their innovative approach to cybersecurity helped secure our operations. Highly recommended for anyone serious about protecting their digital assets!",
    image: Bishal
  },
  {
    name: "Milan Dhakal",
    role: "Student",
    rating: 5,
    message: "The professionalism and expertise were beyond my expectations. I highly recommend their services to anyone seeking reliable and efficient solutions!",
    image: milan

  },
  {
    name: "Nischal Panta",
    role: "Applicant",
    rating: 4,
    message: "Working with Lexis has been a game-changer for me. Their knowledge and dedication have made a significant impact on my goals.",
    image: nischal

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
