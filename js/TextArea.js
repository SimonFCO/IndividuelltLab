function saveData() {
  const notes = document.getElementById("notes");
  notes.value = localStorage.getItem("note") || "";
  notes.addEventListener("input", () => {
    localStorage.setItem("note", notes.value);
  });
}
