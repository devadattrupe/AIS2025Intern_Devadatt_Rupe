let isDark = false;

document.getElementById("toggleBtn").addEventListener("click", () => {
  if (!isDark) {
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--btn-bg", "#ffc107");
    document.documentElement.style.setProperty("--btn-text", "#000000");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--btn-bg", "#007bff");
    document.documentElement.style.setProperty("--btn-text", "#ffffff");
  }

  isDark = !isDark;
});
