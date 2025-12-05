<?php

$resposne = array();

$Name = $_POST["name"];
$Email = $_POST["email"];
$Subject = $_POST["subject"];
$Message = $_POST["message"];

/* Email to Admin */
$to = "isolatedesigns@gmail.com";
$subject = 'Shivam - Contact Us';

$message .= "<strong>Name</strong>: " . $Name . "<br>";
$message .= "<strong>Email</strong>: " . $Email . "<br>";
$message .= "<strong>Subject</strong>: " . $Subject . "<br>";
$message .= "<strong>Message</strong>: " . $Message . "<br>";

//$header = "From:" . $Email."\r\n";
$header = "From: isolatedesigns@gmail.com\r\n";
$header .= "Reply-To:" . $Email . "\r\n";
$header .= "Return-Path:" . $Email . "\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html;charset=UTF-8\r\n";

if (mail($to, $subject, $message, $header)) {
    $resposne['success'] = '<p class="alert alert-success w-100 m-0 mt-4">Thank you for your message. It has been sent.</p>';
} else {
    $resposne['error'] = '<p class="alert alert-danger w-100 m-0 mt-4">There was an error trying to send your message. Please try again later.</p>';
}

echo json_encode($resposne);
die;
//mail($to,"",$msg);
//echo "Thank you for contacting we will get in touch with you soon.";
?>