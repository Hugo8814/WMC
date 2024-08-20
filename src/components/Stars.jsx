/* eslint-disable react/prop-types */
import fullStar from "../img/favorite.png";
import halfStar from "../img/rating.png";
function Stars({ half = false }) {
  return (
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
      {half ? (
        <div className="reviews__stars">
          <img src={halfStar} alt="4.5 stars rating" />
        </div>
      ) : (
        <div className="reviews__stars">
          <img src={fullStar} alt="4.5 stars rating" />
        </div>
      )}
    </div>
  );
}

export default Stars;
