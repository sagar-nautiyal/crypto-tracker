# 🚀 Crypto Tracker

A modern, responsive web application for tracking cryptocurrency prices, market data, and managing your favorite coins. Built with vanilla JavaScript, HTML5, and CSS3.

![Crypto Tracker](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## ✨ Features

### 📊 Market Overview
- **Real-time Cryptocurrency Data**: View top cryptocurrencies with live prices, volume, and market cap
- **Sortable Columns**: Sort by price, volume, or market cap in ascending/descending order
- **Market Rankings**: See cryptocurrency rankings by market capitalization

### 🔍 Advanced Search
- **Real-time Search**: Search for any cryptocurrency with autocomplete suggestions
- **Search Dialog**: Clean, responsive search interface with instant results
- **Quick Navigation**: Click on search results to view detailed coin information

### ⭐ Favorites Management
- **Bookmark Coins**: Add your favorite cryptocurrencies to a personalized watchlist
- **Dedicated Favorites Page**: View all your favorite coins in one place
- **Easy Management**: Add/remove favorites with one click
- **Persistent Storage**: Favorites are saved locally and persist across sessions

### 📈 Detailed Coin Analysis
- **Individual Coin Pages**: Comprehensive view of each cryptocurrency
- **Interactive Charts**: Price charts powered by Chart.js with multiple timeframes
- **Multiple Time Periods**: View price history for 24 hours, 30 days, or 3 months
- **Market Data**: Current price, market cap, ranking, and detailed descriptions
- **Responsive Design**: Optimized for desktop and mobile devices

### 🎨 User Experience
- **Modern UI**: Clean, intuitive interface with smooth interactions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Fast Performance**: Optimized API calls and efficient data handling
- **Visual Feedback**: Hover effects, loading states, and smooth transitions

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Charts**: Chart.js for interactive price visualizations
- **Icons**: Font Awesome for professional iconography
- **API**: CoinGecko API for cryptocurrency data
- **Storage**: LocalStorage for favorites persistence

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API data
- CoinGecko API key (free tier available)

### Installation

1. **Clone or Download** the project to your local machine

2. **Get a CoinGecko API Key**:
   - Visit [CoinGecko API](https://www.coingecko.com/en/api/pricing)
   - Sign up for a free account
   - Get your API key from the dashboard

3. **Configure API Key**:
   - Open `config.js`
   - Replace `'YOUR_COINGECKO_API_KEY_HERE'` with your actual API key:
   ```javascript
   coinGeckoApiKey: 'your-actual-api-key-here'
   ```

4. **Launch the Application**:
   - Open `index.html` in your web browser
   - Or serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

5. **Start Exploring**:
   - Browse the cryptocurrency market
   - Search for specific coins
   - Add favorites and view detailed charts

## 📱 Usage Guide

### Home Page (`index.html`)
- **View Market Data**: Browse top cryptocurrencies with real-time prices
- **Sort Data**: Click column headers to sort by price, volume, or market cap
- **Search Coins**: Use the search bar to find specific cryptocurrencies
- **Add Favorites**: Click the star icon to add coins to your favorites

### Favorites Page (`Favorite.html`)
- **View Watchlist**: See all your favorited cryptocurrencies
- **Remove Favorites**: Click the trash icon to remove coins from favorites
- **Quick Access**: Click on any coin to view detailed information

### Coin Details (`coin.html`)
- **View Charts**: Interactive price charts with multiple timeframes
- **Market Information**: Comprehensive market data and coin descriptions
- **Manage Favorites**: Add or remove from favorites directly from the detail page

## 🏗️ Project Structure

```
crypto-tracker/
│
├── index.html              # Main market overview page
├── Favorite.html           # Favorites management page
├── coin.html              # Individual coin details page
├── localStorage.html       # Development/testing file
│
├── config.js              # Configuration and API keys
├── index.js               # Main page functionality
├── Favorite.js            # Favorites page logic
├── coin.js                # Coin details page logic
├── script.js              # Chart.js library (minified)
│
├── index.css              # Main application styles
├── coin.css               # Coin details page styles
│
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules
```

## 🔧 Configuration

The application uses a configuration file (`config.js`) to manage settings:

```javascript
const config = {
    coinGeckoApiKey: 'your-api-key-here',
    coinGeckoBaseUrl: 'https://api.coingecko.com/api/v3',
    itemsPerPage: 25,
    searchDelay: 300,
    maxSearchResults: 10
};
```

### Configuration Options:
- `coinGeckoApiKey`: Your CoinGecko API key
- `coinGeckoBaseUrl`: Base URL for CoinGecko API
- `itemsPerPage`: Number of coins to display per page
- `searchDelay`: Debounce delay for search (milliseconds)
- `maxSearchResults`: Maximum search results to display

## 🌐 API Integration

This application integrates with the [CoinGecko API](https://www.coingecko.com/en/api) to provide:

- **Market Data**: Real-time prices, market cap, and volume
- **Search**: Cryptocurrency search functionality
- **Historical Data**: Price charts and historical information
- **Coin Details**: Comprehensive information about each cryptocurrency

### API Endpoints Used:
- `/coins/markets` - Market data for multiple coins
- `/search` - Search for cryptocurrencies
- `/coins/{id}` - Detailed coin information
- `/coins/{id}/market_chart` - Historical price data for charts

## 🔒 Security Notes

- **API Key Protection**: API keys are stored in `config.js` (excluded from git)
- **Local Storage**: Only favorites data is stored locally
- **No Sensitive Data**: No user accounts or personal information stored
- **HTTPS**: Ensure you serve over HTTPS in production

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Issues**: Found a bug? Open an issue with details
2. **Suggest Features**: Have an idea? Create a feature request
3. **Submit Pull Requests**: Fix bugs or add features
4. **Improve Documentation**: Help make the docs better

### Development Guidelines:
- Follow existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Keep commits focused and descriptive

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CoinGecko**: For providing the comprehensive cryptocurrency API
- **Chart.js**: For the beautiful and interactive charting library
- **Font Awesome**: For the professional icon set
- **Community**: For feedback and contributions

## 🆘 Support

If you encounter any issues or have questions:

1. Check the documentation above
2. Review existing issues in the repository
3. Create a new issue with detailed information
4. Include browser version, error messages, and steps to reproduce

---

**Happy Trading! 📈💰**