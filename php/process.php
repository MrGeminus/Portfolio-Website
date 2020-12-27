<?php
header('Access-Control-Allow-Origin: *');
if(isset($_POST)){
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$senderEmail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$recipientEmail = 'mrgeaieh@mrgeminus.com';
$emailBody = "$message";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type:text/html; charset=UTF-8" . "\r\n";
$headers .= "From: " .$firstName. " " .$lastName. "<" .$senderEmail. ">" . "\r\n";
mail ($recipientEmail, $subject, $emailBody, $headers);
}
?>