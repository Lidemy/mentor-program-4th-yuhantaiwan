<?php
  session_start();
  require_once('./conn.php');
  require_once('./utils.php');

  if (
    empty($_POST['username']) ||
    empty($_POST['password']) 
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = sprintf("SELECT * FROM users WHERE username='%s' AND password='%s'" , $username, $password);

  $result = $conn->query($sql);

  if (!$result) {
    die($conn->error);
  }

  if ($result->num_rows) {
    /** 建立 token
     * $token = generateToken();
     * $sql = sprintf('INSERT INTO tokens (token, username) VALUES ("%s", "%s")', $token, $username);
     * $result = $conn->query($sql);
     * if (!$result) {
     * die($conn->error);
     * }
     */

    /** 建立 cookie
      * $expire = time() + 3600 * 24 * 30;
      * setcookie('token', $token, $expire); 
      */
    
    $_SESSION['username'] = $username;
    header('Location: index.php');
  } else {
    header('Location: login.php?errCode=2');
  }

?>