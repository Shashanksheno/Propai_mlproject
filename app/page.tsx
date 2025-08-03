"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, TrendingUp, MapPin, Calculator, Star, Users, Award } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Testimonials } from "@/components/testimonials"
import { AnimatedCounter } from "@/components/animated-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              PropWorth AI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>
          <Link href="/predict">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">AI-Powered Real Estate Predictions</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            PropWorth AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Predict Bangalore property prices with cutting-edge machine learning. Get accurate valuations in seconds
            using advanced data science techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/predict">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Predict Price Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={10} suffix="K+" />
              </div>
              <div className="text-gray-600">Properties Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {"<"}
                <AnimatedCounter end={3} suffix="s" />
              </div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              See PropWorth AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our AI predicts property prices with real Bangalore data
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Demo Video/Animation */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-800">Live Prediction Demo</h3>
                      <Badge className="bg-green-100 text-green-800">Real-time</Badge>
                    </div>

                    {/* Animated Demo Form */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm text-gray-600">Location</Label>
                          <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                            <span className="text-blue-800 font-semibold">Koramangala</span>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Area</Label>
                          <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                            <span className="text-blue-800 font-semibold">1200 sq ft</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm text-gray-600">Bedrooms</Label>
                          <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                            <span className="text-blue-800 font-semibold">2 BHK</span>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Furnishing</Label>
                          <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                            <span className="text-blue-800 font-semibold">Semi Furnished</span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                        <Calculator className="mr-2 h-4 w-4" />
                        Predict Price
                      </Button>

                      {/* Demo Result */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">₹85.5 L</div>
                          <Badge className="bg-green-100 text-green-800 mb-3">92% Confidence</Badge>
                          <div className="text-sm text-gray-600">Range: ₹78.2L - ₹92.8L</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Features */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Instant Analysis</h4>
                    <p className="text-gray-600">
                      Our AI processes 15+ property features in under 3 seconds, analyzing location premiums, market
                      trends, and comparable sales data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Location Intelligence</h4>
                    <p className="text-gray-600">
                      Advanced geospatial analysis considering proximity to IT hubs, metro stations, schools, and
                      commercial centers across Bangalore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Market Insights</h4>
                    <p className="text-gray-600">
                      Get detailed market analysis including price trends, investment potential, and comparison with
                      similar properties in the area.
                    </p>
                  </div>
                </div>

                <Link href="/predict">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Try Live Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with advanced machine learning and modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>ML-Powered Predictions</CardTitle>
                <CardDescription>
                  Advanced algorithms using Scikit-learn with feature engineering and GridSearchCV optimization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Bangalore Focused</CardTitle>
                <CardDescription>
                  Specialized model trained on comprehensive Bangalore real estate data with location-specific insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-lg w-fit">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Real-time Results</CardTitle>
                <CardDescription>
                  Instant price predictions through optimized Flask backend serving HTTP requests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-lg w-fit">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Data Quality</CardTitle>
                <CardDescription>
                  Robust preprocessing with outlier removal and feature engineering for maximum accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-red-100 p-3 rounded-lg w-fit">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>User-Friendly</CardTitle>
                <CardDescription>
                  Responsive design with intuitive interface for seamless property valuation experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-teal-100 p-3 rounded-lg w-fit">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Proven Accuracy</CardTitle>
                <CardDescription>
                  Validated model performance with comprehensive testing and cross-validation techniques
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get accurate property price predictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Property Details</h3>
              <p className="text-gray-600">Input location, size, bedrooms, bathrooms, and other property features</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our ML model processes your data using advanced algorithms and market insights
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Prediction</h3>
              <p className="text-gray-600">
                Receive accurate price estimate with confidence intervals and market analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Predict Your Property Value?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust PropWorth AI for accurate real estate valuations
          </p>
          <Link href="/predict">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Calculator className="mr-2 h-5 w-5" />
              Start Predicting Now
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About PropWorth AI</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge machine learning and modern web technologies to revolutionize real estate price
                prediction in Bangalore
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">The Technology Behind PropWorth AI</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Advanced Machine Learning</h4>
                      <p className="text-gray-600">
                        Built using Python, Pandas, and Scikit-learn with Random Forest algorithms, feature engineering,
                        and GridSearchCV optimization for maximum accuracy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Data Science Excellence</h4>
                      <p className="text-gray-600">
                        Comprehensive data preprocessing with outlier removal, feature scaling, and cross-validation
                        techniques ensuring robust predictions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calculator className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Real-time Processing</h4>
                      <p className="text-gray-600">
                        Flask backend serves predictions through optimized HTTP requests, delivering results in under 3
                        seconds with 95% accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                      <div className="text-2xl font-bold text-blue-600">10K+</div>
                    </div>
                    <div className="text-sm text-gray-600">Training Data Points</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                      <div className="text-2xl font-bold text-green-600">15+</div>
                    </div>
                    <div className="text-sm text-gray-600">Feature Variables</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                    </div>
                    <div className="text-sm text-gray-600">Model Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                      <div className="text-2xl font-bold text-orange-600">{"<3s"}</div>
                    </div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Journey */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">Development Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Data Collection & Analysis</h4>
                  <p className="text-gray-600">
                    Gathered comprehensive Bangalore real estate data, performed exploratory data analysis, and
                    identified key price-influencing factors.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Model Development</h4>
                  <p className="text-gray-600">
                    Built and trained machine learning models using advanced algorithms, feature engineering, and
                    hyperparameter optimization techniques.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Web Application</h4>
                  <p className="text-gray-600">
                    Developed responsive frontend with React/Next.js and integrated Flask backend for seamless real-time
                    predictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">Built With Modern Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">🐍</div>
                  <div className="font-semibold">Python</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-semibold">Scikit-learn</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">🐼</div>
                  <div className="font-semibold">Pandas</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold">Flask</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">⚛️</div>
                  <div className="font-semibold">React</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-semibold">Tailwind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PropWorth AI</span>
            </div>
            <div className="text-gray-400">© 2025 PropWorth AI. Built with advanced machine learning.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
