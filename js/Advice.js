async function getAdvice() {
  try {
    let id = Math.floor(Math.random() * 200);
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);

    if (!response.ok) {
      throw new Error("MISSING RESPONSE TERROR HELP" + response.statusText);
    }

    const data = await response.json();
    const advice = data.slip.advice;

    document.getElementById("Advice").innerHTML = `${advice}`;
  } catch (error) {
    console.error("Hi" + error);
    throw new Error(
      "This one does not have a good advice, on to the next one " + error,
      getAdvice(),
    );
  }
}
getAdvice();
setInterval(getAdvice, 5000);
