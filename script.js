document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const actions = document.querySelector(".nav-actions");

toggle?.addEventListener("click", () => {
  links.classList.toggle("open");
  actions.classList.toggle("open");
});

const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderGallery(filter = "all") {
  if (!galleryGrid || typeof galleryItems === "undefined") return;
  const filtered = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);
  galleryGrid.innerHTML = filtered.map(item => `
    <article class="gallery-card">
      <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80'">
      <div><p>${item.category}</p><h3>${item.title}</h3></div>
    </article>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

renderGallery();
