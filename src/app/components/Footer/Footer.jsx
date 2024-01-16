import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row p-5">
          <div className="footer-text text-white">
            <h1 className="fs-4 font">FOLLOW US</h1>
            <h6>#jevelincreative</h6>
          </div>
        </div>

        <div className="row p-5 ">
          <div className="footer-items d-flex justify-content-between text-white">
            <div>
              <h1 className="fs-6">Office</h1>
              <p className="fw-lighter">
                Office San Diego — 845 15th Street, Suite
                <br /> 906 San Diego, CA 92120 Mountain View
                <br /> — 1398 Villa St Mountain View, CA 96841
              </p>
            </div>
            <div>
              <h1 className="fs-6">Start a conversation</h1>
              <p className="fw-lighter">
                hi@creativeagency.com
                <br /> +1.858.755.6922
              </p>
            </div>
            <div>
              <h1 className="fs-6">Social</h1>
              <div className="socials d-flex align-items-center gap-4 fs-5">
                <i class="ri-instagram-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-facebook-line"></i>
                <i class="ri-youtube-line"></i>
              </div>
            </div>
            <div>
              <h1 className="fs-6">Latest Projects</h1>
              <div className="project-container">
                <div className="item1">
                  <i class="ri-links-line"></i>
                </div>
                <div className="item2">
                  <i class="ri-links-line"></i>
                </div>
                <div className="item3">
                  <i class="ri-links-line"></i>
                </div>
              </div>
              <div className="project-container">
                <div className="item4">
                  <i class="ri-links-line"></i>
                </div>
                <div className="item5">
                  <i class="ri-links-line"></i>
                </div>
                <div className="item6">
                  <i class="ri-links-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p className="copyright-text">Copyright © Test-Project</p>
      </div>
    </section>
  );
};

export default Footer;
