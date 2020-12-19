<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];
$senderEmail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$recipientEmail = 'urostomic94@gmail.com';
$emailBody = $message;
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type:text/html; charset=UTF-8" . "\r\n";
$headers .= "From: " .$firstName. " " .$lastName. "<" .$senderEmail. ">" . "\r\n";
mail ($recipientEmail, $subject, $emailBody, $headers);
?>