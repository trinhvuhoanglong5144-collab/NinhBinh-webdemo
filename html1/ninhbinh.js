const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
let total = dots.length;
let interval;
function showSlide(i) {
  index = i;
  if (index >= total) index = 0;
  if (index < 0) index = total - 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
function nextSlide() {
  showSlide(index + 1);
}
function prevSlide() {
  showSlide(index - 1);
}
next.onclick = nextSlide;
prev.onclick = prevSlide;
dots.forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});
function startAuto() {
  interval = setInterval(nextSlide, 3000);
}
function stopAuto() {
  clearInterval(interval);
}
const slider = document.querySelector(".slider");
slider.addEventListener("mouseover", stopAuto);
slider.addEventListener("mouseout", startAuto);
startAuto();
