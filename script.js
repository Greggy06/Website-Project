
// Get login form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    // Stop automatic form submission
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    // Check that fields are not empty
    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;

    }

    // Save email for dashboard greeting
    sessionStorage.setItem("userEmail", email);

    // Open dashboard
    window.location.href = "dashboard.html";

});
