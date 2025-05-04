import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags?: string[];
}

const FeaturedMenu = () => {
  const featuredItems: MenuItemProps[] = [
    {
      name: "Signature Latte",
      description: "Our house blend espresso with velvety steamed milk and a hint of vanilla",
      price: "$4.95",
      image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1974&auto=format&fit=crop",
      category: "Hot Drinks",
      tags: ["Popular", "House Special"]
    },
    {
      name: "Iced Caramel Macchiato",
      description: "Espresso poured over cold milk with our homemade caramel syrup",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1769&auto=format&fit=crop",
      category: "Cold Drinks",
      tags: ["Refreshing"]
    },
    {
      name: "Avocado Toast",
      description: "Smashed avocado on artisan sourdough with cherry tomatoes and feta",
      price: "$8.95",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=1974&auto=format&fit=crop",
      category: "Food",
      tags: ["Vegetarian"]
    },
    {
      name: "Chocolate Croissant",
      description: "Flaky butter croissant filled with rich Belgian chocolate",
      price: "$3.95",
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1770&auto=format&fit=crop",
      category: "Sweets",
      tags: ["Bakery"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gradient-text">
            Our Featured Menu
          </h2>
          <p className="text-coffee-medium max-w-2xl mx-auto">
            Discover our most loved creations, carefully crafted with premium ingredients and passion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-coffee-medium hover:bg-coffee-dark text-white px-8">
            <Link to="/menu">
              <Menu size={16} className="mr-2" />
              View Full Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ name, description, price, image, category, tags }: MenuItemProps) => {
  return (
    <div className="menu-item group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="menu-image group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-coffee-dark">{category}</Badge>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="font-playfair font-bold text-lg">{name}</h3>
          <span className="font-medium text-coffee-dark">{price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 bg-coffee-light/10 text-coffee-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedMenu;
