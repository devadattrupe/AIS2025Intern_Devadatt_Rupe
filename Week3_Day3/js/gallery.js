const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll("figure img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
