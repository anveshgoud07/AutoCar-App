import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedCars from "../components/FeaturedCars";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      {/* <FeaturedCars /> */}
      {/* <Statistics /> */}
      <Footer/>
    </>
  );
}

export default Home;