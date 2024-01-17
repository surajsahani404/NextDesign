"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavbarFixed.css";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  //   const [navFix, setNavFix] = useState(false);

  //   useEffect(() => {
  //     function fixNavbar() {
  //       if (window.scrollY > 100) {
  //         setNavFix(true);
  //       } else {
  //         setNavFix(false);
  //       }
  //     }
  //     window.addEventListener("scroll", fixNavbar);
  //   });

  useGSAP(() => {
    gsap.from(".navbar-logo", {
      y: -30,
      ease: "power1",
      duration: 2,
    });
  });

  return (
    <div className="navbarFixed">
      <div className="navbar-logo">
        <Link href="/">
          <img
            src="/logo2.png"
            alt="navbar-logo"
            width={120}
            height={120}
            // fill={true}
          />
        </Link>
      </div>
      <div className="nav-links d-lg-block d-md-none d-sm-none d-xs-none">
        <ul className="d-flex justify-content-between align-items-center gap-4 fs-6  list-unstyled text-decoration-none link-underline-opacity-0">
          <li className="nav-items">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-items">
            <Link href="/services">Service</Link>
          </li>
          <li className="nav-items">
            <Link href="/projects">Project</Link>
          </li>
          <li className="nav-items">
            <Link href="/team">Team</Link>
          </li>
          <li className="nav-items">
            <Link href="/partners">Partners</Link>
          </li>
          <li className="nav-items">
            <Link href="/contact">Contacts</Link>
          </li>
          <li>
            <div className="social-links d-flex align-items-center gap-3">
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-twitter-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-search-line"></i>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <i className="ri-menu-line mobile-menu d-lg-none"></i>
    </div>
  );
};

export default Navbar;
