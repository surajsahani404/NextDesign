"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Contact.css";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const headRef = useRef(null);
  const cardsRef = useRef(null);
  useGSAP(() => {
    gsap.from(headRef.current, {
      y: 100,
      duration: 3,
      ease: "power3",
      scrollTrigger: {
        trigger: contactRef.current,
      },
    });
    gsap.from(".card-item", {
      y: 100,
      ease: "power3",
      duration: 3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactRef.current,
      },
    });
    gsap.from(".btn-contact", {
      y: 50,
      ease: "power3",
      duration: 3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactRef.current,
      },
    });
  });

  return (
    <>
      <Navbar />
      <section className="contact-section" ref={contactRef}>
        <div className="contact-head text-center" ref={headRef}>
          <h1>CONTACT US</h1>
          <p>& let us help</p>
        </div>
        <div className="contact-cards container" ref={cardsRef}>
          <div className="card-item shadow rounded-3">
            <div className="item-contents text-center">
              <i className="ri-settings-5-line"></i>
              <h5 className="pt-5 pb-2">Support</h5>
              <p className="pb-5">
                Just let us know if you have any questions regarding our
                services
              </p>
            </div>
          </div>
          <div className="card-item shadow">
            <div className="item-contents text-center">
              <i className="ri-printer-line"></i>
              <h5 className="pt-5 pb-2">Printing and Lettering</h5>
              <p className="pb-5">
                Just let us know if you have any questions regarding our
                services
              </p>
            </div>
          </div>
          <div className="card-item shadow">
            <div className="item-contents text-center">
              <i className="ri-megaphone-line"></i>
              <h5 className="pt-5 pb-2">Media and Marketing</h5>
              <p className="pb-5">
                Just let us know if you have any questions regarding our
                services
              </p>
            </div>
          </div>
        </div>
        <button className="btn-contact">Get in touch!</button>
      </section>
    </>
  );
};

export default Contact;
