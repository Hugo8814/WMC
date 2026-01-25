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
        const res = await fetch("https://www.welfaremc.co.uk/data.json");
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
    return <div aria-live="polite">Loading customer reviews...</div>;
  }

  if (!state) {
    return (
      <div role="alert">Error loading reviews. Please try again later.</div>
    );
  }

  return (
    <section
      className="reviews__Feature"
      aria-labelledby="google-reviews-heading"
    >
      <div className="reviews__Box">
        <article
          className="reviews__card"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <div className="reviews__text">
            <div className="reviews__text-titlebox">
              <div className="reviews__text-logo">
                <img
                  className="reviews__text-logo-img"
                  src={googleImg}
                  alt="Google Reviews logo"
                  width="40"
                  height="40"
                />
              </div>
              <h3 id="google-reviews-heading" className="reviews__text-title">
                Customer Reviews
              </h3>
            </div>
            <div className="reviews__text-starbox">
              <div className="reviews__rating" itemProp="ratingValue">
                {state.rating}
              </div>
              <div
                className="reviews__stars"
                aria-label={`${state.rating} out of 5 stars`}
              >
                <Stars half={true} />
              </div>
              <div className="reviews__reviews" itemProp="reviewCount">
                (60+)
              </div>
            </div>
          </div>
          <a
            href="https://www.google.co.uk/search?q=Welfare+Massage+Centre&sca_esv=573938817b929d14&sca_upv=1&sxsrf=ADLYWIL2iW1gPL_A9pVcsF6O2DWUk7vRFg%3A1724542664575&source=hp&ei=yG7KZtntIIPZhbIPwtvQmAY&iflsig=AL9hbdgAAAAAZsp82LWw3sPRWic-2U16edo1HiNdB6zc&ved=0ahUKEwjZ8a2H5o6IAxWDbEEAHcItFGMQ4dUDCBg&uact=5&oq=Welfare+Massage+Centre&gs_lp=Egdnd3Mtd2l6IhZXZWxmYXJlIE1hc3NhZ2UgQ2VudHJlMgoQIxiABBgnGIoFMhkQLhiABBiSAxjHARgnGMkDGIoFGI4FGK8BMgUQABiABDIFEAAYgAQyBhAAGBYYHjIIEAAYgAQYogRIpQRQ0AFY0AFwAXgAkAEAmAFaoAFaqgEBMbgBA8gBAPgBAvgBAZgCAqACYagCCsICBxAjGCcY6gKYAwWSBwEyoAeJCQ&sclient=gws-wiz&zx=1724542652338&no_sw_cr=1#lrd=0x47dedb9c938e4ad7:0x986ba3f8f482775b,1,,,,"
            className="reviews__btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leave a review on Google for Welfare Massage Centre"
          >
            Review us on Google
          </a>
        </article>

        <div
          className="swiper"
          ref={swiperRef}
          role="region"
          aria-label="Customer testimonials carousel"
        >
          <div
            className="swiper__btns"
            role="group"
            aria-label="Carousel navigation"
          >
            <button
              onClick={handlePrev}
              className="swiper__btns__prev"
              aria-label="View previous reviews"
              type="button"
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="swiper__btns__next"
              aria-label="View next reviews"
              type="button"
            >
              {">"}
            </button>
          </div>

          {state.reviews.map((review, index) => (
            <article
              className="swiper__reviews"
              key={index}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="swiper__reviews__box">
                {review.profileImg && (
                  <img
                    className="swiper__reviews__img"
                    src={review.profileImg}
                    alt={`${review.name}'s profile picture`}
                    width="50"
                    height="50"
                  />
                )}
                <div className="swiper__reviews__box-text">
                  <div className="swiper__reviews__box-text-name">
                    <div className="swiper__reviews__box-text-name-box">
                      <span
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">{review.name}</span>
                      </span>
                      <img
                        src={verified}
                        className="swiper__reviews__verified"
                        alt="Verified reviewer badge"
                        width="16"
                        height="16"
                      />
                    </div>
                  </div>
                  <time
                    className="swiper__reviews__box-text-date"
                    itemProp="datePublished"
                  >
                    {review.time}
                  </time>
                </div>
              </div>
              <div className="swiper__reviews__Tbox">
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={review.rating} />
                  <meta itemProp="bestRating" content="5" />
                  <span className="sr-only">
                    {review.rating} out of 5 stars
                  </span>
                  <Stars rating={review.rating} />
                </div>
                <p className="swiper__reviews__text" itemProp="reviewBody">
                  {review.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsFeature;
