// Configuration Template for Crypto Tracker
// Copy this file to 'config.js' and add your actual API keys

const config = {
    // CoinGecko API key
    // Get your free API key from: https://www.coingecko.com/en/api/pricing
    // 1. Sign up for a free account
    // 2. Go to your dashboard
    // 3. Copy your API key and replace the value below
    coinGeckoApiKey: 'YOUR_COINGECKO_API_KEY_HERE',
    
    // API Base URLs (usually don't need to change)
    coinGeckoBaseUrl: 'https://api.coingecko.com/api/v3',
    
    // Application settings (customize as needed)
    itemsPerPage: 25,              // Number of coins to display per page
    searchDelay: 300,              // Debounce delay for search in milliseconds
    maxSearchResults: 10           // Maximum number of search results to show
};

// Export for use in other files (don't modify this part)
if (typeof window !== 'undefined') {
    window.CONFIG = config;
}

/* 
SETUP INSTRUCTIONS:
==================

1. Copy this file to 'config.js':
   - On Windows: copy config.template.js config.js
   - On Mac/Linux: cp config.template.js config.js

2. Get your CoinGecko API key:
   - Visit: https://www.coingecko.com/en/api/pricing
   - Click "Get Free API Key" 
   - Sign up for an account
   - Verify your email
   - Go to your dashboard to find your API key

3. Edit config.js:
   - Replace 'YOUR_COINGECKO_API_KEY_HERE' with your actual API key
   - Save the file

4. Test the application:
   - Open index.html in your browser
   - You should see cryptocurrency data loading

SECURITY NOTES:
===============
- Never commit config.js to version control
- The .gitignore file excludes config.js automatically
- Keep your API key secret and don't share it publicly
- If you accidentally expose your API key, regenerate it immediately

TROUBLESHOOTING:
================
- If you see "No coin data!" - check your API key
- If charts don't load - check browser console for errors
- If search doesn't work - verify your API key is correct
- For rate limiting issues - consider upgrading your CoinGecko plan
*/