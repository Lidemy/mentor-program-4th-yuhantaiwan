<?php
  session_start();
  session_destroy();
  /** 原本 使用 cookie 的寫法
     * require_once('./conn.php');
     * $toke = $_COOKIE['token'];
     * $sql = sprintf('DELETE FROM tokens WHERE token="%s"', $token);
     * $conn->query($sql);
     * setcookie('token', '', time() - 3600);
     */
  header('Location: index.php');
?>