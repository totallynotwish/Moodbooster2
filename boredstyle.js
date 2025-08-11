console.log("boredstyle.js is loaded!");

// Check if playlist ul exists
const playlist = document.getElementById("playlist");
if (!playlist) {
  console.error("Element with ID 'playlist' not found!");
} else {
  console.log("Playlist element found:", playlist);
}

// Check if homeBtn exists
const homeBtn = document.getElementById("homeBtn");
if (!homeBtn) {
  console.error("Home button with ID 'homeBtn' not found!");
} else {
  console.log("Home button found:", homeBtn);
}
document.addEventListener("DOMContentLoaded", function () {
  const isBored = true;
  const moodLevel = 8;

  const songs = [
    {
      name: "Happy Vibes 🎶",
      url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      mood: "uplifting",
      rating: 9,
    },
    {
      name: "Lo-fi Chill ☁️",
      url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      mood: "relaxed",
      rating: 7,
    },
    {
      name: "Dance Energy 💃",
      url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
      mood: "hype",
      rating: 8,
    },
    {
      name: "Gaming Beats 🎮",
      url: "https://www.youtube.com/watch?v=DWcJFNfaw9c",
      mood: "focus",
      rating: 6,
    },
    {
      name: "Feel Good Pop 🌈",
      url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
      mood: "uplifting",
      rating: 10,
    },
  ];

  const playlist = document.getElementById("playlist");

  if (!playlist) {
    console.error("❌ Element with ID 'playlist' not found!");
    return;
  }

  if (isBored && moodLevel >= 5) {
    songs.forEach((song) => {
      if (song.rating >= 7) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = song.url;
        a.textContent = `${song.name} (Rating: ${song.rating}/10)`;
        a.target = "_blank";
        li.appendChild(a);
        playlist.appendChild(li);
      }
    });
  } else {
    const msg = document.createElement("p");
    msg.textContent = "You're not that bored. Maybe take a walk instead 😄";
    playlist.appendChild(msg);
  }

  document.getElementById("homeBtn").addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
