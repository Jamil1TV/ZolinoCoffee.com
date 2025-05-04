
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 gradient-text">
              The ZOLINO Story
            </h2>
            
            <p className="text-gray-600 mb-6">
              ZOLINO began as a tiny espresso bar in 2010, founded by two friends with a passion for exceptional coffee. The name "ZOLINO" comes from combining the Italian words "sole" (sun) and "lino" (linen), representing our warm atmosphere and smooth coffee experience.
            </p>
            
            <p className="text-gray-600 mb-8">
              Over the years, we've grown to multiple locations, but our commitment remains unchanged: to serve the finest ethically-sourced coffee in a welcoming environment. Each ZOLINO café is designed to be a community gathering place where connections are made and moments are savored.
            </p>
            
            <div className="flex items-center">
              <Button asChild className="bg-coffee-medium hover:bg-coffee-dark text-white">
                <Link to="/about">
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1856&auto=format&fit=crop" 
                alt="ZOLINO Coffee Shop" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-coffee-cream rounded-full flex items-center justify-center p-4 shadow-lg">
                <span className="font-playfair text-coffee-dark text-center font-bold">
                  Est. 2010
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
