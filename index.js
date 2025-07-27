
// ====================
// 🌙 Global Dark Mode
// ====================
const toggleBtn = document.getElementById("darkModeToggle");
const currentTheme = localStorage.getItem("theme");

// On page load, apply dark theme if previously set
if (currentTheme === "dark") {
  document.body.classList.add("dark");
}

// Toggle dark mode and store the preference
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// ============================
// 🔍 Search (Homepage Only)
// ============================

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const searchMessage = document.getElementById("search-message");

const categoryLinks = {
  "forgiveness": "forgiveness.html",
  "protection": "Protection.html",
  "anxiety & sadness": "AnxietySadness.html",
  "guidance": "Guidance.html",
  "before sleep": "BeforeSleep.html",
  "after salah": "Aftersalah.html"
};

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  let foundMatch = false;

  for (const [key, url] of Object.entries(categoryLinks)) {
    if (key.includes(query) || query.includes(key)) {
      window.location.href = url;
      foundMatch = true;
      break;
    }
  }

  if (!foundMatch) {
    searchMessage.textContent = "No matching du’a or category found. Try another keyword.";
    searchMessage.style.display = "block";

    // Optional: hide the message after 5 seconds
    setTimeout(() => {
      searchMessage.style.display = "none";
    }, 5000);
  }
}

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

searchBtn.addEventListener("click", performSearch);

// Enter key triggers search
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Search icon click triggers search
searchBtn.addEventListener("click", performSearch);

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Handle redirect from 404.html
const redirectPath = sessionStorage.getItem("redirectPath");
if (redirectPath) {
  sessionStorage.removeItem("redirectPath");
  history.replaceState(null, "", redirectPath);
  // Now you can call the function that renders the correct category
  showCategoryFromURL(); // Or whatever function you’re using
}

