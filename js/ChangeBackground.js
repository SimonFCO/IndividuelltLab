const WallpaperChanger = document.getElementById("WallpaperChanger-button");

async function ChangeWallpaper() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=cTlKdadPl1nv6sGYTsfyDqgvy9IZDT_jFY4vIiQ2cQs`,
    );

    if (!response.ok) {
      throw new Error("No bueno no good no good at all" + response.statusText);
    }
    const data = await response.json();
    const imageUrl = data.urls.regular;

    document.body.style.backgroundImage = `url('${imageUrl}')`;
  } catch (error) {
    throw new Error("Something has gone terribly wrong ;() " + error);
  }
}

WallpaperChanger.addEventListener("click", ChangeWallpaper);
