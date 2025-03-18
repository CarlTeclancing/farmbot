async function getWeather() {
    const location = document.getElementById("location").value;
    const resultDiv = document.getElementById("result");
  
    if (!location) {
      resultDiv.innerHTML = "Please enter a location.";
      return;
    }
  
    const apiKey = "c6323d6cc8f04958a2c163249251803"; // Get one from https://www.weatherapi.com/
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
  
      const suggestion = getIrrigationAdvice(temp);
  
      resultDiv.innerHTML = `
        <p><strong>Location:</strong> ${data.location.name}</p>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Condition:</strong> ${condition}</p>
        <p><strong>Irrigation Suggestion:</strong> ${suggestion}</p>
      `;
    } catch (error) {
      resultDiv.innerHTML = "Error fetching weather data. Try again.";
    }
  }
  
  function getIrrigationAdvice(temp) {
    if (temp > 35) {
      return "High temperature. Water early in the morning and late evening.";
    } else if (temp >= 25 && temp <= 35) {
      return "Moderate temperature. Maintain regular irrigation schedule.";
    } else if (temp < 25 && temp >= 15) {
      return "Cool weather. Reduce irrigation to prevent overwatering.";
    } else {
      return "Very cold. Avoid irrigation unless soil is dry.";
    }
  }
  