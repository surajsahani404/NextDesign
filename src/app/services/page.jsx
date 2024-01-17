"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
// import "./Services.css";
import styles from "./services.module.css";
import "remixicon/fonts/remixicon.css";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const headRef = useRef(null);
  const detRef = useRef(null);

  useGSAP(() => {
    gsap.from(
      headRef.current,
      {
        x: 200,
        y: 200,
        opacity: 0,
        duration: 2,
        // delay: 1,
        ease: "power1",
        // scrub: true,
        scrollTrigger: {
          trigger: containerRef.current,
        },
      }
      // {
      //   x: 0,
      //   y: 0,
      //   opacity: 1,
      //   duration: 3,
      //   delay: 1,
      //   ease: "expo",
      //   // scrub: true,
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //   },
      // }
    );

    gsap.fromTo(
      ".dets",
      {
        x: -100,
        y: 250,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power1",
        stagger: 0.1,
        scrollTrigger: {
          trigger: headRef.current,
        },
      }
    );
  });
  return (
    <>
      {/* <Navbar /> */}
      <div className={`${styles.servicesWrapper} pt-5`} ref={containerRef}>
        <div className="container text-white p-5">
          <h1 className={`${styles.servicesHeading} p-5`} ref={headRef}>
            SERVICES
            <br /> & PORTFOLIO
          </h1>
          <div className="services-items container pt-2 px-5">
            <div className="row">
              <div
                className="dets col-lg-4 col-md-4 col-sm-12 d-flex align-items-start gap-3"
                ref={detRef}
              >
                <div className="service-image">
                  <i className="ri-user-5-line"></i>
                </div>
                <div className="service-details">
                  <h5 className="fw-light">Brand Identity</h5>
                  <p className="fw-light fs-6">
                    There live the blind texts. Separated they live in
                    Bookmarksgrove right
                  </p>
                </div>
              </div>
              <div
                className="dets col-lg-4 col-md-4 col-sm-12 d-flex align-items-start gap-3"
                ref={detRef}
              >
                <div className="service-image">
                  <i className="ri-megaphone-line"></i>
                </div>
                <div className="service-details">
                  <h5 className="fw-light">Marketing</h5>
                  <p className="fw-light fs-6">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                </div>
              </div>
              <div
                className="dets col-lg-4 col-md-4 col-sm-12 d-flex align-items-start gap-3"
                ref={detRef}
              >
                <div className="service-image">
                  <i className="ri-projector-line"></i>
                </div>
                <div className="service-details">
                  <h5 className="fw-light">Stratergy</h5>
                  <p className="fw-light fs-6">
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div
                className="dets col-lg-4 col-md-4 col-sm-12 d-flex align-items-start gap-3"
                ref={detRef}
              >
                <div className="service-image">
                  <i className="ri-computer-line"></i>
                </div>
                <div className="service-details">
                  <h5 className="fw-light">Web Design</h5>
                  <p className="fw-light fs-6">
                    It is a paradisematic country, in which roasted parts of
                    sentences
                  </p>
                </div>
              </div>
              <div
                className="dets col-lg-4 col-md-4 col-sm-12 d-flex align-items-start gap-3"
                ref={detRef}
              >
                <div className="service-image">
                  <i className="ri-macbook-line"></i>
                </div>
                <div className="service-details">
                  <h5 className="fw-light">UI & UX</h5>
                  <p className="fw-light fs-6">
                    Fly into your mouth even the all-powerful Pointing on that
                  </p>
                </div>
              </div>
              <div
                className="dets col-lg-4 col-md-4 col-sm-12 d-flex align-items-start gap-3"
                ref={detRef}
              >
                <div className="service-image">
                  <i className="ri-paint-brush-line"></i>
                </div>
                <div className="service-details">
                  <h5 className="fw-light">Graphic Design</h5>
                  <p className="fw-light fs-6">
                    Has no control about the blind texts it is an almost
                    unorthographic life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gooey-wrapper2">
        <div className="gooey4"></div>
        <div className="gooey5"></div>
        <div className="gooey6"></div>
      </div> */}
      </div>
    </>
  );
};

export default Services;
