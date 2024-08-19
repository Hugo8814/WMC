import googleImg from "../img/google.png";
import Stars from "./Stars";
import { useContext, useRef } from "react";

import verified from "../img/facebook-verified.png";
import ApiContext from "../components/api";

function ReviewsFeature() {
  const state = useContext(ApiContext);
  const swiperRef = useRef(null);
  console.log("State in ReviewsFeature:", state); // Debug: Log the state

  // Check if the data is not yet available

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
            <div className="reviews__rating">{state.rating}</div>
            <div className="reviews__stars">
              <Stars />
            </div>
            <div className="reviews__reviews">({state.reviews.length})</div>
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
        {state.reviews.map((review, index) => (
          <div className="swiper__reviews" key={index}>
            <div className="swiper__reviews__box">
              <img
                className="swiper__reviews__img"
                src={review.pfp}
                alt="profile"
              />
              <div className="swiper__reviews__box-text">
                <div className="swiper__reviews__box-text-name">
                  <div className="swiper__reviews__box-text-name-box">
                    {review.name}
                    <img
                      src={verified}
                      className="swiper__reviews__verified"
                      alt="google logo"
                    />
                  </div>
                </div>
                <div className="swiper__reviews__box-text-date">
                  {review.date}
                </div>
              </div>
            </div>
            <div className="swiper__reviews__Tbox">
              <Stars />
              <div className="swiper__reviews__text">{review.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsFeature;
