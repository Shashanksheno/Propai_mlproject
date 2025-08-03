"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, MapPin, Calculator, TrendingUp, ArrowLeft, Loader2, Star } from "lucide-react"
import Link from "next/link"

interface PredictionResult {
  predictedPrice: number
  confidence: number
  priceRange: {
    min: number
    max: number
  }
  marketInsights: {
    avgPricePerSqft: number
    marketTrend: string
    similarProperties: number
  }
}

export default function PredictPage() {
  const [formData, setFormData] = useState({
    location: "",
    totalSqft: "",
    bedrooms: "",
    bathrooms: "",
    balcony: "",
    parking: "",
    furnishing: "",
    propertyType: "",
    age: "",
  })

  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePredict = async () => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock prediction result
    const mockResult: PredictionResult = {
      predictedPrice: Math.floor(Math.random() * 5000000) + 2000000,
      confidence: Math.floor(Math.random() * 15) + 85,
      priceRange: {
        min: Math.floor(Math.random() * 1000000) + 1500000,
        max: Math.floor(Math.random() * 2000000) + 3000000,
      },
      marketInsights: {
        avgPricePerSqft: Math.floor(Math.random() * 2000) + 3000,
        marketTrend: Math.random() > 0.5 ? "Rising" : "Stable",
        similarProperties: Math.floor(Math.random() * 50) + 20,
      },
    }

    setPrediction(mockResult)
    setLoading(false)
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} L`
    }
    return `₹${price.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              PropWorth AI
            </span>
          </Link>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Property Price Prediction
            </h1>
            <p className="text-xl text-gray-600">Enter your property details to get an AI-powered price estimate</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-3 h-6 w-6 text-blue-600" />
                  Property Details
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill in the details about your property for accurate AI-powered prediction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whitefield">Whitefield</SelectItem>
                        <SelectItem value="koramangala">Koramangala</SelectItem>
                        <SelectItem value="indiranagar">Indiranagar</SelectItem>
                        <SelectItem value="jayanagar">Jayanagar</SelectItem>
                        <SelectItem value="btm-layout">BTM Layout</SelectItem>
                        <SelectItem value="electronic-city">Electronic City</SelectItem>
                        <SelectItem value="hebbal">Hebbal</SelectItem>
                        <SelectItem value="marathahalli">Marathahalli</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalSqft">Total Area (sq ft)</Label>
                    <Input
                      id="totalSqft"
                      type="number"
                      placeholder="e.g., 1200"
                      value={formData.totalSqft}
                      onChange={(e) => handleInputChange("totalSqft", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Select onValueChange={(value) => handleInputChange("bedrooms", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 BHK</SelectItem>
                        <SelectItem value="2">2 BHK</SelectItem>
                        <SelectItem value="3">3 BHK</SelectItem>
                        <SelectItem value="4">4 BHK</SelectItem>
                        <SelectItem value="5">5+ BHK</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select onValueChange={(value) => handleInputChange("bathrooms", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="balcony">Balcony</Label>
                    <Select onValueChange={(value) => handleInputChange("balcony", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select balcony" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No Balcony</SelectItem>
                        <SelectItem value="1">1 Balcony</SelectItem>
                        <SelectItem value="2">2 Balconies</SelectItem>
                        <SelectItem value="3">3+ Balconies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parking">Parking</Label>
                    <Select onValueChange={(value) => handleInputChange("parking", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select parking" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No Parking</SelectItem>
                        <SelectItem value="1">1 Car</SelectItem>
                        <SelectItem value="2">2 Cars</SelectItem>
                        <SelectItem value="3">3+ Cars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="furnishing">Furnishing Status</Label>
                    <Select onValueChange={(value) => handleInputChange("furnishing", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select furnishing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unfurnished">Unfurnished</SelectItem>
                        <SelectItem value="semi-furnished">Semi Furnished</SelectItem>
                        <SelectItem value="furnished">Fully Furnished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="independent-house">Independent House</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Property Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g., 5"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                </div>

                <Button
                  onClick={handlePredict}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Calculator className="mr-2 h-4 w-4" />
                      Predict Price
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Results */}
            <div className="space-y-6">
              {prediction ? (
                <>
                  <Card className="shadow-2xl border-0 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                      <CardTitle className="flex items-center text-2xl">
                        <TrendingUp className="mr-3 h-6 w-6" />
                        AI Price Prediction
                      </CardTitle>
                      <CardDescription className="text-green-100">
                        Based on advanced machine learning analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <div className="relative">
                          <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                            {formatPrice(prediction.predictedPrice)}
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <Badge className="bg-green-500 text-white text-lg px-4 py-2 animate-pulse">
                              {prediction.confidence}% Confidence
                            </Badge>
                          </div>
                        </div>
                        <div className="text-lg text-gray-600 mb-6">Estimated Property Value</div>

                        {/* Price Range Visualization */}
                        <div className="bg-white p-6 rounded-xl shadow-inner mb-6">
                          <div className="text-sm text-gray-600 mb-2">Price Range</div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-gray-700">
                              {formatPrice(prediction.priceRange.min)}
                            </span>
                            <div className="flex-1 mx-4">
                              <div className="h-3 bg-gradient-to-r from-green-200 to-blue-200 rounded-full relative">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full shadow-lg"></div>
                              </div>
                            </div>
                            <span className="text-lg font-semibold text-gray-700">
                              {formatPrice(prediction.priceRange.max)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <span className="text-gray-600 flex items-center">
                              <Calculator className="mr-2 h-4 w-4" />
                              Avg Price/sq ft
                            </span>
                            <span className="font-bold text-lg text-blue-600">
                              ₹{prediction.marketInsights.avgPricePerSqft.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <span className="text-gray-600 flex items-center">
                              <TrendingUp className="mr-2 h-4 w-4" />
                              Market Trend
                            </span>
                            <Badge
                              variant={prediction.marketInsights.marketTrend === "Rising" ? "default" : "secondary"}
                              className="text-sm"
                            >
                              {prediction.marketInsights.marketTrend}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <span className="text-gray-600 flex items-center">
                              <Home className="mr-2 h-4 w-4" />
                              Similar Properties
                            </span>
                            <span className="font-bold text-lg text-green-600">
                              {prediction.marketInsights.similarProperties} found
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <span className="text-gray-600 flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              Location Score
                            </span>
                            <Badge className="bg-purple-100 text-purple-800 text-sm">Premium Area</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Enhanced Market Analysis */}
                  <Card className="shadow-2xl border-0">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                      <CardTitle className="text-2xl">Detailed Market Analysis</CardTitle>
                      <CardDescription className="text-lg">
                        AI-powered insights about your property and location
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                              <MapPin className="mr-2 h-5 w-5" />
                              Location Intelligence
                            </h4>
                            <p className="text-blue-700 text-sm leading-relaxed">
                              This area shows excellent connectivity with major IT hubs, metro accessibility, and strong
                              infrastructure development. Property values have shown consistent growth over the past 3
                              years.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                              <TrendingUp className="mr-2 h-5 w-5" />
                              Investment Potential
                            </h4>
                            <p className="text-green-700 text-sm leading-relaxed">
                              Properties with this configuration typically appreciate 8-12% annually. The area is
                              experiencing high demand from IT professionals and young families.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
                            <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                              <Star className="mr-2 h-5 w-5" />
                              Amenities Score
                            </h4>
                            <p className="text-purple-700 text-sm leading-relaxed">
                              Excellent proximity to schools, hospitals, shopping centers, and recreational facilities.
                              Public transport connectivity is above average for Bangalore.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-800 mb-3 flex items-center">
                              <Calculator className="mr-2 h-5 w-5" />
                              Market Comparison
                            </h4>
                            <p className="text-orange-700 text-sm leading-relaxed">
                              Your property is priced competitively compared to similar properties. The predicted value
                              aligns with recent sales in the neighborhood.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Get Detailed Report
                        </Button>
                        <Button variant="outline" className="border-2 bg-transparent">
                          <MapPin className="mr-2 h-4 w-4" />
                          View Similar Properties
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-200 to-green-200 rounded-full flex items-center justify-center">
                        <Calculator className="h-12 w-12 text-blue-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">AI Ready to Analyze</h3>
                    <p className="text-gray-600 text-center max-w-md leading-relaxed">
                      Fill in your property details above and click "Predict Price" to get an AI-powered valuation with
                      detailed market insights and investment analysis.
                    </p>
                    <div className="mt-6 flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Advanced ML algorithms ready</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
