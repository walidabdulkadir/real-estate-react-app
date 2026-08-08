import Nav from "./components/NavBar/Nav";
import HeroSection from "./components/HeroSection";
import Testimony from "./components/Testimony";
import WhyUsList from "./components/WhyUs/WhyUsList";
import ResidanceList from "./components/Residence/ResidanceList";
import AboutList from "./components/About/AboutList";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Testimony />
      <WhyUsList />
      <ResidanceList />
      <AboutList />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
