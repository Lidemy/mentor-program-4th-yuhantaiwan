<?php
  require_once('./conn.php');

  function generateToken() {
    $char = '';
    for ($i=0; $i<=16; $i++) {
      $char .= chr(rand(65,90));
    }
    return $char;
  }

  function getUserFromSession($username) {
    global $conn;   // 宣告 global 使用外部變數
    /** 原本 使用 cookie 的寫法
     * $token_sql = sprintf('SELECT username FROM tokens WHERE token = "%s"', $token);
     * $result = $conn->query($token_sql);
     * $row = $result->fetch_assoc();
     * $username = $row['username'];
     */
    $user_sql = sprintf('SELECT * FROM users WHERE username = "%s"', $username);
    $result = $conn->query($user_sql);
    $row = $result->fetch_assoc();
    return $row;
  }
?>