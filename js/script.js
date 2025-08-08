'use strict'

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000, // Інтервал між прокручуванням (в мілісекундах)
      disableOnInteraction: false, // Автоплей не зупиняється після взаємодії користувача
    },
  });

  // Знаходимо кастомні кнопки
  const customPrev = document.querySelector('.custom-prev');
  const customNext = document.querySelector('.custom-next');

  // Прив'язка подій до кнопок
  if (customPrev && customNext) {
    customPrev.addEventListener('click', () => {
      swiper.slidePrev();
    });

    customNext.addEventListener('click', () => {
      swiper.slideNext();
    });
  } else {
    console.error('Custom navigation buttons not found in DOM.');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const burgerBtn = document.querySelector(".burger_btn");
  const burgerMenu = document.querySelector(".burger_menu_overlay");
  const burgerClose = document.querySelector(".burger_close");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // заблокуємо скрол
  });

  burgerClose.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});


