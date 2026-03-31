const titleElement = document.getElementById("Title");
const defaultTitle = "SimonFCO Dashboard";
const savedTitle = localStorage.getItem("dashboardTitle");

if (savedTitle) {
  titleElement.innerHTML = `<h1>${savedTitle}</h1>`;
}

titleElement.addEventListener("input", function () {
  localStorage.setItem("dashboardTitle", titleElement.innerText);
});
