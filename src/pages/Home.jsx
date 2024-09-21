import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import MainCard from "../components/ContentCard";
import ReviewCards from "./ReviewCards";
import Pricing from "./Pricing";
import Demo from "./Demo";
import Footer from "./Footer"
function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <MainCard />
      <ReviewCards />
      <Pricing />
      <Demo />
      <Footer />    
    </>
  );
}
export default home;
