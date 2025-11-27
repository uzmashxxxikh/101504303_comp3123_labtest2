# Weather App - COMP3123 Lab Test 2

## Student Information
- **Name:** Uzma Shaikh
- **Student ID:** 101504303
- **Date:** November 27, 2025

## Project Description
This is a React-based weather application that displays current weather information for any city using the OpenWeatherMap API. Users can search for different cities and view detailed weather data including temperature, humidity, wind speed, and atmospheric pressure.

## Features
- 🔍 Search functionality to find weather for any city
- 🌡️ Display current temperature in Celsius
- 🖼️ Weather icons from OpenWeatherMap
- 💨 Wind speed information
- 💧 Humidity levels
- 🌐 Atmospheric pressure
- 📱 Responsive design for mobile and desktop
- ⚠️ Error handling for invalid city names

## Technologies Used
- **React.js** - Frontend framework
- **Axios** - HTTP client for API calls
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling and responsive design
- **Git & GitHub** - Version control
- **Vercel** - Deployment platform

## API Used
**OpenWeatherMap API**
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: `q` (city name), `appid` (API key), `units` (metric for Celsius)
- Documentation: https://openweathermap.org/api

## Live Deployment
**🌐 Deployed on Vercel:** https://101504303-comp3123-labtest2.vercel.app/

**📂 GitHub Repository:** https://github.com/uzmashxxxikh/101504303_comp3123_labtest2

---

## 📸 Application Screenshots & Documentation

### 1. GitHub Repository Overview
The project repository showing the complete file structure with all React components, configuration files, and README documentation. The repository includes proper commit history with descriptive messages.

![GitHub Repository](Github_repo.png)

**Repository Contents:**
- `src/` folder with Weather.js, SearchBar.js components
- `public/` folder with static assets
- `package.json` with all dependencies
- `README.md` for documentation
- `.gitignore` for excluding node_modules

---

### 2. Application Home Page (Default View)
The application displaying the default city **Toronto, CA** with current weather conditions showing **1°C** with **Light Snow**. The interface features a clean purple gradient background with a white card layout.

![Home Page - Toronto](Home.png)

**Home Page Features:**
- Clean, modern UI design

---

### 3. Error Handling Display
Demonstrating the application's error handling when an invalid city name is entered. The app displays a user-friendly error message: **"City not found. Please try again."** in a red notification box.

![Home Page - Toronto](Home.png)

**Error Handling Features:**
- Clear error message
- Red notification bar for visibility
- No application crash
- Form remains interactive
- User can immediately try again

---

### 4. Weather Display - New York
Successfully displaying real-time weather information for **New York, US** with detailed metrics.

![Weather Display - New York](NewYork.png)

**Weather Information Shown:**
- **Location:** New York, US
- **Temperature:** 6°C
- **Condition:** Clear Sky
- **Feels Like:** 1°C
- **Humidity:** 44%
- **Wind Speed:** 8.23 m/s
- **Pressure:** 1013 hPa

---

### 5. Weather Display - Seattle
Displaying current weather for **Seattle, US** showing **10°C** with **Overcast Clouds**.

![Weather Display - Seattle](Seattle.png)

**Seattle Weather Details:**
- **Temperature:** 10°C
- **Condition:** Overcast Clouds
- **Feels Like:** 10°C
- **Humidity:** 91%
- **Wind Speed:** 4.02 m/s
- **Pressure:** 1013 hPa

---

### 6. Weather Display - Toronto (Detailed View)
Another view of Toronto weather showing different conditions with **1°C** and **Light Snow**.

![Weather Display - Toronto Detailed](Toronto.png)

**Toronto Weather Details:**
- **Temperature:** 1°C
- **Condition:** Light Snow
- **Feels Like:** -6°C
- **Humidity:** 77%
- **Wind Speed:** 15.2 m/s
- **Pressure:** 1009 hPa
- Weather icon showing snow

---

### 7. Postman API Testing - Toronto
Testing the OpenWeatherMap API endpoint for **Toronto** using Postman. The response shows successful data retrieval with **200 OK** status.

![Postman API Test - Toronto](Postman_Toronto.png)

