import React, { useEffect, useRef } from "react";
import "./Aboutus.css";
import { FaCircle, FaCheck } from "react-icons/fa6";
import image1 from "./images/image1.jpg";
import image4 from "./images/image4.jpg";
import image3 from "./images/image3.jpg";
import image2 from "./images/image2.jpg";
import image5 from "./images/image5.jpg";
import image8 from "./images/image8.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import gsap from "gsap";

const EventCards = () => {
  const imageRefs = useRef([]);
  const imageRefs2 = useRef([]); // Ref for the second row of images
  const containerRef2 = useRef(null); // Ref for the container of the second row

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "elastic.out(1, 0.3)",
          repeat: -1,
          yoyo: true,
        }
      );
    });

    // Marquee effect for the second row of images

    const containerWidth = containerRef2.current.offsetWidth;
    const totalImagesWidth = imageRefs2.current.reduce(
      (sum, img) => sum + img.offsetWidth,
      0
    );

    if (totalImagesWidth > containerWidth) {
      const imageRefsArray = imageRefs2.current; // <--- Capture the current array

      gsap.timeline({ repeat: -1 }).fromTo(
        imageRefsArray,
        {
          // <--- Use the captured array
          x: containerWidth,
        },
        {
          x: -totalImagesWidth,
          duration: 20,
          ease: "none",
        }
      );

      return () => {
        gsap.killTweensOf(imageRefsArray); // <--- Kill tweens of the captured array
      };
    } else {
      return () => {}; // Return an empty cleanup function if no animation was created.
    }
  }, []);

  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const addImageRef2 = (el) => {
    // Ref for the second row
    if (el && !imageRefs2.current.includes(el)) {
      imageRefs2.current.push(el);
    }
  };

  return (
    <div className="about-us-container">
      <div className="event-heading">
        <h2>About US</h2>
        <p>"Strategic thinking, tangible outcomes."</p>
      </div>
      <div className="container-about">
        <div className="about-textsection">
          <div className="about-content">
            <div className="about-text-right">
              <span className="lexis-text1">Making YOUR Journey !!</span>
              <p>
                We believe that education is the cornerstone of personal and
                professional growth. We understand that navigating the
                complexities of today's educational landscape can be
                challenging, whether you're a student striving for academic
                excellence, a professional seeking career advancement, or an
                institution looking to enhance its offerings. That's where we
                come in. <br /><br/>
                Our team of experienced consultants brings a wealth of knowledge
                and a proven track record of success to every engagement. We
                empower individuals to unlock their full potential by providing
                personalized guidance tailored to their unique learning styles,
                aspirations, and career goals. From course selection and
                application support to exam preparation and skill development,
                we offer comprehensive support at every stage of your
                educational journey. We help you identify the right educational
                path, maximizing your opportunities for success in a competitive
                world. We also provide expert advice on funding options,
                scholarships, and financial aid to make education accessible and
                affordable.
                <br /><br/>
                For institutions, we partner to develop and implement innovative
                strategies that enhance teaching effectiveness, improve student
                outcomes, and foster a thriving learning environment. We offer
                data-driven insights and best practices to optimize curriculum
                design, assessment methods, and educational resources. We are
                committed to providing personalized, results-oriented solutions
                that empower our clients to achieve their educational and career
                aspirations.
              </p>
            </div>
            <div className="about-image-left">
              <img
                src="https://i.pinimg.com/736x/97/0d/2b/970d2b0fdaaf15400060fc872e0412b9.jpg"
                alt="books"
                className="books-library"
              />
            </div>
          </div>

          <div className="whychoose">Why Choose Lexis Education Center?</div>
          <div className="whychoosedivision">
            <ul>
              <li>
                <span className="lexis-text"> Expert Guidance:</span> <br /> Our
                team consists of highly skilled and knowledgeable counselors who
                are well-versed in the intricacies of studying abroad. We stay
                up-to-date with the latest trends, admission requirements, and
                visa regulations to provide you with accurate and reliable
                information. <br />
                <br />
              </li>
              <li>
                <span className="lexis-text"> Comprehensive Services:</span>
                <br /> Lexis Education Center offers a comprehensive range of
                services, including academic and career counseling, assistance
                with university selection, English language training, and
                guidance in the document preparation process. We strive to make
                your journey as smooth and hassle-free as possible.
                <br />
                <br />
              </li>
              <li>
                {" "}
                <span className="lexis-text"> Personalized Approach:</span>
                <br /> We believe in understanding your individual needs,
                preferences, and strengths to guide you toward the best
                educational opportunities that align with your career
                aspirations. Our personalized approach ensures that you receive
                tailored advice and support throughout your entire study abroad
                journey.
                <br />
                <br />
              </li>
              <li>
                <span className="lexis-text"> Extensive Network:</span>
                <br /> With branches strategically located across the country,
                we have established strong connections with renowned
                universities and educational institutions worldwide. This
                network allows us to provide you with access to a wide range of
                study programs and scholarship opportunities. At Lexis Education
                Center, we are driven by our passion for helping students unlock
                their potential and achieve academic excellence. Your success is
                our ultimate goal, and we are committed to assisting you at
                every step of the way.{" "}
              </li>
              <br />
              Contact us today to embark on an exciting educational journey and
              discover the right Path to a successful future.
            </ul>
          </div>
          <div className="what-we-offer">
            <p>What We Offer !!!!!!!!</p>
          </div>

          <div className="images3">
            <img
              ref={addImageRef}
              src={image1}
              alt="southkorea"
              className="about-images zoomable"
            />
            <img
              ref={addImageRef}
              src={image4}
              alt="southkorea"
              className="about-images zoomable"
            />
            <img
              ref={addImageRef}
              src={image3}
              alt="southkorea"
              className="about-images zoomable"
            />
          </div>
          <div className="aimsdivision">
            <FaCircle className="iconsaims" /> Aims and Objectives
          </div>
          <p className="aimsdivision-p">
            To be the industry leader in delivering one-stop study abroad
            solutions for students, assisting them in attaining their goals via
            effective career counseling and advice, and adding value to our
            partner universities and all other stakeholders.
          </p>
          <div className="aimsdivision">
            {" "}
            <FaCircle className="iconsaims" /> Our Mission
          </div>
          <div className="ourmission-text">
            <ol>
              <li>
                {" "}
                To find the greatest employment possibilities that fit the
                student's skills, performance, and interests.
              </li>
              <li>
                {" "}
                To provide students who want to study abroad with specialized
                alternatives.
              </li>
              <li>
                {" "}
                By maintaining our organization's integrity, honesty, and
                quality, we strive for organic growth.
              </li>
              <li>
                {" "}
                To recognize similar values and objectives with the partner
                institutions in order to create a solid and reliable
                partnership.
              </li>
            </ol>
          </div>
          <div className="aimsdivision">
            <FaCircle className="iconsaims" /> Our Vision
          </div>
          <p className="aimsdivision-p">
            Our core courses shall be graduate university-level programs. Our
            objectives can be stated as follow.
          </p>
          <div className="facheck-content">
            <FaCheck /> We can accomplish the following goals to further our
            mission and vision.
            <br />
            <br />
            <FaCheck /> To get a sufficient understanding of the study
            locations, institutions, and programs in order to offer effective
            counseling and advice.
            <br />
            <br />
            <FaCheck /> To ensure that the important team members have the
            appropriate knowledge and abilities in the area of career
            counseling.
            <br />
            <br />
            <FaCheck /> To foster a strong sense of teamwork and offer the
            pupils high-quality answers.
            <br />
            <br />
            <FaCheck /> To get formal representation from prestigious
            universities and collaborate with them to support the students
            throughout their initial years in the nation.
            <br />
            <br />
            <FaCheck /> With the purpose of offering the English Language Test
            lessons and other language training needed to enroll in the
            universities.
            <br />
            <br />
            <FaCheck /> To help students find the appropriate programs and
            choose reputable colleges so they may achieve their objectives.
            <br />
            <br />
          </div>
        </div>
        <div
          className="image-row-container"
          ref={containerRef2}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          <img
            ref={addImageRef2}
            src={image2}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image5}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image6}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image7}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image8}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image5}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image8}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image6}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image7}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image8}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image5}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image8}
            alt="southkorea"
            className="about-images8"
          />
          <img
            ref={addImageRef2}
            src={image6}
            alt="southkorea"
            className="about-images8"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCards;
