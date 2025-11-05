// Theme toggle
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Hide/show entire sections
const toggleBlocksButton = document.getElementById("toggleImagesButton");
let blocksVisible = true;

toggleBlocksButton.addEventListener("click", () => {
  const sections = document.querySelectorAll("section.car");
  blocksVisible = !blocksVisible;
  sections.forEach((section) => {
    section.style.display = blocksVisible ? "block" : "none";
  });
  toggleBlocksButton.textContent = blocksVisible ? "Hide Blocks" : "Show Blocks";
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));

// Engine sound on hover
const carImages = document.querySelectorAll("section img");

// Ссылка на бесплатный звук двигателя
const engineSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_5b51c4cba9.mp3?filename=car-engine-7071.mp3");
engineSound.volume = 0.4;

carImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    engineSound.currentTime = 0;
    engineSound.play();
  });

  img.addEventListener("mouseleave", () => {
    engineSound.pause();
    engineSound.currentTime = 0;
  });
});
