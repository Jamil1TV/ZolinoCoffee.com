
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedMenu from "../components/FeaturedMenu";
import EmployeeOfMonth from "../components/EmployeeOfMonth";
import AboutSection from "../components/AboutSection";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <AboutSection />
        <Locations />
        <EmployeeOfMonth />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
