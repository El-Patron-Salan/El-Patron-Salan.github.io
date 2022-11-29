<?php

session_start();
 

if (isset($_POST["stringVal"]) && !isset($_SESSION["stringVal"])) {

   $validators = ["mop", "mommy", "kochanek", "dobry_ziom", "chadziak", "bully", "non-binary"];
 
  if (isset($users[$_POST["user"]])) {
    $_SESSION["stringVal"] = $_POST["stringVal"];
  }
 
  if (!isset($_SESSION["stringVal"])) { 
    $failed = true; 
  }
}
 
if (isset($_SESSION["stringVal"])) {
  header("Location: ../index.html");
  exit();
}