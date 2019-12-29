document.addEventListener("DOMContentLoaded", function () {

  function showMenu() {
    const menu = document.querySelector('#main-menu');
    const button = document.querySelector('.toggle-navbar');
    button.addEventListener('click', (event) => {
      menu.classList.toggle('menu-active-responsive')
    })
  }
  showMenu();
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 15,
    // init: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    },
    autoPlay: {
      delay: 3500
    },
    loop: true
  });
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);

}, false)