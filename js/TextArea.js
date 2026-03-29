function saveData() {
  const Enotes = document.getElementById("notes");
  Enotes.value = localStorage.getItem("note") || "";
  Enotes.addEventListener("input", () => {
    localStorage.setItem("note", Enotes.value);
  });
}
