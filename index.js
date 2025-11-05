// Theme toggle
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
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

// Hide individual blocks smoothly
const hideButtons = document.querySelectorAll(".hide-btn");

hideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.closest("section");
    const isHidden = section.classList.contains("hidden");

    if (!isHidden) {
      section.classList.add("hidden");
      button.textContent = "Show Block";
    } else {
      section.classList.remove("hidden");
      button.textContent = "Hide Block";
    }
  });
});
