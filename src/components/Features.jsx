import {
 FaCar,
 FaShieldAlt,
 FaTags,
 FaHeadset
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <div className="box">
        <FaCar />
        <h3>Wide Selection</h3>
      </div>

      <div className="box">
        <FaShieldAlt />
        <h3>Best Quality</h3>
      </div>

      <div className="box">
        <FaTags />
        <h3>Best Prices</h3>
      </div>

      <div className="box">
        <FaHeadset />
        <h3>24/7 Support</h3>
      </div>

    </section>
  );
}

export default Features;