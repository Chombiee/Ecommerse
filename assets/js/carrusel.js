// Seleccionamos los elementos del carrusel
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

// Índice de la imagen actual
let currentIndex = 0;

// Función que muestra el slide activo
function showSlide(index) {

  // Si el índice se pasa, volvemos al inicio
  if (index >= slides.length) {
    currentIndex = 0;
  }
  // Si es menor que 0, vamos al último
  else if (index < 0) {
    currentIndex = slides.length - 1;
  }
  else {
    currentIndex = index;
  }

  // Ocultamos todos los slides
  slides.forEach(slide => slide.classList.remove("active"));

  // Desactivamos todos los dots
  dots.forEach(dot => dot.classList.remove("active"));

  // Activamos el slide actual
  slides[currentIndex].classList.add("active");

  // Activamos el dot correspondiente
  dots[currentIndex].classList.add("active");
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

// Click en los dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Mostrar el primer slide al cargar
showSlide(currentIndex);

setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
