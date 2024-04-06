<?php require('connection.php');?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Language Tutor - Login </title>
  <link rel="stylesheet" href="login.css">
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body style="display:flex;    
      align-items:center; justify-content:center;background-image: url('images/bg.jpg'); 
      background-size: cover;
      background-position: center">
<div class="login-page">
  <div class="form">
    <form action="admin.php" method="post" id="loginForm">
      <h2>Login</h2>
      <div class="inputbox1">
      <ion-icon name="mail-outline" ></ion-icon>
      <input type="text" placeholder="Username" name="username" required >
      </div>
      <div class="inputbox2">
      <ion-icon name="lock-closed-outline" ></ion-icon>
      <input type="password" placeholder="Password" name="password" id="password" required>
      </div>
      <button type="submit" class="btn" name="login">
      <span></span>
        <span></span>
        <span></span>
        <span></span>
        Log in</button>
      <p class="message">Not registered? <a href="register.php">Create an account</a></p>
    </form>
  </div>
</div>

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

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="login.js"></script> <!-- Include the separate JavaScript file -->
</body>
</html>
