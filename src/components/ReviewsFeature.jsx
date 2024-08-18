import googleImg from "../img/google.png";
import fullStar from "../img/favorite.png";
import halfStar from "../img/rating.png";

function ReviewsFeature() {
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
              <div className="reviews__stars">
                <img src={fullStar} alt="4.5 stars rating" />
              </div>
              <div className="reviews__stars">
                <img src={fullStar} alt="4.5 stars rating" />
              </div>
              <div className="reviews__stars">
                <img src={fullStar} alt="4.5 stars rating" />
              </div>
              <div className="reviews__stars">
                <img src={fullStar} alt="4.5 stars rating" />
              </div>
              <div className="reviews__stars">
                <img src={halfStar} alt="4.5 stars rating" />
              </div>
            </div>
            <div className="reviews__reviews">(55+)</div>
          </div>
        </div>
        <button className="reviews__btn"> Review us on Google</button>
      </div>

      <div className="swiper">
        <div className="swiper__reviews"></div>
      </div>
    </div>
  );
}

export default ReviewsFeature;
