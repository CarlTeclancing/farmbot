const apiKey = ""; // Replace with your WeatherAPI key
let weatherData = null;
let userLocation = "";

function setLocation() {
  const locInput = document.getElementById("locationInput");
  const location = locInput.value.trim();

  if (!location) {
    alert("Please enter a location!");
    return;
  }

  userLocation = location;
  fetchWeather(location);
}

async function fetchWeather(location) {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await res.json();

    weatherData = {
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      city: data.location.name
    };

    botReply(`Location set to ${weatherData.city} 🌍. You can now ask your farming questions.`);
    document.getElementById("userInput").disabled = false;
    document.getElementById("sendBtn").disabled = false;
  } catch (err) {
    console.error("Weather fetch failed:", err);
    botReply("⚠️ Couldn't get weather data for that location. Try again.");
  }
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  addMessage("You", message, "user");
  generateBotReply(message.toLowerCase());
  input.value = "";
}

function addMessage(sender, text, type) {
  const chatBox = document.getElementById("chatBox");
  const p = document.createElement("p");
  p.className = type;
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {
  addMessage("FarmBot", message, "bot");
}

function generateBotReply(msg) {
  if (!weatherData) {
    botReply("Please set your location first.");
    return;
  }

  const temp = weatherData.temp;
  const condition = weatherData.condition.toLowerCase();

  if (msg.includes("water")) {
    if (temp > 32) {
      botReply(`It's hot today 🌞 (${temp}°C). Water your crops early morning or late evening.`);
    } else if (condition.includes("rain")) {
      botReply("Rainy weather 🌧️ today. Skip irrigation to avoid overwatering.");
    } else {
      botReply(`Weather is mild (${temp}°C). You can maintain your regular irrigation.`);
    }
  } 
  else if (msg.includes("plant") || msg.includes("sow")) {
    if (condition.includes("rain") || temp < 20) {
      botReply("Not the best time to plant 🌧️. Wait for warmer and drier days.");
    } else {
      botReply("Great time to plant! Soil should be moist and temperature is good.");
    }
  } 
  else if (msg.includes("today") || msg.includes("do")) {
    if (condition.includes("sunny") && temp < 35) {
      botReply("Good day to check soil, irrigate lightly, and plant new crops.");
    } else if (condition.includes("rain")) {
      botReply("Stay indoors or handle storage. Let nature irrigate your farm today!");
    } else {
      botReply("Check your crops and manage pests if needed.");
    }
  }
  else {
    botReply("I'm not sure about that 🤔. Ask me about irrigation, planting, or weather farming tips.");
  }
}
