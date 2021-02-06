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
}

// Lightcase
jQuery(document).ready(function ($) {
  $('a[data-rel^=lightcase]').lightcase();
});

// Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});