
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  securityCode: z.string().length(4, { message: "Please enter the 4-digit security code." })
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      securityCode: ""
    },
  });

  const [securityCode] = useState(Math.floor(1000 + Math.random() * 9000).toString());

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.securityCode !== securityCode) {
      toast({
        title: "Invalid security code",
        description: "Please enter the correct security code",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-coffee-dark py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-center text-coffee-cream/80 max-w-2xl mx-auto mb-8">
              We'd love to hear from you. Reach out to us with any questions or feedback.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-playfair font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-coffee-medium flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-gray-600">123 Main Street, City Center</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-coffee-medium flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600">info@zolino.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-coffee-medium flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4">Business Hours</h2>
                  <div className="space-y-2">
                    <p><span className="font-medium">Monday - Friday:</span> 7:00 AM - 8:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 8:00 AM - 9:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email" {...field} />
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" className="min-h-[120px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="securityCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Security Code: {securityCode}</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter the 4-digit code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-coffee-medium hover:bg-coffee-dark">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
