import Navbar from "../components/Navbar";
import {
  FaCar,
  FaTools,
  FaOilCan,
  FaHandshake,
  FaCarCrash,
  FaTruckPickup
} from "react-icons/fa";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>Our Services</h1>
        <p>
          We provide complete automotive solutions to make your
          driving experience smooth and enjoyable.
        </p>
      </section>

      <section className="services-container">

        <div className="service-card">
          <FaCar className="service-icon" />
          <h2>Car Sales</h2>
          <p>
            Explore our collection of luxury, sports,
            family, and SUV vehicles at competitive prices.
          </p>
        </div>

        <div className="service-card">
          <FaTools className="service-icon" />
          <h2>Maintenance</h2>
          <p>
            Professional maintenance and repair services
            from certified technicians.
          </p>
        </div>

        <div className="service-card">
          <FaOilCan className="service-icon" />
          <h2>Oil Change</h2>
          <p>
            Regular oil changes to improve engine life
            and vehicle performance.
          </p>
        </div>

        <div className="service-card">
          <FaHandshake className="service-icon" />
          <h2>Financing</h2>
          <p>
            Easy EMI plans and flexible financing options
            for all customers.
          </p>
        </div>

        <div className="service-card">
          <FaCarCrash className="service-icon" />
          <h2>Insurance</h2>
          <p>
            Comprehensive insurance coverage with
            affordable premium packages.
          </p>
        </div>

        <div className="service-card">
          <FaTruckPickup className="service-icon" />
          <h2>Road Assistance</h2>
          <p>
            24/7 roadside support whenever and wherever
            you need assistance.
          </p>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default Services;