import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cars from "../data/cars";

function CarDetails() {
  const { id } = useParams();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  return (
    <>
      <Navbar />

      <section className="details-banner">
        <h1>{car.name}</h1>
        <p>Premium Luxury Vehicle</p>
      </section>

      <section className="car-details-container">

        <div className="details-image">

          <img
            src={car.image}
            alt={car.name}
          />

        </div>

        <div className="details-content">

          <h1>{car.name}</h1>

          <h2>{car.price}</h2>

          <div className="details-info">

            <div className="info-box">
              <h4>Year</h4>
              <p>{car.year}</p>
            </div>

            <div className="info-box">
              <h4>Mileage</h4>
              <p>{car.km} km</p>
            </div>

            <div className="info-box">
              <h4>Transmission</h4>
              <p>{car.transmission}</p>
            </div>

            <div className="info-box">
              <h4>Condition</h4>
              <p>Excellent</p>
            </div>

          </div>

          <h3>Description</h3>

          <p className="car-description">
            Experience luxury, performance, and cutting-edge
            technology with the {car.name}. Designed for
            comfort and power, this vehicle delivers an
            unforgettable driving experience.
          </p>

          <div className="details-buttons">

            <Link to="/test-drive">
              <button className="test-btn">
                Book Test Drive
              </button>
            </Link>

            <Link to="/inventory">
              <button className="back-btn">
                Back To Inventory
              </button>
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default CarDetails;