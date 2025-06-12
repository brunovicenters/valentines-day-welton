const img = document.getElementById("img");
const imgContainer = document.querySelector(".img-container");
let currentIndex = 1;
const totalImages = 8;
const intervalTime = 3000; // 3 segundos
let isAnimating = false;

function triggerFadeOut() {
  if (isAnimating) {
    return;
  }
  isAnimating = true;
  imgContainer.classList.remove("fade-in");
  imgContainer.classList.add("fade-out");
}

// When fade-out ends, switch image and trigger fade-in
imgContainer.addEventListener("animationend", (event) => {
  if (event.animationName === "fade-out") {
    // Change image
    currentIndex = currentIndex >= totalImages ? 1 : currentIndex + 1;
    img.src = `img/${currentIndex}.jpeg`;
    img.alt = `Imagem ${currentIndex} do casal`;

    // Swap classes
    imgContainer.classList.remove("fade-out");
    imgContainer.classList.add("fade-in");
  } else if (event.animationName === "fade-in") {
    // Fade-in done, allow next change
    isAnimating = false;
  }
});

// Initial trigger
window.onload = () => {
  imgContainer.classList.add("fade-in");
  setInterval(triggerFadeOut, intervalTime);
};
