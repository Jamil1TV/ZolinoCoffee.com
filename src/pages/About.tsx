
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 gradient-text text-center">
            About ZOLINO
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop" 
              alt="ZOLINO Coffee Shop" 
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                ZOLINO began as a tiny espresso bar in 2010, founded by two friends with a passion for exceptional coffee. The name "ZOLINO" comes from combining the Italian words "sole" (sun) and "lino" (linen), representing our warm atmosphere and smooth coffee experience.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-coffee-dark">Our Mission</h2>
              <p className="mb-6">
                At ZOLINO, we believe that great coffee brings people together. Our mission is to create spaces where communities can gather, connect, and enjoy the perfect cup of coffee. Every bean we source, every drink we craft, and every pastry we bake is done with intention and care.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-coffee-dark">Our Coffee</h2>
              <p className="mb-6">
                We work directly with coffee farms around the world to source the highest quality beans, roasted in small batches to bring out their unique character. Our master roasters have developed signature blends exclusive to ZOLINO, creating distinctive flavor profiles you won't find anywhere else.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-coffee-dark">Our Team</h2>
              <p className="mb-6">
                Our baristas are not just employees – they're coffee artisans who undergo rigorous training in the art and science of coffee preparation. Many have won regional and national barista competitions, bringing their expertise and passion to every cup they serve.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-coffee-dark">Community Focus</h2>
              <p className="mb-6">
                Each ZOLINO location is designed to reflect and serve its neighborhood. We partner with local artists, host community events, and support local initiatives. We're not just in the community – we're part of it.
              </p>
              
              <div className="bg-coffee-cream/20 p-8 rounded-lg mt-10">
                <h3 className="text-xl font-playfair font-bold mb-4 text-coffee-dark">Our Values</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Quality without compromise</li>
                  <li>Sustainability in sourcing and operations</li>
                  <li>Community engagement and support</li>
                  <li>Innovation in coffee craft</li>
                  <li>Creating memorable experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
