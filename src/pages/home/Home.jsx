import { CarReviews } from "../../components/carreviews/CarReviews";
import { Slider } from "../../components/slider/Slider";
import { reviews } from "../../dummydata/data";
import { Vehicles } from "../vehicles/Vehicles";
import "./home.css";

export const Home = () => {
  return (
    <div className="home_wrapper">
      <Slider />

      {/* VEHICLES */}
      <Vehicles
        heading={"Welcome Back, Pick a Car!"}
        subHeading={
          "Checkout these recommendations based on cars you've reviewed"
        }
      />

      {/* Latest Releases & Expert Reviews */}
      <div className="car_reviews_main_wrapper">
        <h3 className="home_heading">
          The latest new car releases and expert reviews
        </h3>
        <p className="home_paragraph">
          Get our experts' honest take on new makes and models.
        </p>
        <div className="review_list">
          {reviews.map((review) => (
            <CarReviews item={review} key={review.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
