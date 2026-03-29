async function getAdvice() {
  try {
    let id = Math.floor(Math.random() * 200);
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
    );
    console.log(id);

    if (!response.ok) {
      throw new Error("No bueno no good no good at all" + response.statusText);
    }
    const data = await response.json();
    const advice = data.slip.advice;

    console.log(data);
    document.getElementById("Advice").innerHTML = `${advice}`;
  } catch (error) {
    console.error("Hi" + error);
    throw new Error("Still no bueno i guess " + error);
  }
}
getAdvice();
setInterval(getAdvice, 5000);
