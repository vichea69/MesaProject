import "./App.css";
import "./Components/Navbar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import FeatureHero from "./Components/FeatureHero.jsx";
import Hero2 from "./Components/Hero2.jsx";
import TeamSection from "./Components/TeamSection.jsx";
import Price from "./Components/Price.jsx";
import Faq from "./Components/Faq.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHero />
      <Hero2 />
      <TeamSection />
      <Price />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
