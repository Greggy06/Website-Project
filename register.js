
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get user information
    const fullname = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("registerMessage");

    // Check password length
    if (password.length < 8) {

        message.textContent =
            "Password must contain at least 8 characters.";

        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match!";

        return;
    }

    // Registration successful (demo only)
    message.textContent =
        "Registration form completed successfully, " + fullname + "!";

    message.style.color = "green";

    console.log("Name:", fullname);
    console.log("Email:", email);

});
