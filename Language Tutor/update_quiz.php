<?php
// Include database connection file
require_once 'connection.php';

// Retrieve form data
$question = $_POST['question'];
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$option3 = $_POST['option3'];
$option4 = $_POST['option4'];
$correctOption = $_POST['correct_option'];

// Prepare SQL statement to insert data
$sql = "INSERT INTO quiz (Questions, option_1, option_2, option_3, option_4, correct_opt1) VALUES (?, ?, ?, ?, ?, ?)";

// Prepare and bind parameters
$stmt = $con->prepare($sql);
$stmt->bind_param("ssssss", $question, $option1, $option2, $option3, $option4, $correctOption);

// Execute the statement
if ($stmt->execute()) {
    echo "Question inserted successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and database connection
$stmt->close();
$con->close();
?>
