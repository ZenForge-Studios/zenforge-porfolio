document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const promoBar = document.querySelector(".promo-bar"); // Seleccionamos la promoción
  const links = document.querySelectorAll(".nav-item");

  // Agregar línea de separación al navbar
  navbar.style.borderBottom = "2px solid rgba(255, 255, 255, 0.2)";

  // Agregar línea de separación debajo de la promoción
  if (promoBar) {
    promoBar.style.borderBottom = "2px solid rgba(255, 255, 255, 0.2)";
    promoBar.style.paddingBottom = "5px"; // Ajuste visual
  }

  links.forEach(link => {
    const currentPath = window.location.pathname;
    const linkPath = link.getAttribute("href");

    // Resaltar la sección activa con una línea inferior
    if (currentPath === linkPath || (currentPath.startsWith(linkPath) && linkPath !== "/")) {
      link.style.color = "#ffffff";
      link.style.fontWeight = "bold";
      link.style.textShadow = "0 0 10px rgba(59, 130, 246, 1)";
      link.style.position = "relative";

      // Crear línea inferior en el menú activo
      const line = document.createElement("div");
      line.style.position = "absolute";
      line.style.left = "0";
      line.style.right = "0";
      line.style.bottom = "-4px";
      line.style.height = "3px";
      line.style.backgroundColor = "rgba(255, 255, 255, 0.6)";

      link.appendChild(line);
    } else {
      link.style.borderBottom = "";
    }
  });
});