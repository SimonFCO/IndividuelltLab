function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getWeatherCode(code) {
  if (code == 0) return { text: "Clear", icon: "🔆" };
  if (code == 1 || code == 2 || code == 3)
    return { text: "Cloudy", icon: "☁️" };
  if (code == 45 || code == 48) return { text: "Foggy", icon: "🌫️" };
  if (code >= 51 && code <= 67) return { text: "Rainy", icon: "🌧️" };
  if ((code >= 71 && code <= 77) || code == 85 || code == 86) {
    return { text: "Snowy", icon: "🌨️" };
  }
  if (code >= 95) return { text: "Lightning", icon: "🌩️" };

  return { text: "Unknown Weather" };
}

async function getWeather(position) {
  try {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max&forecast_days=3&timezone=Europe/Stockholm`,
    );
    if (!response.ok) {
      throw new Error("No bueno no good no good at all" + response.statusText);
    }

    const data = await response.json();
    const daily = data.daily;

    for (let i = 0; i < 3; i++) {
      const temp = daily.temperature_2m_max[i];
      const WeatherCode = daily.weather_code[i];
      const weatherDetails = getWeatherCode(WeatherCode);

      document.getElementById(
        `Weather${i === 0 ? "Today" : i === 1 ? "Tomorrow" : "TomorrowMorrow"}`,
      ).innerHTML = `${temp}°C`;
      document.getElementById(
        `WeatherType${i === 0 ? "Today" : i === 1 ? "Tomorrow" : "TomorrowMorrow"}`,
      ).innerHTML = weatherDetails.text;
      document.getElementById(
        `WeatherType${i === 0 ? "Today" : i === 1 ? "Tomorrow" : "TomorrowMorrow"}Icon`,
      ).innerHTML = weatherDetails.icon;
    }
  } catch (error) {
    console.error("Hi" + error);
    throw new Error("Still no bueno i guess " + error);
  }
}

getLocation();
setInterval(getLocation, 300000);
