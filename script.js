// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init();

  // Hero Carousel: cycle through slides every 3 seconds
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }
  if (slides.length > 0) {
    slides[0].classList.add("active");
    showSlides();
  }

  // Cost Estimator Calculation
  const yardInput = document.getElementById("yardSize");
  const premiumCheckbox = document.getElementById("premium");
  const ecoCheckbox = document.getElementById("eco");
  const fastCheckbox = document.getElementById("fast");
  const estimateDiv = document.getElementById("estimate");

  function calculateCost() {
    const size = parseFloat(yardInput.value) || 0;
    let cost = 5 * size; // base price $5/sqft
    if (premiumCheckbox.checked) cost *= 1.20;  // +20%
    if (ecoCheckbox.checked)     cost *= 1.15;  // +15%
    if (fastCheckbox.checked)    cost *= 1.10;  // +10%
    estimateDiv.textContent = "Estimated Cost: $" + cost.toFixed(2);
  }

  // Add event listeners to recalc on input changes
  [yardInput, premiumCheckbox, ecoCheckbox, fastCheckbox].forEach(el => {
    if (el) {
      el.addEventListener('input', calculateCost);
      el.addEventListener('change', calculateCost);
    }
  });
  // Initial calculation
  calculateCost();
});
