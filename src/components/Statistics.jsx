import {
 FaCar,
 FaSmile,
 FaAward
} from "react-icons/fa";

function Statistics() {
  return (
    <section className="stats">

      <div>
        <FaCar />
        <h2>200+</h2>
        <p>Cars In Stock</p>
      </div>

      <div>
        <FaSmile />
        <h2>1500+</h2>
        <p>Happy Customers</p>
      </div>

      <div>
        <FaAward />
        <h2>100%</h2>
        <p>Satisfaction</p>
      </div>

    </section>
  );
}

export default Statistics;