**API Request Details:**
- **Method:** GET
- **URL:** `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=dda4786badf9261f94c39d23eb4e2c7c&units=metric`
- **Response Status:** 200 OK
- **Response Time:** 205 ms
- **Response Data:** Complete JSON with coord, weather, main, wind, clouds, sys data

**Key API Response Fields:**
```json
{
  "coord": { "lon": -79.4163, "lat": 43.7001 },
  "weather": [{ "main": "Snow", "description": "light snow", "icon": "13n" }],
  "main": { "temp": 1.25, "feels_like": -5.75, "humidity": 77, "pressure": 1009 },
  "wind": { "speed": 15.2 },
  "name": "Toronto"
}
```

---

### 8. Postman API Testing - London
Testing the API with **London** as the query parameter, showing successful response with overcast clouds weather data.

![Postman API Test - London](Postman_London.png)

**London API Test Details:**
- **City:** London
- **Status:** 200 OK
- **Response Time:** 41 ms
- **Temperature:** 13.56°C
- **Condition:** Overcast Clouds
- **Humidity:** 91%

---

### 9. Postman API Testing - Paris
Testing the API with **Paris** showing successful weather data retrieval with overcast clouds.

![Postman API Test - Paris](Postman_Paris.png)

**Paris API Test Details:**
- **City:** Paris
- **Status:** 200 OK
- **Response Time:** 42 ms
- **Temperature:** 7.9°C
- **Condition:** Overcast Clouds
- **Humidity:** 91%

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free account)

### Steps to Run Locally

1. **Clone the repository:**
```bash
   git clone https://github.com/uzmashxxxikh/101504303_comp3123_labtest2.git
```

2. **Navigate to project directory:**
```bash
   cd 101504303_comp3123_labtest2
```

3. **Install dependencies:**
```bash
   npm install
```

4. **Add your API key:**
   - Open `src/Weather.js`
   - Replace the API_KEY value:
```javascript
   const API_KEY = 'your_api_key_here';
```

5. **Start the development server:**
```bash
   npm start
```

6. **Open your browser:**
   - Default: `http://localhost:3000`
   - Alternative port: `http://localhost:3002`

---

## Project Structure
```
101504303_comp3123_labtest2/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # Main application component
│   ├── Weather.js          # Weather display component with API logic
│   ├── Weather.css         # Styling for weather component
│   ├── SearchBar.js        # Search input component
│   └── index.js            # React entry point
├── package.json            # Project dependencies
├── package-lock.json       # Locked versions of dependencies
└── README.md              # Project documentation
```

---

## Testing

### Cities Tested Successfully:
1. ✅ **Toronto, CA** - Light Snow, 1°C
2. ✅ **London, UK** - Overcast Clouds, 13.56°C
3. ✅ **Paris, FR** - Overcast Clouds, 7.9°C
4. ✅ **New York, US** - Clear Sky, 6°C
5. ✅ **Seattle, US** - Overcast Clouds, 10°C

### Error Testing:
- ✅ Invalid city names show proper error messages
- ✅ Empty input validation works
- ✅ Network errors handled gracefully

### API Testing via Postman:
- ✅ Toronto: 200 OK (205ms response time)
- ✅ London: 200 OK (41ms response time)
- ✅ Paris: 200 OK (42ms response time)

---

## Deployment

**Platform:** Vercel  
**Live URL:** https://101504303-comp3123-labtest2.vercel.app/  
**Deployment Type:** Automatic (triggers on git push)

### Deployment Features:
- Auto-deployment on push to main branch
- HTTPS enabled by default
- Global CDN distribution
- Zero configuration required

---

## Author

**Uzma Shaikh**  
Student ID: 101504303  
George Brown College  
COMP3123 - Full Stack Development I

---

## Contact & Support

- **Prof Email:** pritesh.patel2@georgebrown.ca
- **My Email:** uzma.shaikh2@georgebrown.ca
- **GitHub:** https://github.com/uzmashxxxikh
- **Project Repository:** https://github.com/uzmashxxxikh/101504303_comp3123_labtest2

---

📅 Submission Date: November 27, 2025
⏰ Submission Deadline: 8:00 PM
📊 Assignment Weight: 6% of final grade


---

**📅 Submission Date:** November 27, 2025  
**⏰ Submission Deadline:** 8:00 PM  
**📊 Assignment Weight:** 6% of final grade  
**✅ Status:** Complete and Ready for Submission
