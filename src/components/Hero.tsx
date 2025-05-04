
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, MapPin, Ticket, Menu as MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Signature Espresso",
      description: "Our award-winning blend with notes of chocolate and caramel",
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop"
    },
    {
      title: "Seasonal Delights",
      description: "Try our limited edition Pumpkin Spice Latte today",
      imageUrl: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Artisan Pastries",
      description: "Freshly baked daily by our master pastry chef",
      imageUrl: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071&auto=format&fit=crop"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/30 to-transparent z-10" />
        </div>
      ))}
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
        <div className="max-w-2xl text-white animate-slide-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 text-coffee-cream">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-coffee-medium hover:bg-coffee-dark text-white">
              <Link to="/menu">
                <MenuIcon size={16} className="mr-2" />
                Explore Menu
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream/10">
              <Link to="/locations">
                <MapPin size={16} className="mr-2" />
                Find Locations
              </Link>
            </Button>
            <Button asChild className="bg-coffee-medium hover:bg-coffee-dark text-white">
              <Link to="/membership">
                <Ticket size={16} className="mr-2" />
                Join Membership
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-coffee-cream w-8'
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
