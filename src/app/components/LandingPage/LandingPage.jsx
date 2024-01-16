"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Landingpage.css";

const LandingPage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(leftRef.current, {
      y: 200,
      opacity: 0,
      duration: 4,
      stagger: 0.1,
      ease: "back.out",
    });

    gsap.to(rightRef.current, {
      duration: 1.5,
      y: -25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className={"landing-page container-fluid"}>
      <div className={"hero-section row py-5 align-items-center"}>
        <div className="col">
          <div className={"static-element-1"} ref={leftRef}>
            <h1>CR</h1>
            <div className={"btn-container"}>
              <h6>
                CREATIVE
                <br />
                AGENCY
              </h6>
              <div className={"play-btn d-flex align-items-center gap-3"}>
                <button className={"play-btn shadow"}>
                  <i className="ri-play-fill"></i>
                </button>
                <p className="mt-3 fw-light fs-6">Watch a video intro</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"col element-wrapper-2"}>
          <div className={"static-element-2"}>
            <div className={"move-inside"}>
              <img src="/book.png" alt="book" ref={rightRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
