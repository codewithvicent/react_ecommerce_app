import { Link } from "react-router-dom";
import Logo from "../../assets/images/cwvcars.png";
import Payment from "../../assets/images/payment.png";
import "./footer.css";
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_left">
          <img src={Logo} width="135" alt="" />
          <div className="footer_contacts_wrapper">
            <p>Got questions, call us 24/7</p>
            <p>+1 78 345 345</p>
            <h3>Contact Info</h3>
            <p>Avix Business Centre 42 to 43, High Street, B16 8PE</p>
            <div className="social_icons">
              <Link
                to="/"
                style={{
                  backgroundColor: "#7d2ae8",
                  color: "white",
                  padding: "8px",
                  borderRadius: "50%",
                  width: "13px",
                  height: "13px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTwitter />
              </Link>
              <Link
                to="/"
                style={{
                  backgroundColor: "#7d2ae8",
                  color: "white",
                  padding: "8px",
                  borderRadius: "50%",
                  width: "13px",
                  height: "13px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaYoutube />
              </Link>
              <Link
                to="/"
                style={{
                  backgroundColor: "#7d2ae8",
                  color: "white",
                  padding: "8px",
                  borderRadius: "50%",
                  width: "13px",
                  height: "13px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                style={{
                  backgroundColor: "#7d2ae8",
                  color: "white",
                  padding: "8px",
                  borderRadius: "50%",
                  width: "13px",
                  height: "13px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_middle1">
          <h3>Navigation</h3>

          <Link to="/">
            <p>About Us</p>
          </Link>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/">
            <p>Blog</p>
          </Link>
          <Link to="/">
            <p>Contact Us</p>
          </Link>
          <Link to="/">
            <p>Shop</p>
          </Link>
          <Link to="/">
            <p>News & Updates</p>
          </Link>
        </div>
        <div className="footer_middle2">
          <h3>Categories</h3>

          <Link to="/">
            <p>Luxury Cars</p>
          </Link>
          <Link to="/">
            <p>Electric and Hybrid Cars</p>
          </Link>
          <Link to="/">
            <p>Compact Cars</p>
          </Link>
          <Link to="/">
            <p>Sport Utility Vehicles</p>
          </Link>
          <Link to="/">
            <p>Sports Cars</p>
          </Link>
          <Link to="/">
            <p>Other Cars</p>
          </Link>
        </div>
        <div className="footer_right">
          <h3>Customer Care</h3>
          <Link to="/">
            <p>Account</p>
          </Link>
          <Link to="/">
            <p>Track your Order</p>
          </Link>
          <Link to="/">
            <p>Customer Service</p>
          </Link>
          <Link to="/">
            <p>FAQs </p>
          </Link>
          <Link to="/">
            <p>Terms & Conditions</p>
          </Link>
          <Link to="/">
            <img src={Payment} alt="" width={"70%"} />
          </Link>
        </div>
      </div>
      <div className="footer_copyright">
        <p>© CWV Cars Ltd - All Rights Reserved</p>
      </div>
    </footer>
  );
};
