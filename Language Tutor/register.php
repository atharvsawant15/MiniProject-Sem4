<?php require('connection.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Language Tutor - Register</title>
  <link rel="stylesheet" href="register.css">
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body style="display:flex;
      align-items:center; justify-content:center;background-image: url('images/bg.jpg'); 
      background-size: cover;
      background-position: center">
<div class="login-page">
  <div class="form">
    <form class="register-form" action="admin.php" method="POST">
      <h2>Register</h2>
      <input type="text" placeholder="Admin ID *" name="admin_id" required/>
      <input type="text" placeholder="Admin Name *" name="admin_name" required/>
      <input type="text" placeholder="Username *" name="username" required/>
      <div>
      <input type="email" placeholder="Email *" name="email" required/> 
      <span id="emailError"></span>
      </div>
      <input type="text" placeholder="Phone" name="phone"/> <!-- Optional: Add phone input -->
      <div class="inputbox2">
      <ion-icon name="lock-closed-outline" ></ion-icon>
      <input type="password" placeholder="Password *" name="password" id="password" required/>
      <span id="passwordStrength" style="color: grey ;"></span>
      </div>
      <button type="submit" class="btn" name="register">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Register
      </button>
      <p class="message">Already Registered? <a href="login.php">Login Now</a></p>
    </form>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="register.js"></script>

<script>
$(document).ready(function() {
  // Function to check password strength
  function checkPasswordStrength(password) {
    // The password strength criteria can be adjusted as needed
    var strength = 0;
    if (password.length >= 8) {
      strength += 1;
    }
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]+/)) {
      strength += 1;
    }
    return strength;
  }
  
  // Function to display password strength
  $('#password').keyup(function () {
    var password = $(this).val();
    if (!password) { // If password is empty, clear the password strength indicator
      $('#passwordStrength').text('');
      return; // Exit the function
    }
    var strength = checkPasswordStrength(password);
    var displayText = '';
    switch (strength) {
      case 0:
      case 1:
        displayText = 'Weak';
        break;
      case 2:
      case 3:
        displayText = 'Moderate';
        break;
      case 4:
        displayText = 'Strong';
        break;
      case 5:
        displayText = 'Very Strong';
        break;
    }
    $('#passwordStrength').text('Password Strength: ' + displayText);
  });

  // Function to validate email
  function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // Email input keyup event handler
$('input[name="email"]').keyup(function () {
  var email = $(this).val();
  var isValid = validateEmail(email);
  if (!isValid) {
    $('#emailError').text('Invalid email address');
  } else {
    $('#emailError').text('');
  }
});
});
</script>

<script>
  // JavaScript code to toggle password visibility
const passwordInput = document.getElementById('password');
const passwordIcon = document.querySelector('.inputbox2 ion-icon[name="lock-closed-outline"]');

passwordIcon.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  if (type === 'password') {
    passwordIcon.setAttribute('name', 'lock-closed-outline');
  } else {
    passwordIcon.setAttribute('name', 'lock-open-outline');
  }
});
</script>
</body>
</html>
