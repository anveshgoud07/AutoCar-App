import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";


import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">

        <div className="footer-container">

          {/* Company Info */}

          <div className="footer-section">

            <h2 className="footer-logo">
            <span><IoCarSport /></span>Auto<span>Show</span>
            </h2>

            <p>
              AutoShow is your trusted destination for
              premium vehicles, exceptional customer service,
              and unbeatable automotive experiences.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-section">

            <h3>Quick Links</h3>

            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/inventory">Inventory</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div className="footer-section">

            <h3>Our Services</h3>

            <ul>

              <li>Car Sales</li>

              <li>Car Financing</li>

              <li>Vehicle Insurance</li>

              <li>Maintenance</li>

              <li>Road Assistance</li>

              <li>Test Drive Booking</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-section">

            <h3>Contact Info</h3>

            <p>
              <FaMapMarkerAlt />
              Hyderabad, Telangana
            </p>

            <p>
              <FaPhoneAlt />
              +91 9876543210
            </p>

            <p>
              <FaEnvelope />
              info@autoshow.com
            </p>

            <p>
              Mon - Sat : 9:00 AM - 8:00 PM
            </p>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © 2026 AutoShow. All Rights Reserved.
          </p>

          <p>
            Designed By Anvesh
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;