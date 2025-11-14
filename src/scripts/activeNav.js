// src/scripts/activeNav.js

export function setupActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const footer = document.getElementById("footer-contacto");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    // Detectar si estamos al inicio (antes de la primera sección)
    if (window.scrollY < 100 && sections.length > 0) {
      current = "inicio"; // ID de tu sección o anchor inicial
    }

    // Detectar secciones visibles
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Ajusta según altura del header
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    // Detectar si estamos al final del documento -> Footer
    const scrollBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    if (scrollBottom && footer) {
      current = footer.getAttribute("id");
    }

    // Actualizar la navegación
    navLinks.forEach((link) => {
      link.classList.remove("text-yellow-600", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-yellow-600", "font-semibold");
      }
    });
  });

}

document.addEventListener("DOMContentLoaded", setupActiveNav);