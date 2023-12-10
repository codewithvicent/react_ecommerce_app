import "./login.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/auth/Input";
import { useContext } from "react";
import { AuthContext } from "../../hooks/Authcontext";

const Login = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div className="login_wrapper">
      <div className="inner_login_wrapper">
        <div className="login_left">
          <p className="login_header">
            <span style={{ borderBottom: "2px solid #7d2ae8" }}>Lo</span>gin
          </p>
          <Input
            Icon={BsEnvelopeFill}
            type="email"
            placeholder={"Enter your emaill"}
          />
          <Input
            Icon={AiFillLock}
            type="password"
            placeholder={"Enter your password"}
          />

          <p>
            <Link to="/">Forgot Password</Link>
          </p>

          <button
            className="login_btn"
            onClick={() => {
              setIsLoggedIn(true);
              navigate("/");
            }}
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <span style={{ color: "#7d2ae8" }}>
              <Link to="/register">Signup</Link>
            </span>
          </p>
        </div>
        <div className="login_right">
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

export default Login;
