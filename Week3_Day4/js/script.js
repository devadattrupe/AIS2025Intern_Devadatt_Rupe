// Back to Top
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FAQ toggle
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
