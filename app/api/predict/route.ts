import { type NextRequest, NextResponse } from "next/server"

// Define the expected structure of the incoming property data
interface PropertyData {
  location: string
  totalSqft: string
  bedrooms: string
  bathrooms: string
  balcony: string
  parking: string
  furnishing: string
  propertyType: string
  age: string
}

// Define the structure of the prediction result
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

// This function simulates the core ML model's prediction logic.
// In a real application, this would be replaced by an actual call to a Python ML backend.
function calculatePrice(data: PropertyData): PredictionResult {
  let basePrice = 3000000 // Starting baseline price in INR (e.g., for a standard 1000 sqft property)

  // 1. Location-based Pricing (Feature: Categorical Encoding / One-Hot Encoding)
  // This simulates how different locations have different base values.
  const locationMultipliers: Record<string, number> = {
    whitefield: 1.2, // Tech hub, higher value
    koramangala: 1.5, // Prime, very high value
    indiranagar: 1.4, // Central, high value
    jayanagar: 1.1, // Established, moderate value
    "btm-layout": 1.0, // Baseline area
    "electronic-city": 0.9, // Slightly lower value (further from city center)
    hebbal: 1.1, // North Bangalore, growing
    marathahalli: 1.2, // IT corridor, higher value
  }
  if (data.location && locationMultipliers[data.location]) {
    basePrice *= locationMultipliers[data.location]
  }

  // 2. Area-based calculation (Feature: Numerical, Linear Relationship)
  // Price scales linearly with total square footage.
  if (data.totalSqft) {
    const areaSqft = Number.parseInt(data.totalSqft)
    // Assuming a base price per sqft, then multiplying by actual area
    // This is a simplified linear model for area.
    const pricePerSqftFactor = basePrice / 1000 // Normalize base price to a per sqft factor
    basePrice = pricePerSqftFactor * areaSqft
  }

  // 3. Bedroom premium (Feature: Numerical, Non-linear/Polynomial Relationship)
  // More bedrooms add value, but the increase might not be strictly linear.
  if (data.bedrooms) {
    const bedroomCount = Number.parseInt(data.bedrooms)
    // Example: 1 BHK = 1.0x, 2 BHK = 1.2x, 3 BHK = 1.4x, etc.
    basePrice *= 1 + (bedroomCount - 1) * 0.2
  }

  // 4. Furnishing status (Feature: Categorical, One-Hot Encoding)
  // Furnished properties typically command higher prices.
  const furnishingMultipliers: Record<string, number> = {
    unfurnished: 1.0,
    "semi-furnished": 1.1, // 10% premium
    furnished: 1.2, // 20% premium
  }
  if (data.furnishing && furnishingMultipliers[data.furnishing]) {
    basePrice *= furnishingMultipliers[data.furnishing]
  }

  // 5. Property Age depreciation (Feature: Numerical, Exponential Decay)
  // Older properties generally depreciate in value.
  if (data.age) {
    const ageYears = Number.parseInt(data.age)
    const depreciationRate = 0.02 // 2% depreciation per year
    // Ensure price doesn't go below a certain threshold (e.g., 70% of initial value)
    const ageMultiplier = Math.max(0.7, 1 - ageYears * depreciationRate)
    basePrice *= ageMultiplier
  }

  // 6. Add some randomness for realism (Simulating model noise/unseen factors)
  // This mimics the inherent variability in real estate markets and model uncertainty.
  basePrice *= 0.9 + Math.random() * 0.2 // Adds a random +/- 10% variation

  const finalPrice = Math.round(basePrice)

  // Confidence score calculation (simplified, based on data completeness)
  // In a real ML model, this would come from model's prediction interval or uncertainty.
  const dataCompleteness = Object.values(data).filter((v) => v !== "").length / Object.keys(data).length
  const baseConfidence = 85
  const confidence = Math.round(baseConfidence + dataCompleteness * 10) // More data = higher confidence

  return {
    predictedPrice: finalPrice,
    confidence: Math.min(confidence, 95), // Cap confidence at 95%
    priceRange: {
      min: Math.round(finalPrice * 0.85), // Simplified 15% range
      max: Math.round(finalPrice * 1.15),
    },
    marketInsights: {
      avgPricePerSqft: Math.round(finalPrice / (Number.parseInt(data.totalSqft) || 1000)),
      marketTrend: Math.random() > 0.5 ? "Rising" : "Stable", // Random trend
      similarProperties: Math.floor(Math.random() * 50) + 20, // Random number of similar properties
    },
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: PropertyData = await request.json()

    // Simulate network latency and ML model processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Call the mock ML prediction logic
    const predictionResult = calculatePrice(data)

    return NextResponse.json(predictionResult)
  } catch (error) {
    console.error("Prediction API error:", error)
    return NextResponse.json({ error: "Failed to process prediction" }, { status: 500 })
  }
}
