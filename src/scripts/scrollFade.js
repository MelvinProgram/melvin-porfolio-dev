// src/scripts/scrollFade.js

export function setupScrollFade() {
  const faders = document.querySelectorAll(".fade-section");

  const appearOptions = {
    threshold: 0.2, // porcentaje visible antes de activar
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}

document.addEventListener("DOMContentLoaded", setupScrollFade);