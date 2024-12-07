/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar-nav .nav-link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetPage = link.getAttribute("href");

      loadContent(targetPage);
    });
  });

  function loadContent(page) {
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error al cargar el contenido: ", error);
      });
  }
});

import * as bootstrap from "bootstrap";
