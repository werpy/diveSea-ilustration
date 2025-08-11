'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Об'єднані ініціалізації Swiper
  const initSliders = () => {
    // Головний Swiper
    const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    // Кастомні кнопки навігації
    const customPrev = document.querySelector('.custom-prev');
    const customNext = document.querySelector('.custom-next');

    if (customPrev && customNext) {
      customPrev.addEventListener('click', () => swiper.slidePrev());
      customNext.addEventListener('click', () => swiper.slideNext());
    }

    // Слайдер для групових зображень
    const groupSlides = document.querySelectorAll(".group_pictures");
    if (groupSlides.length > 0) {
      let currentIndex = 0;
      let autoSlideInterval;

      const showSlide = (index) => {
        groupSlides[currentIndex].classList.remove("active");
        currentIndex = (index + groupSlides.length) % groupSlides.length;
        groupSlides[currentIndex].classList.add("active");
      };

      const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
      };

      const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
      };

      // Ініціалізація
      groupSlides[currentIndex].classList.add("active");
      startAutoSlide();

      // Обробники кнопок
      document.querySelector(".custom-next_header")?.addEventListener("click", () => {
        showSlide(currentIndex + 1);
        resetAutoSlide();
      });

      document.querySelector(".custom-prev_header")?.addEventListener("click", () => {
        showSlide(currentIndex - 1);
        resetAutoSlide();
      });
    }
  };

  // Управління бургер-меню
  const initBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger_btn');
    const burgerMenu = document.querySelector('.burger_menu_overlay');
    const burgerClose = document.querySelector('.burger_close');
    const burgerNavMenu = document.querySelector('.burger_nav_menu');
    const firstSection = document.querySelector("#explore");
    let firstSectionTop = firstSection?.offsetTop || 0;

    if (!burgerBtn || !burgerMenu || !burgerClose || !burgerNavMenu) return;

    const toggleScroll = (enable) => {
      document.body.style.overflow = enable ? '' : 'hidden';
    };

    const handleScroll = () => {
      if (!burgerMenu.classList.contains('active')) {
        burgerNavMenu.classList.toggle('fixed', window.scrollY >= firstSectionTop);
      }
    };

    // Обробники подій
    burgerBtn.addEventListener('click', () => {
      burgerMenu.classList.add('active');
      burgerNavMenu.classList.remove('fixed');
      toggleScroll(false);
    });

    burgerClose.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      toggleScroll(true);
      if (window.scrollY >= firstSectionTop) {
        burgerNavMenu.classList.add('fixed');
      }
    });

    // Оптимізований обробник скролу
    let isScrolling;
    window.addEventListener('scroll', () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(handleScroll, 50);
    }, { passive: true });

    // Ініціалізація початкового стану
    handleScroll();
  };

  // Виклик ініціалізаційних функцій
  initSliders();
  initBurgerMenu();

  // Плавний скрол для кнопок
  document.querySelector(".header_explore_btn")?.addEventListener("click", () => {
    document.querySelector("#explore")?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector(".header_create_btn")?.addEventListener("click", () => {
    document.querySelector("#create")?.scrollIntoView({ behavior: "smooth" });
  });
});