const MakeBookmarkButton = document.getElementById("MakeBookmark-button");
const bookmarkContainer = document.getElementById("bookmark-container");

const bookmarkModal = document.getElementById("bookmark-modal");
const textInput = document.getElementById("bookmark-text-input");
const linkInput = document.getElementById("bookmark-link-input");
const saveBtn = document.getElementById("save-btn");
const closeBtn = document.getElementById("close-btn");

function getSavedBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    return Array.isArray(bookmarks) ? bookmarks : [];
  } catch (error) {
    console.log("Found broken data in localStorage. Resetting bookmarks...");
    localStorage.removeItem("bookmarks");
    return [];
  }
}

function createBookmark(nameText, urlLink) {
  const bookmarks = getSavedBookmarks();
  bookmarks.push({
    id: Date.now(),
    text: nameText,
    link: urlLink,
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function deleteBookmark(id) {
  const bookmarks = getSavedBookmarks();
  const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  displayBookmarks();
}

function displayBookmarks() {
  bookmarkContainer.innerHTML = "";

  for (const bookmarkData of getSavedBookmarks()) {
    const bookmark = document.createElement("div");
    bookmark.className = "bookmark-card";

    let domain = "";
    try {
      domain = new URL(bookmarkData.link).hostname;
    } catch (e) {
      domain = bookmarkData.link;
    }

    const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

    bookmark.innerHTML = `
        <img src="${iconUrl}" class="bookmark-icon" alt="icon">
        <a href="${bookmarkData.link}" target="_blank" class="bookmark-link">${bookmarkData.text}</a>
        <button class="delete-btn">X</button>
      `;

    const deleteBtn = bookmark.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      deleteBookmark(bookmarkData.id);
    });
    bookmarkContainer.appendChild(bookmark);
  }
}

MakeBookmarkButton.addEventListener("click", () => {
  bookmarkModal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  bookmarkModal.classList.add("hidden");
});

saveBtn.addEventListener("click", () => {
  let typedText = textInput.value;
  let typedLink = linkInput.value;

  if (typedText === "" || typedLink === "") return;

  if (!typedLink.startsWith("http://") && !typedLink.startsWith("https://")) {
    typedLink = "https://" + typedLink;
  }

  createBookmark(typedText, typedLink);

  textInput.value = "";
  linkInput.value = "";

  bookmarkModal.classList.add("hidden");
  displayBookmarks();
});

displayBookmarks();
