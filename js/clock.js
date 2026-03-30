function GetDateTime() {
  let now = new Date();

  document.getElementById("Clock").innerHTML = now.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.getElementById("Date").innerHTML = now.toLocaleDateString("sv-SE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

GetDateTime();
setInterval(GetDateTime, 1000);
