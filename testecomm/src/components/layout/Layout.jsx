import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="children_wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
