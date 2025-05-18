document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Pesan Anda telah dikirim!');
  this.reset();  // Reset form setelah pengiriman
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});
