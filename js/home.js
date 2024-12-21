////////////// MOBILE MENU /////////////////

const menuBtn = document.querySelector(".menu__icon");
const menu = document.querySelector(".nav");
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav")) {
      menuBtn.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    }
  });

  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

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

////////////// REVIEWS /////////////////

const cards = [
  {
    userImg: "./img/reviews/01.png",
    userInfo: "Тетяна Племенник",
    cardText:
      "Надзвичайно високий рівень обслуговування клієнтів. Привітливий і професійний персонал. Рекомендую.",
  },
  {
    userImg: "./img/reviews/02.png",
    userInfo: "Орест Іськів",
    cardText:
      "Рекомендую дану клініку, задоволений на 100%! Працюють завжди надійно та швидко. Індивідуальний підхід до кожного пацієнта, весь спектр стоматологічних послуг.",
  },
  {
    userImg: "./img/reviews/03.png",
    userInfo: "Тетяна Грабинська",
    cardText:
      "Улюблена стоматологія! Лікарі - справжні професіонали! Лояльні ціни і все на найвищому рівні! Дякую за здорову усмішку!!)))",
  },
  {
    userImg: "./img/reviews/02.png",
    userInfo: "Орест Іськів",
    cardText:
      "Рекомендую дану клініку, задоволений на 100%! Працюють завжди надійно та швидко. Індивідуальний підхід до кожного пацієнта, весь спектр стоматологічних послуг.",
  },
  {
    userImg: "./img/reviews/03.png",
    userInfo: "Тетяна Грабинська",
    cardText:
      "Улюблена стоматологія! Лікарі - справжні професіонали! Лояльні ціни і все на найвищому рівні! Дякую за здорову усмішку!!)))",
  },
  {
    userImg: "./img/reviews/01.png",
    userInfo: "Тетяна Племенник",
    cardText:
      "Надзвичайно високий рівень обслуговування клієнтів. Привітливий і професійний персонал. Рекомендую.",
  },
  {
    userImg: "./img/reviews/03.png",
    userInfo: "Тетяна Грабинська",
    cardText:
      "Улюблена стоматологія! Лікарі - справжні професіонали! Лояльні ціни і все на найвищому рівні! Дякую за здорову усмішку!!)))",
  },
  {
    userImg: "./img/reviews/01.png",
    userInfo: "Тетяна Племенник",
    cardText:
      "Надзвичайно високий рівень обслуговування клієнтів. Привітливий і професійний персонал. Рекомендую.",
  },
  {
    userImg: "./img/reviews/01.png",
    userInfo: "Тетяна Племенник",
    cardText:
      "Надзвичайно високий рівень обслуговування клієнтів. Привітливий і професійний персонал. Рекомендую.",
  },
];

const cardsContainer = document.getElementById("cards-container");
const accordionBtn = document.getElementById("accordion-btn");

let isShowMoreCards = false;

const showHideCards = () => {
  const cardsToShow = isShowMoreCards ? cards : cards.slice(0, 3);

  const rendercards = cardsToShow
    .map((card) => {
      return `<div class="reviews__card">
              <div class="card__user-info">
                <div class="wrap-user-photo">
                  <img src=${card.userImg} />
                </div>
                <div class="username">${card.userInfo}</div>
              </div>
              <p class="card__text">
                ${card.cardText}
              </p>
              <div class="card__social">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 0C11.193 0 0 11.193 0 25C0 38.807 11.193 50 25 50C38.807 50 50 38.807 50 25C50 11.193 38.807 0 25 0ZM32.3451 14.3297C31.1567 14.3297 29.9608 14.3297 28.7729 14.3297C28.0211 14.281 27.2454 14.8549 27.108 15.6067C27.0918 16.9082 27.0999 18.2091 27.0999 19.5105C28.8454 19.5186 30.5914 19.5105 32.3375 19.5186C32.2082 21.4015 31.974 23.2768 31.6992 25.1359C30.1554 25.1521 28.6117 25.1359 27.068 25.144C27.0517 30.6964 27.0761 36.2407 27.0598 41.7936C24.7643 41.8017 22.4773 41.7855 20.1817 41.8017C20.1411 36.2493 20.1817 30.6969 20.1574 25.144C19.042 25.1359 17.9186 25.1521 16.8032 25.1359C16.8113 23.2687 16.8032 21.402 16.8032 19.5429C17.9186 19.5267 19.042 19.5429 20.1574 19.5348C20.1898 17.7244 20.1249 15.9059 20.1898 14.0955C20.311 12.6485 20.8524 11.2021 21.9277 10.208C23.2291 8.97145 25.0715 8.55116 26.8175 8.50249C28.6604 8.48627 30.5032 8.49438 32.3456 8.49438C32.3532 10.4422 32.3532 12.3819 32.3451 14.3297Z"
                    fill="#011A27"
                  />
                </svg>
              </div>
            </div>`;
    })
    .join(""); // .join("") зробить суцільний html, саме те що мені потрібно

  // Вставляємо всі картки в контейнер одним разом
  cardsContainer.innerHTML = rendercards;

  accordionBtn.innerHTML = isShowMoreCards
    ? "Менше відгуків"
    : "Більше відгуків";
};

accordionBtn.addEventListener("click", () => {
  isShowMoreCards = !isShowMoreCards; // Перемикаємо стан
  showHideCards(); // Перерендерюємо карточки
});

showHideCards(); // Перший рендер

////////////// SENDING FORM /////////////////

const BASE_URL = "https://test-tg-bot-api.onrender.com/";

const form = document.getElementById("form");
const username = document.getElementById("name");
const phoneNumber = document.getElementById("phone");

const loadingScreen = document.querySelector(".loadingScreen");

const isFormLoading = (show) => {
  // треба фн бо код читається тільки раз і якщо не викортстовувати колбек, то лоадер не покажеться

  loadingScreen.style.display = show ? "flex" : "none";
};

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // email та text бо я ще не налаштував бота
    const formValues = {
      email: username.value,
      text: phoneNumber.value,
    };

    try {
      isFormLoading(true);

      const response = await fetch(`${BASE_URL}submit`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        isFormLoading(false);

        // alert("Дані відпривилися успішно 🚀 🎉");
        username.value = "";
        phoneNumber.value = "";
      } else {
        isFormLoading(false);

        // alert("🚨 🚨 🚨 Помилка відправки даних");
      }
    } catch (err) {
      isFormLoading(false);

      console.log(err, "err");
      // alert("🩺 🩺 🩺 Виникла помилк при відправці форми");
    } finally {
      isFormLoading(false);
    }
  });
}
