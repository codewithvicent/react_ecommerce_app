import "./carreviews.css";

export const CarReviews = ({ item }) => {
  return (
    <div className="car_reviews_wrapper">
      <img src={item.carImage} alt="" className="car_reviewed" />
      <div className="review_lower_main">
        <p className="review_type">{item.reviewType}</p>
        <p className="car_type">{item.carReviewed}</p>

        <div className="lower_review_area">
          <img
            src={item.reviewerProfileImage}
            alt=""
            className="reviewer_image"
          />
          <div className="reviewer_infor">
            <p>{item.reviewerName}</p>
            <p>{item.reviewerOccupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
