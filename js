"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}

/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10
    ? header.classList.add("active")
    : header.classList.remove("active");
});

function handleRentNowClick() {
  // Show the modal
  document.getElementById("modal").style.display = "block";
}
const rentNowButtons = document.querySelectorAll(".rent-now-btn");

// Attach event listeners to each rent now button
rentNowButtons.forEach((button) => {
  button.addEventListener("click", handleRentNowClick);
});

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// Prevent the modal from closing when clicking inside the modal
document.getElementById("modal").addEventListener("click", function (event) {
  event.stopPropagation();
});

// Handle form submission (you should replace this with your own logic)
document
  .getElementById("card-details-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Card details submitted successfully!");
    // Here you would typically send the card details to your server for processing
    // You can access the card details from the form using document.getElementById('card-number').value and document.getElementById('expiration-date').value
    // Then, you can make an AJAX request to your server to process the payment
    // After the payment is processed, you can close the modal and proceed with the rental process
    document.getElementById("modal").style.display = "none";
  });

// Function to handle car return
function handleCarReturn() {
  // Assume some inspection process here to check for damages
  const damagesFound = confirm(
    "Was any damage found on the car during inspection?"
  );

  // Calculate the final bill
  let finalBill = 440; // Base rental cost
  if (damagesFound) {
    const damageCost = parseFloat(prompt("Enter the cost of damages:"));
    if (!isNaN(damageCost)) {
      finalBill += damageCost;
    } else {
      alert("Invalid input. Damage cost must be a number.");
      return; // Exit the function early
    }
  }

  // Display the final bill to the employee and customer
  alert(`Car returned successfully!\nFinal bill: $${finalBill}`);
}

const returnButtons = document.querySelectorAll(".return-btn");

// Attach event listeners to each rent now button
returnButtons.forEach((button) => {
  button.addEventListener("click", handleCarReturn);
});

