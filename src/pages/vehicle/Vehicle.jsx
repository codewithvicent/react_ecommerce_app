import "./vehicle.css";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

export const Vehicle = () => {
  const [comment, setComment] = useState(
    "Hello seller, I would like to know if your 2023 Audi A5 quattro Premium is still available that you listed on a car selling website. Thank you."
  );

  const [tradeinVailable, setTradeInAvailable] = useState(false);

  return (
    <div className="single_vehicle_wrapper">
      <div className="single_vehicle_left">
        <div className="single_vehicle_img_wrapper">
          <img
            src="https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?size=626&ext=jpg&ga=GA1.1.1304378105.1690012069&semt=sph"
            alt=""
            width={"100%"}
            height={"300px"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="main_information">
          <p className="new_or_old">New</p>
          <p>2023 Audi A5 Sportback 45 S line quattro Premium</p>
          <p className="main_price">$34,900</p>
          <p>
            <Link style={{ color: "#7d2ae8", textDecoration: "none" }} to="/">
              $246/mo*
            </Link>
          </p>
        </div>
        <div className="car_details_wrapper">
          <h3 style={{ fontWeight: 450, overflow: "hidden" }}>
            <span style={{ borderBottom: "2px solid #7d2ae8" }}>Car</span>{" "}
            Details
          </h3>
          <div className="single_car_details_wrapper">
            <div className="single_detail">
              <p className="property">Exterior color</p>
              <p className="value">Mythos Black Metallic</p>
            </div>
            <div className="single_detail">
              <p className="property">Interior color</p>
              <p className="value">Black</p>
            </div>
            <div className="single_detail">
              <p className="property">DriveTrain</p>
              <p className="value">All-wheel Drive</p>
            </div>
            <div className="single_detail">
              <p className="property">Fuel Type</p>
              <p className="value">Petrol</p>
            </div>
            <div className="single_detail">
              <p className="property">Engine</p>
              <p className="value">2.0L I4 16V GDI DOHC Turbo</p>
            </div>
            <div className="single_detail">
              <p className="property">VIN</p>
              <p className="value">WAUDACF56PA062748</p>
            </div>
            <div className="single_detail">
              <p className="property">Mileage</p>
              <p className="value">21,000 km</p>
            </div>
            <div className="single_detail">
              <p className="property">Seating</p>
              <p className="value">Leather Seats</p>
            </div>
          </div>
        </div>
        <div className="car_details_wrapper">
          <h3
            style={{
              fontWeight: 450,
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <span style={{ borderBottom: "2px solid #7d2ae8" }}>Seller</span>{" "}
            Details
          </h3>
          <div className="vehicle_card_left_lower_left">
            <p
              className="vehicle_man"
              style={{ fontSize: "17px", marginBottom: "10px" }}
            >
              GleenBuch Toyota
            </p>

            <div className="single_vehicle_rating">
              <AiFillStar color="#7d2ae8" size={14} />
              <AiFillStar color="#7d2ae8" size={14} />
              <AiFillStar color="#7d2ae8" size={14} />
              <AiOutlineStar color="#7d2ae8" size={14} />
              <AiOutlineStar color="#7d2ae8" size={14} />
              <p className="reviews_count" style={{ color: "#7d2ae8" }}>
                (533 Reviews)
              </p>
            </div>
            <p style={{ marginTop: "10px" }}>
              14634 City Center Ct MBR, VA 2023
            </p>
          </div>
        </div>
      </div>

      <div className="single_vehicle_right">
        <div className="contact_seller_wrapper">
          <h3>Contact Seller</h3>
          <h3 style={{ fontWeight: 450 }}>Call +(256) 456 772 383</h3>

          <div className="contact_form_wrapper">
            <form action="" style={{ width: "100%" }}>
              <div className="half_input_main_wrapper">
                <div className="half_input_wrapper">
                  <input type="text" placeholder="First Name*" />
                </div>
                <div className="half_input_wrapper">
                  <input type="text" placeholder="Last Name*" />
                </div>
              </div>

              <div className="half_input_main_wrapper">
                <div className="half_input_wrapper">
                  <input type="text" placeholder="Email*" />
                </div>
                <div className="half_input_wrapper">
                  <input type="text" placeholder="Contact(optional)" />
                </div>
              </div>

              <div className="full_input_wrapper">
                <textarea
                  name=""
                  id=""
                  placeholder="dffd"
                  rows="5"
                  height="50px"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <div className="trade_in_wrapper">
                <input
                  type="checkbox"
                  value={tradeinVailable}
                  onChange={(e) => setTradeInAvailable(!tradeinVailable)}
                  name="tradein"
                  id=""
                />
                <p>I have a Trade In</p>
              </div>

              {tradeinVailable && (
                <div className="tradein_available_wrapper">
                  <div className="half_input_main_wrapper">
                    <div className="half_input_wrapper">
                      <select name="" id="">
                        <option value="">Select Make</option>
                        <option value="BMW">BMW</option>
                        <option value="Austin">Austin</option>
                        <option value="Buggati">Bugatti</option>
                        <option value="Chevrolet">Chevrolet</option>
                      </select>
                    </div>
                    <div className="half_input_wrapper">
                      <select name="" id="">
                        <option value="">Select Model</option>
                        <option value="1500">1500</option>
                        <option value="1600">1600</option>
                        <option value="2000">2000</option>
                        <option value="Chiron">Chiron</option>
                        <option value="Veron">Veron</option>
                      </select>
                    </div>
                  </div>
                  <div className="half_input_main_wrapper">
                    <div className="half_input_wrapper">
                      <select name="" id="">
                        <option value="">Select Year</option>

                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2005">2005</option>
                        <option value="2010">2010</option>
                      </select>
                    </div>
                    <div className="half_input_wrapper">
                      <input type="text" placeholder="Exterior Color*" />
                    </div>
                  </div>
                  <div className="half_input_main_wrapper">
                    <div className="half_input_wrapper">
                      <input type="text" placeholder="Mileage*" />
                    </div>
                    <div className="half_input_wrapper">
                      <input type="text" placeholder="VIN(optional)*" />
                    </div>
                  </div>
                </div>
              )}

              <div className="vehicle_card_left_lower_right">
                <button className="check_availability_btn">
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
