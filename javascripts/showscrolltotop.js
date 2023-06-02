window.addEventListener("scroll", () => {
  let scroll = document.querySelector(".scroll-to-top");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
