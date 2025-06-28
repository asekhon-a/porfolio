document.querySelector("form").addEventLidocument.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submit
    alert("Message sent! Thank you for contacting me.");
    this.reset(); // Clear form fields
  });
  
  // Dark mode toggle function
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  