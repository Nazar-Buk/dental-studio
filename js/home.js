const menuBtn = document.querySelector(".menu__icon");
const menu = document.querySelector(".nav");
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav")) {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
  }
});

////////////// SWIPER /////////////////

const swiperHero = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  speed: 800,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
