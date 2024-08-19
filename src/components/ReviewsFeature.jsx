import googleImg from "../img/google.png";
import Stars from "./Stars";
import { useRef } from "react";

import verified from "../img/facebook-verified.png";

function ReviewsFeature() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({
        top: 0,
        left: 260, // 24rem = 240px
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({
        top: 0,
        left: -260, // 24rem = 240px
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="reviews__Feature">
      <div className="reviews__card">
        <div className="reviews__text">
          <div className="reviews__text-titlebox">
            <div className="reviews__text-logo">
              <img
                className="reviews__text-logo-img"
                src={googleImg}
                alt="logo"
              />
            </div>
            <div className="reviews__text-title">Reviews</div>
          </div>
          <div className="reviews__text-starbox">
            <div className="reviews__rating">4.5</div>
            <div className="reviews__stars">
              <Stars />
            </div>
            <div className="reviews__reviews">(55+)</div>
          </div>
        </div>
        <button className="reviews__btn"> Review us on Google</button>
      </div>

      <div className="swiper" ref={swiperRef}>
        <div className="swiper__btns">
          <button onClick={handlePrev} className="swiper__btns__prev">
            {"<"}
          </button>
          <button onClick={handleNext} className="swiper__btns__next">
            {">"}
          </button>
        </div>

        {/* Individual review items */}
        {[...Array(20)].map((_, index) => (
          <div className="swiper__reviews" key={index}>
            <div className="swiper__reviews__box">
              <img
                className="swiper__reviews__img"
                src="https://lh3.googleusercontent.com/a/ACg8ocJS5Jfhj0GqNHy7b5NqsMzwssI88AXqSzKR4zjZG66iFVTAiQ=w36-h36-p-rp-mo-br100"
                alt="profile"
              />
              <div className="swiper__reviews__box-text">
                <div className="swiper__reviews__box-text-name">
                  <div className="swiper__reviews__box-text-name-box">
                    John Doe
                    <img
                      src={verified}
                      className="swiper__reviews__verified"
                      alt="google logo"
                    />
                  </div>
                </div>
                <div className="swiper__reviews__box-text-date">
                  20 days ago
                </div>
              </div>
            </div>
            <div className="swiper__reviews__Tbox">
              <Stars />
              <div className="swiper__reviews__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                sed, aperiam ipsam laudantium exercitationem eveniet officia,
                error voluptatem dolorem.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsFeature;
