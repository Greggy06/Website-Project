
<?php

require_once "config.php";

// Only accept form submissions
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: register.html");
    exit;
}

// Get the submitted form values
$fullname = trim($_POST["fullname"] ?? "");
$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";
$confirmPassword = $_POST["confirm_password"] ?? "";

// Validate the information
if ($fullname === "" || $email === "" || $password === "" || $confirmPassword === "") {
    die("Please complete all fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Please enter a valid email address.");
}

if (strlen($password) < 8) {
    die("Your password must contain at least 8 characters.");
}

if ($password !== $confirmPassword) {
    die("Your passwords do not match.");
}

// Hash the password before saving it
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

try {
    // Prepare a safe database query
    $sql = "INSERT INTO users (fullname, email, password)
            VALUES (:fullname, :email, :password)";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ":fullname" => $fullname,
        ":email" => $email,
        ":password" => $hashedPassword
    ]);

    echo "Registration successful! You can now <a href='index.html'>log in</a>.";

} catch (PDOException $e) {
    if ($e->getCode() === "23000") {
        echo "This email address is already registered. Please use another email.";
    } else {
        echo "Something went wrong while creating your account. Please try again.";
    }
}

?>
