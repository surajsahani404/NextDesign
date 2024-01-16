"use client";
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.css";
import "./Projects.css";

const Projects = () => {
  // function Number({ n }) {
  //   const { number } = useSpring({
  //     from: { number: 0 },
  //     number: n,
  //     delay: 1500,
  //     config: { mass: 1, tension: 20, friction: 40 },
  //   });
  //   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  // }
  // let valueDisplay = document.querySelectorAll(".num");
  // let interval = 4000;

  // valueDisplay.forEach((valueDisplay) => {
  //   let startvalue = 0;
  //   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  //   let duration = Math.floor(interval / endValue);
  //   let counter = setInterval(function () {
  //     startvalue += 1;
  //     valueDisplay.textContent = startvalue;
  //     if (startvalue == endValue) {
  //       clearInterval(counter);
  //     }
  //   }, duration);
  // });

  return (
    <>
      <div className="project-section text-center text-white pt-5">
        <button className="btn-projects">View All projects</button>
        <div className="container py-5 mt-5">
          <h1 className="projects-heading">ACHIEVEMENTS</h1>
          <h6>We are proud of</h6>
        </div>

        <div className="container-fluid pb-5">
          <div className="counter-wrapper pb-5 row">
            <div className="counter-element col ">
              <h1 className="main-counter">
                <CountUp end={18} enableScrollSpy="true" duration={4} />
              </h1>
              <p className="mb-0">Awwwards</p>
              <p className="text-success">Winnings</p>
            </div>
            <div className="counter-element col ">
              <h1 className="main-counter">
                <CountUp end={24} enableScrollSpy="true" duration={4} />
              </h1>
              <p className="mb-0">Adweek</p>
              <p className="text-success">Reviews</p>
            </div>
            <div className="counter-element col">
              <h1 className="main-counter">
                <CountUp end={12} enableScrollSpy="true" duration={4} />
              </h1>
              <p className="mb-0">The Weeby</p>
              <p className="text-success">Awards</p>
            </div>
            <div className="counter-element col">
              <h1 className="main-counter">
                <CountUp end={7} enableScrollSpy="true" duration={4} />
              </h1>
              <p className="mb-0">Omma</p>
              <p className="text-success">Winnings</p>
            </div>
            <div className="counter-element col">
              <h1 className="main-counter">
                <CountUp end={4} enableScrollSpy="true" duration={4} />
              </h1>
              <p className="mb-0">Design pick</p>
              <p className="text-success">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
