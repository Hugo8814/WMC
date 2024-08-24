import googleImg from "../img/google.png";
import Stars from "./Stars";
import { useEffect, useRef, useState } from "react";
import verified from "../img/facebook-verified.png";

// Importing images
import jonna from "../pfp/jonna.png";
import patric from "../pfp/patric.png";
import kev from "../pfp/kev.png";
import alicebentley from "../pfp/alicebentley.png";
import colin from "../pfp/colin.png";
import chez from "../pfp/chez.png";
import claire from "../pfp/claire.png";
import daneast from "../pfp/daneast.png";
import reshmaparmar from "../pfp/reshmaparmar.png";
import emma from "../pfp/emma.png";
import greg from "../pfp/greg.png";
import jodee from "../pfp/jodee.png";
import katie from "../pfp/katie.png";
import Kennesmodesto from "../pfp/Kennesmodesto.png";
import ketlyn from "../pfp/ketlyn.png";
import michelle from "../pfp/michelle.png";
import runningman from "../pfp/runningman.png";
import sarah from "../pfp/sarah.png";
import sarahwills from "../pfp/sarahwills.png";
import stephen from "../pfp/stephen.png";

const imageMap = {
  jonna: jonna,
  patric: patric,
  kev: kev,
  alicebentley: alicebentley,
  colin: colin,
  chez: chez,
  claire: claire,
  daneast: daneast,
  reshmaparmar: reshmaparmar,
  emma: emma,
  greg: greg,
  jodee: jodee,
  katie: katie,
  Kennesmodesto: Kennesmodesto,
  ketlyn: ketlyn,
  michelle: michelle,
  runningman: runningman,
  sarah: sarah,
  sarahwills: sarahwills,
  stephen: stephen,
};

function ReviewsFeature() {
  const swiperRef = useRef(null);
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://hugo8814.github.io/modal/data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        // Map images based on filenames without extensions
        const reviewsWithImages = data.result.reviews.map((review) => {
          const profileImg = imageMap[review.pfp] || null; // Use imageMap to resolve image path
          return { ...review, profileImg };
        });

        setState({ ...data.result, reviews: reviewsWithImages });
      } catch (error) {
        console.error("Fetch error:", error);
        setState(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleNext = () => {
    swiperRef.current?.scrollBy({
      top: 0,
      left: 260,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    swiperRef.current?.scrollBy({
      top: 0,
      left: -260,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!state) {
    return <div>Error loading reviews.</div>;
  }

  return (
    <div className="reviews__Feature">
      <div className="reviews__Box">
        <div className="reviews__card">
          <div className="reviews__text">
            <div className="reviews__text-titlebox">
              <div className="reviews__text-logo">
                <img
                  className="reviews__text-logo-img"
                  src={googleImg}
                  alt="Google Reviews"
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
          <a
            href="https://www.google.co.uk/search?q=Welfare+Massage+Centre&sca_esv=573938817b929d14&sca_upv=1&sxsrf=ADLYWIL2iW1gPL_A9pVcsF6O2DWUk7vRFg%3A1724542664575&source=hp&ei=yG7KZtntIIPZhbIPwtvQmAY&iflsig=AL9hbdgAAAAAZsp82LWw3sPRWic-2U16edo1HiNdB6zc&ved=0ahUKEwjZ8a2H5o6IAxWDbEEAHcItFGMQ4dUDCBg&uact=5&oq=Welfare+Massage+Centre&gs_lp=Egdnd3Mtd2l6IhZXZWxmYXJlIE1hc3NhZ2UgQ2VudHJlMgoQIxiABBgnGIoFMhkQLhiABBiSAxjHARgnGMkDGIoFGI4FGK8BMgUQABiABDIFEAAYgAQyBhAAGBYYHjIIEAAYgAQYogRIpQRQ0AFY0AFwAXgAkAEAmAFaoAFaqgEBMbgBA8gBAPgBAvgBAZgCAqACYagCCsICBxAjGCcY6gKYAwWSBwEyoAeJCQ&sclient=gws-wiz&zx=1724542652338&no_sw_cr=1#lrd=0x47dedb9c938e4ad7:0x986ba3f8f482775b,1,,,,"
            className="reviews__btn"
          >
            Review us on Google
          </a>
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
                {review.profileImg && (
                  <img
                    className="swiper__reviews__img"
                    src={review.profileImg}
                    alt={`${review.name}'s profile`}
                  />
                )}
                <div className="swiper__reviews__box-text">
                  <div className="swiper__reviews__box-text-name">
                    <div className="swiper__reviews__box-text-name-box">
                      {review.name}
                      <img
                        src={verified}
                        className="swiper__reviews__verified"
                        alt="Verified"
                      />
                    </div>
                  </div>
                  <div className="swiper__reviews__box-text-date">
                    {review.time}
                  </div>
                </div>
              </div>
              <div className="swiper__reviews__Tbox">
                <Stars rating={review.rating} />
                <div className="swiper__reviews__text">{review.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsFeature;
