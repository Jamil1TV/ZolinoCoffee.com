
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

interface LocationProps {
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
}

const Locations = () => {
  const locations: LocationProps[] = [
    {
      name: "Downtown",
      address: "123 Main Street, City Center",
      hours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-6pm",
      phone: "(555) 123-4567",
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop"
    },
    {
      name: "Riverside",
      address: "456 River Road, Waterfront District",
      hours: "Mon-Sun: 8am-9pm",
      phone: "(555) 234-5678",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1847&auto=format&fit=crop"
    },
    {
      name: "University Campus",
      address: "789 College Avenue, University District",
      hours: "Mon-Fri: 6:30am-10pm, Sat-Sun: 7am-8pm",
      phone: "(555) 345-6789",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1770&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-coffee-dark text-white" id="locations">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">
          Our Locations
        </h2>
        <p className="text-coffee-cream/80 text-center max-w-2xl mx-auto mb-12">
          Visit us at any of our cozy locations for the perfect coffee experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationCard = ({ name, address, hours, phone, image }: LocationProps) => {
  return (
    <Card className="overflow-hidden bg-coffee-medium/20 border-coffee-medium/30 backdrop-blur-sm">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair font-bold text-xl mb-4 text-white">{name} Location</h3>
        
        <div className="space-y-3 text-coffee-cream/90">
          <div className="flex items-start">
            <MapPin className="mr-3 h-5 w-5 text-coffee-cream flex-shrink-0" />
            <span>{address}</span>
          </div>
          
          <div className="flex items-start">
            <Clock className="mr-3 h-5 w-5 text-coffee-cream flex-shrink-0" />
            <span>{hours}</span>
          </div>
          
          <div className="flex items-start">
            <Phone className="mr-3 h-5 w-5 text-coffee-cream flex-shrink-0" />
            <span>{phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Locations;
