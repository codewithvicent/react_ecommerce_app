import { Link } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/images/cwvcars.png";
import { useContext } from "react";
import { AuthContext } from "../../hooks/Authcontext";

export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div className="navbar_wrapper">
      <div className="lower_navbar">
        <div className="lower_navbar_left">
          <Link to="/">
            <img src={Logo} width={130} alt="" />
          </Link>
        </div>
        <div className="lower_navbar_middle">
          <div className="input_wrapper">
            <div style={{ cursor: "pointer" }}>
              <FaSearch color="gray" />
            </div>
            <input type="text" placeholder="Search cars.." />
          </div>
        </div>
        <div className="lower_navbar_right">
          <ul>
            <li className="home_link">
              <Link to="/">Home</Link>
            </li>
            <li className="home_link">
              <Link to="/vehicles">Buy a Car</Link>
            </li>
            <li
              className="login_link"
              onClick={() => {
                setIsLoggedIn(isLoggedIn ? false : true);
              }}
            >
              <Link to={isLoggedIn ? "/" : "/login"}>
                <button className="login_btn">
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="register_link">
                <Link to="/register">
                  <button className="register_btn">Register</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
