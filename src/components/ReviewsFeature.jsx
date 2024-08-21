import googleImg from "../img/google.png";
import Stars from "./Stars";
import { useEffect, useRef, useState } from "react";
import verified from "../img/facebook-verified.png";

function ReviewsFeature() {
  const swiperRef = useRef(null);
  const [state, setState] = useState(null); // Initialize state as null
  const [loading, setLoading] = useState(true); // Loading state to manage the fetch

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/result");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setState(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setState(null); // In case of error, set state to null
      } finally {
        setLoading(false); // Stop loading once fetch is done
      }
    }

    fetchData();
  }, []);

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

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  if (!state) {
    return <div>Error loading reviews.</div>; // Render error state
  }

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
              <Stars half={true} />
            </div>
            <div className="reviews__reviews">(60+)</div>
          </div>
        </div>
        <button className="reviews__btn">Review us on Google</button>
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

        {state.reviews.map((review, index) => (
          <div className="swiper__reviews" key={index}>
            <div className="swiper__reviews__box">
              <img
                className="swiper__reviews__img"
                src={review.pfp}
                alt="profile pic"
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
                  {review.time}
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
