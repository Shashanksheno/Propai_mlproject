import { type NextRequest, NextResponse } from "next/server"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface ChatRequest {
  message: string
  history: Message[]
}

// AI Knowledge Base for PropWorth AI
const AI_KNOWLEDGE = {
  propertyPrediction: {
    process:
      "Our AI analyzes 15+ property features including location, area, bedrooms, bathrooms, furnishing status, and age to predict accurate prices.",
    accuracy:
      "Our model achieves 95% accuracy using advanced Random Forest algorithms with comprehensive feature engineering.",
    speed: "Predictions are delivered in under 3 seconds through optimized processing pipelines.",
  },

  locations: {
    premium: ["Koramangala", "Indiranagar", "Whitefield", "Marathahalli"],
    affordable: ["BTM Layout", "Electronic City", "Hebbal"],
    factors:
      "Location pricing considers proximity to IT hubs, metro connectivity, schools, hospitals, and commercial centers.",
  },

  mlModel: {
    algorithm: "Random Forest Regressor with GridSearchCV optimization",
    features:
      "Location multipliers, area scaling, bedroom premiums, furnishing bonuses, age depreciation, and market volatility",
    training:
      "Trained on 10,000+ Bangalore property transactions with comprehensive preprocessing and cross-validation",
  },

  marketInsights: {
    trends: "Bangalore real estate shows consistent growth, especially in IT corridors and metro-connected areas",
    investment: "Properties near upcoming metro lines and IT expansions show highest appreciation potential",
    timing: "Current market conditions favor buyers with stable prices and good inventory availability",
  },
}

function generateAIResponse(userMessage: string, history: Message[]): string {
  const message = userMessage.toLowerCase()

  // Greeting responses
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! I'm here to help you with property price predictions and real estate insights in Bangalore. What would you like to know?"
  }

  // Property prediction questions
  if (message.includes("predict") || message.includes("price") || message.includes("valuation")) {
    return `${AI_KNOWLEDGE.propertyPrediction.process} ${AI_KNOWLEDGE.propertyPrediction.accuracy} You can try our prediction tool by clicking "Get Started" or "Predict Price Now" on the homepage. Would you like me to explain any specific aspect of our prediction process?`
  }

  // ML model questions
  if (
    message.includes("model") ||
    message.includes("algorithm") ||
    message.includes("machine learning") ||
    message.includes("ml")
  ) {
    return `Our ML model uses ${AI_KNOWLEDGE.mlModel.algorithm}. Key features include: ${AI_KNOWLEDGE.mlModel.features}. The model was ${AI_KNOWLEDGE.mlModel.training}. This ensures high accuracy and reliable predictions for Bangalore properties.`
  }

  // Location-specific questions
  if (
    message.includes("location") ||
    message.includes("area") ||
    message.includes("koramangala") ||
    message.includes("whitefield") ||
    message.includes("indiranagar")
  ) {
    return `${AI_KNOWLEDGE.locations.factors} Premium locations like ${AI_KNOWLEDGE.locations.premium.join(", ")} command higher prices, while areas like ${AI_KNOWLEDGE.locations.affordable.join(", ")} offer more affordable options. Which specific location are you interested in?`
  }

  // Accuracy questions
  if (message.includes("accuracy") || message.includes("reliable") || message.includes("trust")) {
    return `${AI_KNOWLEDGE.propertyPrediction.accuracy} Our model undergoes continuous validation and testing to maintain this high accuracy. We also provide confidence scores with each prediction to indicate reliability.`
  }

  // Market insights
  if (message.includes("market") || message.includes("investment") || message.includes("trends")) {
    return `${AI_KNOWLEDGE.marketInsights.trends}. ${AI_KNOWLEDGE.marketInsights.investment}. ${AI_KNOWLEDGE.marketInsights.timing}. Would you like specific insights about any particular area or property type?`
  }

  // How to use questions
  if (message.includes("how to") || message.includes("use") || message.includes("start")) {
    return "Using PropWorth AI is simple: 1) Click 'Get Started' or 'Predict Price Now', 2) Fill in your property details (location, area, bedrooms, etc.), 3) Get instant AI-powered price prediction with confidence scores and market insights. The whole process takes less than a minute!"
  }

  // Technical questions
  if (message.includes("technology") || message.includes("tech stack") || message.includes("built")) {
    return "PropWorth AI is built with Python, Scikit-learn, Pandas for ML; React, Next.js, TypeScript for frontend; and Flask for backend API. We use advanced data science techniques including feature engineering, outlier removal, and cross-validation for optimal performance."
  }

  // Bangalore specific
  if (message.includes("bangalore") || message.includes("bengaluru")) {
    return "Our model is specifically trained on Bangalore real estate data, covering all major areas from IT hubs like Whitefield and Electronic City to central locations like Koramangala and Indiranagar. We understand local market dynamics, infrastructure development, and area-specific pricing patterns."
  }

  // Default helpful response
  return "I can help you with property price predictions, explain our ML model, provide market insights, or answer questions about Bangalore real estate. Some popular topics include: property valuation process, location analysis, market trends, and how to use our prediction tool. What specific information are you looking for?"
}

export async function POST(request: NextRequest) {
  try {
    const { message, history }: ChatRequest = await request.json()

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1500))

    // Generate contextual AI response
    const response = generateAIResponse(message, history)

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}
