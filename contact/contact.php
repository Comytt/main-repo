<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "physicsatprhs@gmail.com"; // Replace with your club's email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Error sending email.";
    }
}
?>