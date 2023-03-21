function navToggle() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.toggle("_active");
  var html = document.getElementById("html");
  html.classList.toggle("_overflow");
  var body = document.getElementById("body");
  body.classList.toggle("_overflow");
}

/*$(".owl-carousel").owlCarousel({
  items: 2.5,
  lazyLoad: true,
  loop: true,
  margin: 10,
});*/

function carouselFn() {
  if ($(window).width() < 500) {
    $(".owl-carousel").owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
    });
  } else {
    $(".owl-carousel").owlCarousel({
      items: 2,
      margin: 10,
      loop: true,
    });
  }
}

$(document).ready(function () {
  carouselFn();
});
$(window).resize(function () {
  carouselFn();
});
