// Click Event
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("clickMsg").textContent = " Button clicked!";
});

// Mouseover Event
const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", function () {
  box.textContent = "You're hovering!";
  box.style.backgroundColor = "#ffc107";
});

box.addEventListener("mouseout", function () {
  box.textContent = "Hover over me";
  box.style.backgroundColor = "#ddd";
});
