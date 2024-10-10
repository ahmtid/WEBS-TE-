// You can add any JavaScript functionality here
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('شكرًا لك! تم إرسال رسالتك بنجاح.');
    contactForm.reset();
  });
});