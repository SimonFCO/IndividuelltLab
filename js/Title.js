const titleElement = document.getElementById("Title");
const defaultTitle = "SimonFCO Dashboard";

const savedTitle = localStorage.getItem("dashboardTitle");

if (savedTitle) {
  titleElement.innerText = savedTitle;
}

titleElement.addEventListener("input", function () {
  localStorage.setItem("dashboardTitle", titleElement.innerText);
});
