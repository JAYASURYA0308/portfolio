document.addEventListener('DOMContentLoaded', function () {
    // Typed.js only if element exists
    const textElement = document.querySelector(".text");
    if (textElement) {
        var typed = new Typed(".text", {
            strings: ["FullStack Web Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // Navbar toggle setup
    setupNavbarToggle();
});

function setupNavbarToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const openIcon = menuToggle?.querySelector('.open-icon');
    const closeIcon = menuToggle?.querySelector('.close-icon');

    if (!menuToggle || !navbar || !openIcon || !closeIcon) return;

    menuToggle.addEventListener('click', function () {
        const isActive = navbar.classList.toggle('active');
        openIcon.style.display = isActive ? 'none' : 'inline';
        closeIcon.style.display = isActive ? 'inline' : 'none';
    });
}

// ...submit alert.apply...


  // Define a function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload

    var form = document.getElementById("contact-form");
    var thankYouMessage = document.getElementById("thank-you-message");
    var formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
    .then(function(response) {
      if (response.ok) {
        form.reset(); // Clear the form
        thankYouMessage.style.display = "block"; // Show thank you message
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    })
    .catch(function(error) {
      alert("❌ Error submitting form. Please try again.");
    });
  }

  // Attach event listener to the form
  document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);


