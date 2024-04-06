<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
    <link rel="stylesheet" href="try.css">

    <title>Quiz </title>
</head>

<body >
    <div id="display-container">
        <div class="notification">You Should have minimum 8 right Questions from 10 Questions to qualify for Level 2 - Medium</div>
        <div class="header">
            <div>
                <H3>Level 1 - Easy</H3>
            </div>
            <div class="timer-div">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/stopwatch-icon.png"
                    width="20px" />
                <span class="time-left">60s</span>
            </div>
        </div>
        <div id="container">
        <?php
// Include database connection file
require 'connection.php';

// Initialize variable to store HTML content
$quizContent = '';

// Fetch 10 random questions from the database
$sql = "SELECT * FROM quiz ORDER BY RAND() LIMIT 10"; // Fetch 10 random rows
$result = $con->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $question_number = $row["Sr.no"];

        // Append question and options to HTML content
        $quizContent .= "<div class='option-div'>" . $row["Questions"] ."<br><br>";
        $quizContent .= "<input type='radio' name='question_$question_number' value='1'>" . $row["option_1"] . "<br><br>";
        $quizContent .= "<input type='radio' name='question_$question_number' value='2'>" . $row["option_2"] . "<br><br>";
        $quizContent .= "<input type='radio' name='question_$question_number' value='3'>" . $row["option_3"] . "<br><br>";
        $quizContent .= "<input type='radio' name='question_$question_number' value='4'>" . $row["option_4"] . "<br>";
        $quizContent .= "</div>"."<br><br>";
    }
} else {
    $quizContent = "0 results";
}

echo $quizContent;

// Close database connection
$con->close();
?>


        <button id="button">submit</button>
    </div>
     

    <script src="try.js"></script>
</body>

</html>