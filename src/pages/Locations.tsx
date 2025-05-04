
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocationsSection from "../components/Locations";

const LocationsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-coffee-dark py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Our Locations</h1>
          </div>
        </section>
        
        {/* Reuse our Locations component */}
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default LocationsPage;
