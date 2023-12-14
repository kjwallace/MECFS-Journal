<?php

// Load the state schema JSON
// Here, I will just call it schema
$schema = json_decode(file_get_contents('schema.json'), true);

// Create a connection to the MySQL server
$connection = new mysqli('your_mysql_host', 'your_mysql_user', 'your_mysql_password', 'your_database_name');

// Check the connection
if ($connection->connect_error) {
    die('Error connecting to MySQL: ' . $connection->connect_error);
}

echo 'Connected to MySQL server' . PHP_EOL;

// Sample data to be inserted
$dataToInsert = [
    'username' => $schema['profile']['username'],
    'timestamp' => $schema['profile']['timestamp'],
    'ability' => $schema['profile']['ability'],
    'habits' => $schema['profile']['habits'],
    // Add more key-value pairs based on your table schema
];

$feedbackToInsert = [
    'username' => $schema['profile']['username'],
    'timestamp' => $schema['profile']['timestamp'],
    'feedback' => $schema['feedback']['response'],
    // Add more key-value pairs based on your table schema
];

// SQL query to insert data into the table
$insertQuery = 'INSERT INTO UserResponses (username, timestamp, ability, habits) VALUES (? ? ? ?)'; // Replace column1 with the actual column name
$feedbackQuery = 'INSERT INTO Feedback (username, timestamp, feedback) VALUES (?, ?, ?)'; // Replace column1, column2, column3 with the actual column names

// Prepare and bind parameters for the first query
$insertStatement = $connection->prepare($insertQuery);
$insertStatement->bind_param('s', $dataToInsert);

// Execute the first query
$insertStatement->execute();

// Check for errors
if ($insertStatement->error) {
    die('Error inserting data: ' . $insertStatement->error);
}

echo 'Data inserted successfully' . PHP_EOL;

// Prepare and bind parameters for the second query
$feedbackStatement = $connection->prepare($feedbackQuery);
$feedbackStatement->bind_param('sss', $feedbackToInsert['username'], $feedbackToInsert['timestamp'], $feedbackToInsert['feedback']);

// Execute the second query
$feedbackStatement->execute();

// Check for errors
if ($feedbackStatement->error) {
    die('Error inserting feedback: ' . $feedbackStatement->error);
}

echo 'Feedback inserted successfully' . PHP_EOL;

// Close the connection after inserting data
$connection->close();

?>
