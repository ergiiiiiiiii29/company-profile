
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Navigasi responsif pada perangkat mobile
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup navigasi" : "Buka navigasi"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Tutup menu setelah tautan dipilih
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka navigasi");
      menuToggle.textContent = "☰";
    });
  });
}

// Tahun otomatis pada semua footer
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
