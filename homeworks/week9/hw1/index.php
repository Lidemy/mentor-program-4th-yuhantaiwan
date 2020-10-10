<?php
  session_start();
  require_once('./conn.php');
  require_once('./utils.php');
  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }
  $sql = 'SELECT * FROM comments ORDER BY id DESC';
  $result = $conn->query($sql);
  if (!$result) {
    die('Error: ' . $conn->error);
  }
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
      <?php if (!$username) { ?>
        <a href="./login.php" class="btn login-btn">登入</a>
        <a href="./register.php" class="btn signup-btn">註冊</a>
      <?php } else { ?>
        <a href="./logout.php" class="btn logout-btn">登出</a>
      <?php } ?>
    </div>
    <?php
      if (!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        if ($code === '1') {
          $msg = '資料不齊全';
          echo '<h3 class="comments-title error">錯誤：' . $msg . '</h3>';
        }
      }
    ?>
    <form action="./handle_add_comment.php" method="POST" class="comments-form">
      <h2 class="comments-title">Comments</h2>
      <!-- <div class="comments-input">
        <span>暱稱：</span>
        <input type="text" class="nickname-input" name="nickname">
      </div> -->
        <textarea cols="80" rows="8" class="comments-textarea" name="content"></textarea>
      <?php if ($username) { ?>
        <input type="submit" class="btn submit-btn" value="提交">
      <?php } else { ?>
        <h3 class="comments-title">請登入發布留言</h3>
      <?php } ?>
    </form>
    <div class="divider"></div>
    <div class="comments-groups">
    <?php
      while($row = $result->fetch_assoc()) {
    ?>
      <div class="comment-item">
        <div class="user-img">
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="comment-info">
          <span class="user-name">
            <?php echo $row['nickname']; ?>
          </span>
          <span class="comment-time">
            <?php echo $row['created_at']; ?>
          </span>
          <div class="comment-text">
            <?php echo $row['content']; ?>
          </div>
        </div>
      </div>
    <?php
      }
    ?>
    </div>
  </section>
</body>
</html>