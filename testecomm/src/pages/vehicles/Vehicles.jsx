import { Link } from "react-router-dom";
import { VehicleCard } from "../../components/vehicles/VehicleCard";
import "./vehicles.css";
import { cars } from "../../dummydata/data";

export const Vehicles = ({ heading, subHeading }) => {
  return (
    <div className="vehicles_wrapper">
      {/* <div className="vehicle_header">Saloon Cars</div> */}
      <div className="vehicle_header">
        {heading || "New and used vehicles for sale"}
      </div>
      {subHeading && (
        <div
          style={{
            fontWeight: 400,
          }}
        >
          <p>{subHeading || "New and used vehicles for sale"}</p>
        </div>
      )}
      {!subHeading && (
        <div className="vehicle_upper_section">
          <div className="filter_vehicles">
            <h3 style={{ textAlign: "left" }}>Filter Vehicles:</h3>
            <div className="category_and_color">
              <select name="" id="">
                <option value={""}>Select Category</option>
                <option value={"Luxury Cars"}>Luxury Cars</option>
                <option value={"Electric and Hybrid Cars"}>
                  Electric and Hybrid Cars
                </option>
                <option value={"Compact Cars"}>Compact Cars</option>
                <option value={"Sports Cars"}>Sports Cars</option>
                <option value={"Sports Cars"}>Sport Utility Vehicles</option>
                <option value={"Other"}>Other</option>
              </select>
              <select name="" id="">
                <option value={""}>Select Color</option>
                <option value={"Yellow"}>Yellow</option>
                <option value={"Black"}>Black</option>
                <option value={"White"}>White</option>
                <option value={"Blue"}>Blue</option>
              </select>
            </div>
          </div>
          <div className="sort_vehicles">
            <h3>Sort Vehicles:</h3>
            <select name="" id="">
              <option value={""}>Select Criteria</option>
              <option value={"Asc"}>Price (Asc)</option>
              <option value={"Desc"}>Price (Desc)</option>
              <option value={"HighM"}>Highest (Mileage)</option>
              <option value={"LowM"}>Lowest (Mileage)</option>
              <option value={"OldY"}>Oldest (Year)</option>
              <option value={"NewY"}>Newest (Year)</option>
            </select>
          </div>
        </div>
      )}

      {/* VEHICLE CARD */}
      {cars.map((car) => (
        <VehicleCard item={car} key={car.id} />
      ))}
      {/* <VehicleCard />
      <VehicleCard />
      {!subHeading && (
        <>
          <VehicleCard />
          <VehicleCard />
        </>
      )} */}

      {subHeading && (
        <Link to="/vehicles" className="view_more">
          View More
        </Link>
      )}

      {!subHeading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <button className="load_more">Load More</button>
        </div>
      )}
    </div>
  );
};
