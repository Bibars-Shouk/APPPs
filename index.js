const toggles = document.querySelectorAll(".faq-toggle");
const testimonialContainer = document.querySelector(
  ".testimonial-card-container"
);
const testimonialBtnLeft = document.querySelector("#left");
const testimonialBtnRight = document.querySelector("#right");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-link");

toggles.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.parentNode.parentNode.classList.toggle("active");
  });
});

let idx = 0;

function setActiveTestimonial() {
  testimonialCards.forEach((testimonial, index) => {
    if (index === idx) {
      testimonial.classList.add("active");
    } else {
      testimonial.classList.remove("active");
    }
  });
}

function changeTestimonial() {
  if (idx > 2) {
    idx = 0;
  } else if (idx < 0) {
    idx = 2;
  }
  testimonialContainer.style.transform = `translateX(${idx * -260}px)`;
  setActiveTestimonial();

  if (idx === 0) {
    testimonialBtnLeft.classList.add("hide");
  } else if (idx === 2) {
    testimonialBtnRight.classList.add("hide");
  } else {
    testimonialBtnLeft.classList.remove("hide");
    testimonialBtnRight.classList.remove("hide");
  }
}

testimonialBtnRight.addEventListener("click", () => {
  idx++;
  changeTestimonial();
});

testimonialBtnLeft.addEventListener("click", () => {
  idx--;
  changeTestimonial();
});

changeTestimonial();

function toggleNav() {
  navToggle.classList.toggle("active");
  document.querySelector(".nav-list").classList.toggle("active");
}

navToggle.addEventListener("click", (e) => {
  toggleNav();
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    toggleNav();
  });
});
