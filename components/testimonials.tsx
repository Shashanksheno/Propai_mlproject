import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, User } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Whitefield",
      rating: 5,
      text: "PropWorth AI predicted my property value within 2% of the actual sale price. Incredibly accurate!",
      verified: true,
    },
    {
      name: "Priya Sharma",
      role: "Investment Consultant",
      location: "Koramangala",
      rating: 5,
      text: "As a real estate consultant, I use PropWorth AI for quick valuations. The ML model is impressive.",
      verified: true,
    },
    {
      name: "Amit Patel",
      role: "Home Buyer",
      location: "Electronic City",
      rating: 5,
      text: "Helped me negotiate better prices. The market insights are detailed and very helpful.",
      verified: true,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of property buyers, sellers, and real estate professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full mr-3">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  {testimonial.verified && <Badge className="ml-auto bg-green-100 text-green-800">Verified</Badge>}
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{testimonial.location}</span>
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
