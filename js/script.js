// ======================
// Fade-in on Scroll
// ======================
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

// ======================
// Optional: Smooth Scroll for Nav Links
// ======================
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
