
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const EmployeeOfMonth = () => {
  return (
    <section className="py-16 bg-coffee-cream/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center gradient-text">
          Employee of the Month
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1854&auto=format&fit=crop"
                  alt="Employee of the Month"
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
              </div>
              
              <CardContent className="p-6 flex flex-col justify-center">
                <div className="mb-4">
                  <Badge className="bg-coffee-medium hover:bg-coffee-dark mb-2">April 2025</Badge>
                  <h3 className="text-2xl font-playfair font-bold mb-2">Emma Rodriguez</h3>
                  <p className="text-coffee-medium font-medium mb-4">Senior Barista - Downtown Branch</p>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Emma has been with ZOLINO for three years and has mastered the art of creating our signature latte designs. Her friendly demeanor and attention to detail have earned her countless compliments from our regular customers.
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium mb-2 text-coffee-dark">Specialty</h4>
                  <p className="text-gray-600">Rosetta Latte Art & Custom Flavor Pairings</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmployeeOfMonth;
