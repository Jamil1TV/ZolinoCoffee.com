
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags?: string[];
}

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("hot-drinks");

  const menuItems: MenuItem[] = [
    // Hot Drinks
    {
      name: "Signature Latte",
      description: "Our house blend espresso with velvety steamed milk and a hint of vanilla",
      price: "$4.95",
      image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1974&auto=format&fit=crop",
      category: "hot-drinks",
      tags: ["Popular", "House Special"]
    },
    {
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and silky foam",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
      category: "hot-drinks",
      tags: ["Classic"]
    },
    {
      name: "Espresso",
      description: "Pure, intense coffee in its most concentrated form",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=1935&auto=format&fit=crop",
      category: "hot-drinks",
      tags: ["Strong"]
    },
    
    // Cold Drinks
    {
      name: "Iced Caramel Macchiato",
      description: "Espresso poured over cold milk with our homemade caramel syrup",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1769&auto=format&fit=crop",
      category: "cold-drinks",
      tags: ["Refreshing"]
    },
    {
      name: "Cold Brew",
      description: "Slow-steeped for 12 hours for a smooth, rich flavor",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=1974&auto=format&fit=crop",
      category: "cold-drinks",
      tags: ["Smooth"]
    },
    {
      name: "Iced Matcha Latte",
      description: "Premium matcha green tea with cold milk and a touch of honey",
      price: "$5.25",
      image: "/lovable-uploads/32ec7e31-4bb4-40b6-b2d3-7fe6b0cf0e37.png",
      category: "cold-drinks",
      tags: ["Antioxidants"]
    },
    
    // Sweets and Cookies
    {
      name: "Chocolate Croissant",
      description: "Flaky butter croissant filled with rich Belgian chocolate",
      price: "$3.95",
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1770&auto=format&fit=crop",
      category: "sweets",
      tags: ["Bakery"]
    },
    {
      name: "Chocolate Chip Cookie",
      description: "Freshly baked with premium dark and milk chocolate chunks",
      price: "$2.95",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop", 
      category: "sweets",
      tags: ["Classic"]
    },
    {
      name: "Blueberry Muffin",
      description: "Made with fresh blueberries and a crunchy streusel topping",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1887&auto=format&fit=crop",
      category: "sweets",
      tags: ["Fresh"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-coffee-dark py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Our Menu</h1>
            <p className="text-center text-coffee-cream/80 max-w-2xl mx-auto mb-8">
              Explore our handcrafted beverages and delicious treats, made with premium ingredients and care
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="hot-drinks" className="w-full" onValueChange={setCurrentCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-coffee-light/10">
                <TabsTrigger value="hot-drinks" className="text-sm md:text-base">Hot Drinks</TabsTrigger>
                <TabsTrigger value="cold-drinks" className="text-sm md:text-base">Cold Drinks</TabsTrigger>
                <TabsTrigger value="sweets" className="text-sm md:text-base">Cookies & Sweets</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="hot-drinks" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === "hot-drinks")
                  .map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cold-drinks" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === "cold-drinks")
                  .map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sweets" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === "sweets")
                  .map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const MenuItem = ({ name, description, price, image, tags }: MenuItem) => {
  return (
    <div className={cn(
      "menu-item group hover:shadow-xl transition-all duration-300"
    )}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="menu-image group-hover:scale-105 transition-transform duration-500 w-full h-64 object-cover"
        />
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

export default Menu;
