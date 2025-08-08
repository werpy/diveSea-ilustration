'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto', // базове значення для мобільних
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
  });

  // Кастомні кнопки
  const customPrev = document.querySelector('.custom-prev');
  const customNext = document.querySelector('.custom-next');

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

  // Бургер-меню
  const burgerBtn = document.querySelector('.burger_btn');
  const burgerMenu = document.querySelector('.burger_menu_overlay');
  const burgerClose = document.querySelector('.burger_close');

  if (burgerBtn && burgerMenu && burgerClose) {
    burgerBtn.addEventListener('click', () => {
      burgerMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // блокуємо скрол
    });

    burgerClose.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});
