// Theme toggle
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Hide/show images
const toggleImagesButton = document.getElementById("toggleImagesButton");
let imagesVisible = true;

toggleImagesButton.addEventListener("click", () => {
  const images = document.querySelectorAll("section img");
  imagesVisible = !imagesVisible;
  images.forEach((img) => {
    img.style.opacity = imagesVisible ? "1" : "0";
  });
  toggleImagesButton.textContent = imagesVisible ? "Hide Images" : "Show Images";
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

// Ссылку можно заменить на любой другой короткий mp3
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
