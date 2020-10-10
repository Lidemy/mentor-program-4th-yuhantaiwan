<?php
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言板</title>
  <link rel="stylesheet" href="./style.css">
  <script src="https://kit.fontawesome.com/c4fd3c1efb.js" crossorigin="anonymous"></script>
</head>
<body>
  <header>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</header>
  <section class="board">
    <div class="login-section">
      <a href="./index.php" class="btn login-btn">回留言板</a>
      <a href="./register.php" class="btn signup-btn">註冊</a>
    </div>
    <!-- <h3 class="meeting-text">註冊</h3> -->
    <?php
      if (!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        if ($code === '1') {
          $msg = '資料不齊全';
        } else if ($code === '2') {
          $msg = '帳號或密碼輸入錯誤';
        }
        echo '<h3 class="comments-title error">錯誤：' . $msg . '</h3>';
      }
    ?>
    <form action="./handle_login.php" method="POST" class="comments-form">
      <h2 class="comments-title">登入</h2>
      <div class="comments-input">
        <span>帳號：</span>
        <input type="text" class="username-input" name="username">
      </div>
      <div class="comments-input">
        <span>密碼：</span>
        <input type="password" class="password-input" name="password">
      </div>
      <input type="submit" class="btn submit-btn" value="提交">
    </form>
  </section>
</body>
</html>