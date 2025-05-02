document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const promoBar = document.querySelector(".promo-bar"); // Seleccionamos la promoción
  const links = document.querySelectorAll(".nav-item");

  // ✅ Asegurar que la línea del navbar se aplique correctamente
  navbar.style.borderBottom = "2px solid rgba(255, 255, 255, 0.2)";
  navbar.style.position = "relative"; // Asegura que la línea no se sobrescriba

  // ✅ Agregar línea de separación debajo de la promoción
  if (promoBar) {
    promoBar.style.borderBottom = "2px solid rgba(255, 255, 255, 0.2)";
    promoBar.style.position = "relative";
    promoBar.style.zIndex = "100"; // Asegura que la línea no quede detrás de otros elementos
  }

  links.forEach(link => {
    const currentPath = window.location.pathname;
    const linkPath = link.getAttribute("href");

    // ✅ Resaltar la sección activa con una línea inferior que siempre sea visible
    if (currentPath === linkPath || (currentPath.startsWith(linkPath) && linkPath !== "/")) {
      link.style.color = "#ffffff";
      link.style.fontWeight = "bold";
      link.style.textShadow = "0 0 10px rgba(59, 130, 246, 1)";
      link.style.position = "relative";

      // ✅ Crear línea inferior en el menú activo
      let line = link.querySelector(".active-line");
      if (!line) {
        line = document.createElement("div");
        line.classList.add("active-line");
        line.style.position = "absolute";
        line.style.left = "0";
        line.style.right = "0";
        line.style.bottom = "-4px";
        line.style.height = "3px";
        line.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        link.appendChild(line);
      }
    } else {
      const existingLine = link.querySelector(".active-line");
      if (existingLine) {
        existingLine.remove();
      }
    }
  });
});