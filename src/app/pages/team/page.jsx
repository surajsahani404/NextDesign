"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React, { useRef } from "react";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Team = () => {
  const contRef = useRef(null);
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -100,
      duration: 3,
      ease: "power3",
      scrollTrigger: {
        trigger: contRef.current,
      },
    });

    gsap.from(carouselRef.current, {
      x: 100,
      duration: 2,
      ease: "power3",
      scrollTrigger: {
        trigger: contRef.current,
      },
    });
    gsap.from(".team-member", {
      opacity: 0.2,
      ease: "sine",
      duration: 3,
      scrollTrigger: {
        trigger: contRef.current,
      },
    });
  });

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar />
      <section className="team pt-5" ref={contRef}>
        <div className="container">
          <div className="item-row d-flex py-5 px-4 mt-5 align-items-center">
            <div className="col-lg-6 col-md-12" ref={textRef}>
              <div className="text-above">
                <h1>
                  MASTER
                  <br />
                  CREW
                </h1>
                <p className="fs-5 fw-light lh-sm">
                  Our professional team will be
                  <br /> happy to bring amazing ideas
                  <br /> and projects to life
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 px-0" ref={carouselRef}>
              <Slider {...settings} className="carousel rounded-3 shadow">
                <div className="carousel-item row d-flex">
                  <div className="carousel-img1 col position-relative">
                    <img
                      src="/carousel-img.jpg"
                      alt=""
                      className="rounded-start"
                    />
                    <a>Join Now!</a>
                  </div>
                  <div className="carousel-text col pt-5 mt-4 px-0">
                    <p className="fw-bold">Designer</p>
                    <p className="text-success fw-light">web design</p>
                    <p className="fw-lighter">
                      If you are enthusiastic person
                      <br /> with a pinch of talent don’t
                      <br />
                      hesitate to join our team
                    </p>
                  </div>
                </div>

                <div className="carousel-item row d-flex">
                  <div className="carousel-img2 col position-relative">
                    <img
                      src="/carousel-img2.jpg"
                      alt=""
                      className="rounded-start"
                    />
                    <a>Join Now!</a>
                  </div>
                  <div className="carousel-text col pt-5 mt-4">
                    <p className="fw-bold">Marketing</p>
                    <p className="fw-light text-success">
                      marketing specialist
                    </p>
                    <p className="fw-lighter">
                      If you are enthusiastic person
                      <br /> with a pinch of talent don’t
                      <br />
                      hesitate to join our team
                    </p>
                  </div>
                </div>
                <div className="carousel-item row d-flex">
                  <div className="carousel-img2 col position-relative">
                    <img
                      src="/carousel-img3.jpg"
                      alt=""
                      className="rounded-start"
                    />
                    <a>Join Now!</a>
                  </div>
                  <div className="carousel-text col pt-5 mt-4">
                    <p className="fw-bold">Developer</p>
                    <p className="fw-light text-success">front-end</p>
                    <p className="fw-lighter">
                      If you are enthusiastic person
                      <br /> with a pinch of talent don’t
                      <br />
                      hesitate to join our team
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="item-row d-flex py-5 px-4 mt-5 ">
            <div className="col-lg-6 col-md-12 shadow team-member">
              <div className="row">
                <div className="col">
                  <div className="member-img1">
                    <img src="/team-member-1.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="member-info py-5 mt-4">
                    <p className="fw-bold">KATE WILSON</p>
                    <p className="fw-light text-success">advertising</p>
                    <p className="fw-lighter">
                      Highly experienced
                      <br /> professional that is going to
                      <br /> make amazing things for you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 shadow team-member">
              <div className="row">
                <div className="col">
                  <div className="member-img2">
                    <img src="/team-member-2.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="member-info py-5 mt-4">
                    <p className="fw-bold">JOHN BROWN</p>
                    <p className="fw-light text-success">developer</p>
                    <p className="fw-lighter">
                      Highly experienced
                      <br /> professional that is going to
                      <br /> make amazing things for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="team-btn">Meet the Team</button>
        <div className="banner container-fluid pt-5 d-flex ">
          <div className="row">
            <div className="banner-item1 col-lg-4 col-md-4 col-sm-12 shadow">
              <div className="banner-text">
                <h1>Project Visualization</h1>
                <p className="fw-lighter">
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from
                </p>
              </div>
            </div>
            <div className="banner-item2 col-lg-4 col-md-4 col-sm-12 shadow">
              <div className="banner-text">
                <h1>Creation and Selection</h1>
                <p>
                  One day however a small line of blind text by the name of
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="banner-item3 col-lg-4 col-md-4 col-sm-12 shadow">
              <div className="banner-text">
                <h1>Launching Campaign</h1>
                <p>
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
