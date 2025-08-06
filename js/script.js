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


// Функція для створення/видалення секції
function toggleSection() {
  // Знаходимо кнопку
  const button = document.querySelector('.check_list_btn');

  // Перевіряємо, чи кнопка існує
  if (!button) {
      console.error('Кнопка з класом check_list_btn не знайдена');
      return;
  }

  let dynamicSection = null; // Змінна для зберігання посилання на секцію

  // Додаємо обробник події "click"
  button.addEventListener('click', () => {
      // Знайдемо батьківський елемент секції, де знаходиться кнопка
      const parentSection = button.closest('section');

      // Перевіряємо, чи секція вже існує
      if (dynamicSection) {
          // Якщо секція вже є, видаляємо її
          dynamicSection.remove();
          dynamicSection = null;
          console.log('Секція видалена');
      } else {
          // Якщо секція не існує, створюємо її
          const newSection = document.createElement('section');
          newSection.className = 'dynamic_section';
          
          // Стовлюємо стиль секції
          newSection.style.width = '100%';
          newSection.style.minHeight = '2000px';
          newSection.style.backgroundColor = '#f9f9f9';

          // Вставляємо нову секцію **між батьківським контейнером та наступною секцією**
          parentSection.insertAdjacentElement('afterend', newSection);

          // Зберігаємо посилання на новостворену секцію
          dynamicSection = newSection;
          console.log('Секція створена');
      }
  });
}

// Викликаємо функцію
toggleSection();
