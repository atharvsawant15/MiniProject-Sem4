<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz updation </title>
    <link rel="stylesheet" href="admin_quiz.css">
</head>
<body>
    <div class="container">
        <h2>Update Quiz Question</h2>
        <form action="update_quiz.php" method="POST">
            <label for="question">Question:</label>
            <textarea id="question" name="question" rows="4" cols="50" required></textarea>

            <label for="option1">Option 1:</label>
            <input type="text" id="option1" name="option1" required>

            <label for="option2">Option 2:</label>
            <input type="text" id="option2" name="option2" required>

            <label for="option3">Option 3:</label>
            <input type="text" id="option3" name="option3" required>

            <label for="option4">Option 4:</label>
            <input type="text" id="option4" name="option4" required>

            <label for="correct_option">Correct Option:</label>
            <select id="correct_option" name="correct_option" required>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>

            <button type="submit">Update Question</button>
        </form>
    </div>
    
</body>
</html>