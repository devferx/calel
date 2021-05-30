const $header = document.getElementById("header");
const $menu = document.getElementById("header-menu");
const nav = document.querySelector("nav.header__navigation");

window.addEventListener("scroll", (ev) => {
  if (window.scrollY > 30) {
    $header.classList.add("shadow");
  }
  if (window.scrollY < 30) {
    $header.classList.remove("shadow");
  }
});

$menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
