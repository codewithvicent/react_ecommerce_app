import "./register.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/auth/Input";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register_wrapper">
      <div className="inner_register_wrapper">
        <div className="register_left">
          <p className="register_header">
            <span style={{ borderBottom: "2px solid #7d2ae8" }}>Re</span>gister
          </p>
          <Input
            Icon={BsEnvelopeFill}
            type="email"
            placeholder={"Enter your email"}
          />

          <Input
            Icon={FaUserAlt}
            type="text"
            placeholder={"Enter your username"}
          />

          <Input
            Icon={AiFillLock}
            type="password"
            placeholder={"Enter your password"}
          />

          <p>{/* <Link to="/">Forgot Password</Link> */}</p>

          <button className="register_btn" onClick={() => navigate("/login")}>
            Register
          </button>

          <p>
            Already have an account?{" "}
            <span style={{ color: "#7d2ae8" }}>
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
        <div className="register_right">
          <img
            src="https://img.freepik.com/premium-photo/headlights-hood-black-sports-car_146671-5564.jpg?w=900"
            alt=""
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
