<?php

session_start();
 

if (isset($_POST["stringVal"]) && !isset($_SESSION["stringVal"])) {

   $validators = ["mop", "mommy", "kochanek", "dobry_ziom", "chadziak", "bully", "non-binary"];
 
  // (B2) CHECK & VERIFY
  if (isset($users[$_POST["user"]])) {
    $_SESSION["stringVal"] = $_POST["stringVal"];
  }
 
  // (B3) FAILED LOGIN FLAG
  if (!isset($_SESSION["stringVal"])) { 
    $failed = true; 
  }
}
 
// (C) REDIRECT TO HOME PAGE IF SIGNED IN - SET YOUR OWN !
if (isset($_SESSION["stringVal"])) {
  header("Location: ../index.html");
  exit();
}