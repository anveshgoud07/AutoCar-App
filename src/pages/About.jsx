import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>About AutoShow</h1>
      </section>

      <section className="about-container">

        <div className="about-content">

          <h2>Drive Your Dream Car</h2>

          <p>
            AutoShow is one of the leading automobile
            dealerships offering premium vehicles,
            trusted services, and excellent customer support.
          </p>

          <p>
            With over 10 years of experience, we have helped
            thousands of customers find their perfect vehicle.
          </p>

          <p>
            Our mission is to provide quality vehicles,
            transparent pricing, and an exceptional
            buying experience.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat-box">
            <h1>200+</h1>
            <p>Cars Available</p>
          </div>

          <div className="stat-box">
            <h1>1500+</h1>
            <p>Happy Customers</p>
          </div>

          <div className="stat-box">
            <h1>10+</h1>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h1>100%</h1>
            <p>Customer Satisfaction</p>
          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default About;