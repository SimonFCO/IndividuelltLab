function GetDateTime() {
  document.getElementById("Clock").innerHTML =
    "Current Time: " + new Date().toLocaleTimeString();
  document.getElementById("Date").innerHTML =
    "Current Date: " + new Date().toLocaleDateString();
}

GetDateTime();

setInterval(GetDateTime, 1000);
