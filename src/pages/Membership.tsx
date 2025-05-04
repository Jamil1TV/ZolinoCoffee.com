
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Coffee } from "lucide-react"; // Corrected: coffee -> Coffee
import { toast } from "@/hooks/use-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  favoriteDrink: z.string().min(1, { message: "Please select your favorite drink." }),
});

type FormValues = z.infer<typeof formSchema>;

const Membership = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      favoriteDrink: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data submitted:", data);
      toast({
        title: "Membership Application Received!",
        description: "We'll contact you soon with your membership details.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-coffee-dark py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Join Our Membership Program</h1>
            <p className="text-center text-coffee-cream/80 max-w-2xl mx-auto mb-8">
              Become a ZOLINO member and enjoy exclusive benefits, discounts, and special offers
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6 gradient-text">Member Benefits</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-coffee-light/20 p-3 rounded-full mr-4">
                    <Coffee className="h-6 w-6 text-coffee-dark" /> {/* Corrected: coffee -> Coffee */}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Free Birthday Drink</h3>
                    <p className="text-gray-600 text-sm">Celebrate with a complimentary drink of your choice</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coffee-light/20 p-3 rounded-full mr-4">
                    <Coffee className="h-6 w-6 text-coffee-dark" /> {/* Corrected: coffee -> Coffee */}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">10% Off Every Visit</h3>
                    <p className="text-gray-600 text-sm">Enjoy a discount on your entire purchase</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coffee-light/20 p-3 rounded-full mr-4">
                    <Coffee className="h-6 w-6 text-coffee-dark" /> {/* Corrected: coffee -> Coffee */}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Double Points Tuesdays</h3>
                    <p className="text-gray-600 text-sm">Earn rewards twice as fast every Tuesday</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coffee-light/20 p-3 rounded-full mr-4">
                    <Coffee className="h-6 w-6 text-coffee-dark" /> {/* Corrected: coffee -> Coffee */}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Early Access to New Items</h3>
                    <p className="text-gray-600 text-sm">Be the first to try our latest creations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-center">Sign Up Now</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="favoriteDrink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Favorite Drink</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your favorite drink" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cappuccino">Cappuccino</SelectItem>
                            <SelectItem value="latte">Latte</SelectItem>
                            <SelectItem value="espresso">Espresso</SelectItem>
                            <SelectItem value="coldBrew">Cold Brew</SelectItem>
                            <SelectItem value="icedCoffee">Iced Coffee</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-coffee-medium hover:bg-coffee-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Join Membership Program"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
