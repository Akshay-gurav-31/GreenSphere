// Environment Configuration for SmartFarmer
// Production API Keys and Configuration

window.SMARTFARMER_CONFIG = {
    // AI Configuration
    GEMINI_API_KEY: 'AIzaSyCLc_LRc2giTjUkG0p7kez2nAKN4JOttZ8',
    GEMINI_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    
    // Weather Configuration
    WEATHER_API_KEY: 'ade4fad075f0334719ade4ed00aa8536',
    WEATHER_ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',
    
    // Market Data Configuration
    MARKET_API_KEY: '579b464db66ec23bdd0000012a6fd1e420414b1c5c06f318a01337e5',
    MARKET_ENDPOINT: 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070',
    
    // Vision API Configuration (for soil image analysis)
    VISION_API_KEY: 'AIzaSyCLc_LRc2giTjUkG0p7kez2nAKN4JOttZ8', // Using same Gemini key for vision
    VISION_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-vision:generateContent',
    
    // Application Settings
    MAX_IMAGES: 3,
    SUPPORTED_LANGUAGES: ['punjabi', 'hindi', 'english', 'marathi'],
    DEFAULT_LANGUAGE: 'english'
};
