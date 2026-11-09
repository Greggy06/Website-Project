
// Get the forgot password form
const forgotForm = document.getElementById("forgotForm");

// Listen for form submission
forgotForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get email address
    const email = document.getElementById("email").value.trim();

    // Get message element
    const message = document.getElementById("resetMessage");

    // Display confirmation message
    message.textContent =
        "If an account exists for this email, password reset instructions will be sent.";

    message.style.color = "green";


});
