document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const actions = document.querySelector(".nav-actions");

toggle?.addEventListener("click", () => {
  links.classList.toggle("open");
  actions.classList.toggle("open");
});

