
// Get saved user email from the browser session
const userEmail = sessionStorage.getItem("userEmail");

// Get dashboard elements
const welcomeMessage = document.getElementById("welcomeMessage");
const topUsername = document.getElementById("topUsername");

// Display username
if (userEmail) {

    const username = userEmail.split("@")[0];

    welcomeMessage.textContent = "Welcome Back, " + username + "!";

    topUsername.textContent = username;

} else {

    welcomeMessage.textContent = "Welcome to Your Dashboard!";

    topUsername.textContent = "Guest";

}


// Logout functionality
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function() {

    // Clear the session information
    sessionStorage.removeItem("userEmail");

    // Return to login page
    window.location.href = "index.html";

});
