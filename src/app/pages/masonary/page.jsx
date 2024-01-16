"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.css";
import "./Masonary.css";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const Masonary = () => {
  const masonaryRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      masonaryRef.current,
      {
        y: 500,
        opacity: 0.5,
      },
      {
        y: -200,
        opacity: 1,
        ease: "power",
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
        },
      }
    );
    gsap.fromTo(
      ".image",
      {
        y: 200,
      },
      {
        y: 0,
        stagger: 0.4,
        ease: "power1",
        duration: 1,
      }
    );
  });

  return (
    <>
      <div className="projects mt-5" ref={containerRef}>
        <div className="masonary-container container" ref={masonaryRef}>
          <div className="masonary">
            <div className="column">
              <div className="image">
                <img src="/item-1.jpg" alt="img1" />
                <div className="product-info">
                  <h1 className="fs-4">Oranging Branding</h1>
                  <h6 className="fs-6">branding</h6>
                </div>
              </div>
              <div className="image">
                <img src="/item-2.jpg" alt="img2" />
                <div className="product-info">
                  <h1 className="fs-4">Modern Essential Apparel</h1>
                  <h6 className="fs-6">apparel</h6>
                </div>
              </div>
              <div className="image">
                <img src="/item-6.jpg" alt="img6" />
                <div className="product-info">
                  <h1 className="fs-4">The Notebook Project</h1>
                  <h6 className="fs-6">prints</h6>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="image">
                <img src="/item-4.jpg" alt="" />
                <div className="product-info">
                  <h1 className="fs-4">Coffee Cup</h1>
                  <h6 className="fs-6">packaging</h6>
                </div>
              </div>
              <div className="image">
                <img src="/item-5.jpg" alt="img5" />
                <div className="product-info">
                  <h1 className="fs-4">Post Office</h1>
                  <h6 className="fs-6">packaging</h6>
                </div>
              </div>
              <div className="image">
                <img src="/item-8.jpg" alt="img8" />
                <div className="product-info">
                  <h1 className="fs-4">Marble Visual Identity</h1>
                  <h6 className="fs-6">apparel</h6>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="image">
                <img src="/item-7.jpg" alt="img7" />
                <div className="product-info">
                  <h1 className="fs-4">iconic Magazine</h1>
                  <h6 className="fs-6">prints</h6>
                </div>
              </div>
              <div className="image">
                <img src="/item-3.jpg" alt="img3" />
                <div className="product-info">
                  <h1 className="fs-4">Jevelin Festival </h1>
                  <h6 className="fs-6">branding</h6>
                </div>
              </div>
              <div className="image">
                <img src="/item-9.jpg" alt="img9" />
                <div className="product-info">
                  <h1 className="fs-4">Print House</h1>
                  <h6 className="fs-6">prints</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Masonary;
