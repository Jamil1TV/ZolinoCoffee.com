
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Clock, Ticket } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface OfferProps {
  title: string;
  description: string;
  days: string;
  validUntil: string;
  category: string;
  id: string;
}

const Offers = () => {
  const offers: OfferProps[] = [
    {
      id: "offer1",
      title: "Happy Hour Special",
      description: "Enjoy 50% off any specialty drink between 3-5pm daily",
      days: "Monday to Friday",
      validUntil: "Ongoing",
      category: "Daily Special"
    },
    {
      id: "offer2",
      title: "Breakfast Bundle",
      description: "Any coffee and pastry for just $7.99 before 11am",
      days: "All Week",
      validUntil: "December 31, 2025",
      category: "Bundle"
    },
    {
      id: "offer3",
      title: "Seasonal Special",
      description: "Try our limited-edition Pumpkin Spice Collection",
      days: "All Week",
      validUntil: "November 30, 2025",
      category: "Seasonal"
    },
    {
      id: "offer4",
      title: "Student Discount",
      description: "10% off your entire purchase with valid student ID",
      days: "All Week",
      validUntil: "Ongoing",
      category: "Discount"
    },
    {
      id: "offer5",
      title: "Coffee Club Tuesday",
      description: "Double points for Coffee Club members every Tuesday",
      days: "Tuesday",
      validUntil: "Ongoing",
      category: "Membership"
    },
    {
      id: "offer6",
      title: "Family Weekend Bundle",
      description: "Purchase 4 drinks and get 1 free pastry of your choice",
      days: "Saturday & Sunday",
      validUntil: "December 31, 2025",
      category: "Bundle"
    },
    {
      id: "offer7",
      title: "First-Time Visitor",
      description: "First-time visitors get a free small coffee with any purchase",
      days: "All Week",
      validUntil: "Ongoing",
      category: "Special"
    }
  ];

  const handleClaimOffer = (offerId: string, offerTitle: string) => {
    console.log(`Claimed offer: ${offerId}`);
    toast({
      title: "Offer Claimed!",
      description: `You've claimed the "${offerTitle}" offer. Show this to the barista during checkout.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-coffee-dark py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Current Special Offers</h1>
            <p className="text-center text-coffee-cream/80 max-w-2xl mx-auto mb-8">
              Take advantage of our limited-time promotions and exclusive deals
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                onClaim={() => handleClaimOffer(offer.id, offer.title)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const OfferCard = ({ offer, onClaim }: { offer: OfferProps; onClaim: () => void }) => {
  return (
    <Card className="overflow-hidden border-coffee-light/20 transition-all duration-300 hover:shadow-lg">
      <div className="bg-coffee-medium/10 px-6 py-6">
        <h3 className="text-xl font-bold font-playfair">{offer.title}</h3>
        <p className="text-gray-600 mt-2">{offer.description}</p>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Calendar className="text-coffee-medium h-5 w-5 mr-2" />
          <span className="text-sm">{offer.days}</span>
        </div>
        
        <div className="flex items-center">
          <Clock className="text-coffee-medium h-5 w-5 mr-2" />
          <span className="text-sm">Valid until: {offer.validUntil}</span>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-gray-50 flex items-center justify-between">
        <Badge variant="outline" className="bg-coffee-light/10 text-coffee-dark border-coffee-light">
          {offer.category}
        </Badge>
        <Button 
          onClick={onClaim} 
          className="bg-coffee-medium hover:bg-coffee-dark text-white"
          size="sm"
        >
          <Ticket className="w-4 h-4 mr-2" />
          Claim Offer
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Offers;
