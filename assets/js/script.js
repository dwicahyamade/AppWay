// Sticky Navbar
// Add .sticky class when scrolled
var navbar = document.getElementById("header");

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    navbar.classList.add("sticky");
    navbar.classList.remove("bg-custom");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("bg-custom");
  }
};