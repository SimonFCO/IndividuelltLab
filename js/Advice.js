async function getAdvice() {
  try {
    let id = Math.floor(Math.random() * 200);
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
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
