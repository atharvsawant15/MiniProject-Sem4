<?php
// Include database connection file
require 'connection.php';

// Initialize variable to store HTML content
$quizContent = '';

// Fetch questions from the database
$sql = "SELECT * FROM quiz LIMIT 1"; // Limit to fetch only one row
$result = $con->query($sql);

if ($result->num_rows > 0) {
    // Output data of the first row
    $row = $result->fetch_assoc();
    $question_number = $row["Sr.no"];

    // Append question and options to HTML content
    $quizContent .= "<div class='question'>" . $row["Questions"] . "</div>";
    $quizContent .= "<div class='options'>";
    $quizContent .= "<input type='radio' name='question_$question_number' value='1'>" . $row["option_1"] . "<br>";
    $quizContent .= "<input type='radio' name='question_$question_number' value='2'>" . $row["option_2"] . "<br>";
    $quizContent .= "<input type='radio' name='question_$question_number' value='3'>" . $row["option_3"] . "<br>";
    $quizContent .= "<input type='radio' name='question_$question_number' value='4'>" . $row["option_4"] . "<br>";
    $quizContent .= "</div>";
} else {
    $quizContent = "0 results";
}

// Close database connection
$con->close();
?>