<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        $to = 'cafedelaarmenier@gmail.com';
        $subject = 'Neue Nachricht von ' . $name;
        $emailMessage = "Name: $name\nEmail: $email\nNachricht:\n$message";
        $headers = 'From: ' . $email . "\r\n" .
                   'Reply-To: ' . $email . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        if (mail($to, $subject, $emailMessage, $headers)) {
            header("Location: ../Contact.html?status=success");
        } else {
            header("Location: ../Contact.html?status=error");
        }
    } else {
        header("Location: ../Contact.html?status=missing");
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "HTTP-Methode nicht erlaubt.";
}
