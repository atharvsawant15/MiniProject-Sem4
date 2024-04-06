<?php
session_start();
require('connection.php'); // Include your database connection file

// Function to sanitize user input
function sanitizeInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Check if the registration form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
    // Retrieve form data
    $admin_id = $_POST['admin_id'];
    $admin_name = $_POST['admin_name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];

    // Check if email or username already exists
    $check_query = "SELECT * FROM admin WHERE email=? OR username=?";
    $stmt = mysqli_prepare($con, $check_query);
    mysqli_stmt_bind_param($stmt, "ss", $email, $username);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    if(mysqli_stmt_num_rows($stmt) > 0) {
        // Email or username already exists
        echo "<script>alert('Email or username already exists. Please choose a different one.')</script>";
    } else {
        // SQL query to insert data into the database
        $insert_query = "INSERT INTO admin (Admin_ID, Admin_Name, username, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($con, $insert_query);
        mysqli_stmt_bind_param($stmt, "ssssss", $admin_id, $admin_name, $username, $email, $phone, $password);

        // Execute the insert query
        if(mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Registration successful. You can now login.')</script>";
        } else {
            // Error inserting user
            echo "<script>alert('Error registering user. Please try again.')</script>";
        }
    }
}

// Handle user login
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    // Sanitize and validate input
    $username = sanitizeInput($_POST['username']);
    $password = $_POST['password'];

    // SQL query to fetch user from database
    $sql = "SELECT password FROM admin WHERE username=?";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    if(mysqli_stmt_num_rows($stmt) == 1) {
        mysqli_stmt_bind_result($stmt, $hashed_password);
        mysqli_stmt_fetch($stmt);

        // Verify password
        if($password === $hashed_password) {
            // Password is correct, set session variables and redirect
            $_SESSION['username'] = $username;
            header("Location: quiz/front.html");
            // Redirect to dashboard or desired page
            exit();
        } else {
            // Incorrect password
            echo "<script>alert('Invalid username or password. Please try again.')</script>";
        }
    } else {
        // User not found
        echo "<script>alert('Invalid username or password. Please try again.')</script>";
    }
}
?>
