"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Partners.css";

const Partners = () => {
  const contRef = useRef(null);
  const headRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    gsap.from(headRef.current, {
      y: +100,
      duration: 3,
      ease: "power3",
      scrollTrigger: {
        trigger: contRef.current,
      },
    });
    gsap.from(sliderRef.current, {
      y: +200,
      duration: 3,
      ease: "power3",
      scrollTrigger: {
        trigger: contRef.current,
      },
    });
  });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <section className="partners pt-5" ref={contRef}>
        <div className="conatiner text-center pt-5" ref={headRef}>
          <h1 className="fw-bolder">Our Clients</h1>
          <p>& partners</p>
        </div>

        <div
          className="testimonial-carousel rounded-3 bg-white shadow"
          ref={sliderRef}
        >
          <Slider {...settings}>
            <div className="testimonial-item">
              <div className="testimonial-wrapper d-flex align-items-center">
                <div className="testimonial-logo d-flex">
                  <img src="/partner-logo1.png" alt="" />
                  <div className="testimonial-logo-text text-white">
                    <h6 className="mt-4">Jevelin Construction</h6>
                    <p className="fw-light">Constrution Company</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-text d-flex justify-content-between align-items-center gap-5 px-5 my-5">
                <p>66</p>
                <p className="text-center">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                </p>
                <p>99</p>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-wrapper d-flex align-items-center">
                <div className="testimonial-logo d-flex">
                  <img src="/partner-logo2.png" alt="" />
                  <div className="testimonial-logo-text text-white">
                    <h6 className="mt-4">Baloonbear</h6>
                    <p className="fw-light">Imaginary Theme</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-text d-flex justify-content-between align-items-center gap-5 px-5 my-5">
                <p>66</p>
                <p className="text-center">
                  And grow familiar with the countless indescribable forms of
                  the insects and flies, then I feel the presence of the
                  Almighty, who formed us in his own image, and the breath
                </p>
                <p>99</p>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-wrapper d-flex align-items-center">
                <div className="testimonial-logo d-flex">
                  <img src="/partner-logo3.png" alt="" />
                  <div className="testimonial-logo-text text-white">
                    <h6 className="mt-4">laBeaute</h6>
                    <p className="fw-light">Cosmetic Company</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-text d-flex justify-content-between align-items-center gap-5 px-5 my-5">
                <p>66</p>
                <p className="text-center">
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be incapable of drawing a single stroke at the present
                  moment; and yet I feel that I never was a greater artist than
                  now.
                </p>
                <p>99</p>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-wrapper d-flex align-items-center">
                <div className="testimonial-logo d-flex">
                  <img src="/partner-logo4.png" alt="" />
                  <div className="testimonial-logo-text text-white">
                    <h6 className="mt-4">Jevelin</h6>
                    <p className="fw-light">Wordpress Theme</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-text d-flex justify-content-between align-items-center gap-5 px-5 my-5">
                <p>66</p>
                <p className="text-center">
                  When, while the lovely valley teems with vapour around me, and
                  the meridian sun strikes the upper surface of the impenetrable
                  foliage of my trees,
                </p>
                <p>99</p>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-wrapper d-flex align-items-center">
                <div className="testimonial-logo d-flex">
                  <img src="/partner-logo5.png" alt="" />
                  <div className="testimonial-logo-text text-white">
                    <h6 className="mt-4">Shuffle Hound</h6>
                    <p className="fw-light">theme Creators</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-text d-flex justify-content-between align-items-center gap-5 px-5 my-5">
                <p>66</p>
                <p className="text-center">
                  I throw myself down among the tall grass by the trickling
                  stream; and, as I lie close to the earth, a thousand unknown
                  plants are noticed by me: when I hear the buzz of the little
                  world among the stalks.
                </p>
                <p>99</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="partner-logo-carousel container-fluid">
          <Swiper
            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={4}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 500,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={false}
            navigation={false}
            pagination={false}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="w-25 d-flex justify-content-center">
              <img
                className="mx-auto"
                src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-7.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-25 d-flex justify-content-center">
              <img
                className="mx-auto"
                src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-25 d-flex justify-content-center">
              <img
                className="mx-auto"
                src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-25 d-flex justify-content-center">
              <img
                className="mx-auto"
                src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Vector-Smart-Object.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-25 d-flex justify-content-center">
              <img
                className="mx-auto"
                src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-25 d-flex justify-content-center">
              <img
                className="mx-auto"
                src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo-copy-4.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="newsletter-wrapper d-flex align-items-center">
          <div className="newsletter-text text-white">
            <h1>
              Subscribe to
              <br /> our newsletter
            </h1>
          </div>
          <div className="email-box d-flex gap-5 align-items-center gap-5">
            <input type="email" placeholder="enter your email" name="email" />
            <button className="send-button">Send</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;

{
  /* <Slider {...settings2}>
          <div>
            <img
              className="mx-auto"
              src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-7.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-6.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Vector-Smart-Object.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo-copy-4.png"
              alt=""
            />
          </div>
        </Slider> */
}
