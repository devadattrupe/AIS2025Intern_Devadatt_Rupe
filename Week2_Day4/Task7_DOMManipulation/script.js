// Select elements using querySelector
const paragraph = document.querySelector("#text");
const button = document.querySelector("#toggleBtn");

// Toggle highlight class on click
button.addEventListener("click", function () {
  paragraph.classList.toggle("highlight");
});
