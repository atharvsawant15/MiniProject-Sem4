<?php
   $con=mysqli_connect("localhost","root","","lang_tutor");
   if(mysqli_connect_error())
   {
       echo "<script>alert('cannot connect to the database')</script>";
       exit();
   }
?>