const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".gallery figure").forEach((figure) => {
  figure.addEventListener("click", () => {
    const img = figure.querySelector("img");
    const text = figure.querySelector("figcaption").textContent;

    lightboxImg.src = img.src;
    caption.textContent = text;
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
