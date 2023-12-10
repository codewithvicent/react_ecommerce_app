import "./vehiclecard.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";

export const VehicleCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="vehicle_card_wrapper"
      onClick={() => navigate("/vehicles/2334")}
    >
      <div className="vehicle_card_right">
        <Link to="/vehicles/vehicleid23">
          <div className="vehicle_img_wrapper">
            <img
              src={item.carImage}
              alt=""
              width={"100%"}
              height={"220px"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
      </div>

      <div className="vehicle_card_left">
        <div className="vehicle_card_left_upper">
          <div className="vehicle_card_left_upper_left">
            <p className="new_or_old">{item.isNewCar ? "NEW" : "USED"}</p>
            <p className="card_vehicle_name">{item.carName}</p>
            <div className="price">
              <p className="main_price">{item.carprice}</p>
              <p className="msrp_price">MSRP {item.MSRP}</p>
            </div>
            <p>
              <Link to="/">{item.monthlyPayment}</Link>
            </p>
          </div>
          <div className="vehicle_card_left_upper_right_wrapper">
            <div className="vehicle_card_left_upper_right">
              <AiOutlineHeart />
              <span>Save</span>
            </div>
          </div>
        </div>
        <div className="vehicle_card_left_lower">
          <div className="vehicle_card_left_lower_left">
            <p className="vehicle_man">GleenBuch {item.make}</p>
            <div className="vehicle_rating">
              <div className="rating_stars" style={{ display: "flex", gap: 3 }}>
                <AiFillStar color="#7d2ae8" size={14} />
                <AiFillStar color="#7d2ae8" size={14} />
                <AiFillStar color="#7d2ae8" size={14} />
                <AiOutlineStar color="#7d2ae8" size={14} />
                <AiOutlineStar color="#7d2ae8" size={14} />
              </div>
              <p
                style={{
                  color: "#7d2ae8",
                }}
                className="reviews_count"
              >
                (533 Reviews)
              </p>
            </div>
          </div>
          <div className="vehicle_card_left_lower_right">
            <button className="check_availability_btn">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
