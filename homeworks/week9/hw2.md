## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

在 MySQL 5 之後 VARCHAR 的最大長度為 65535 (2<sup>16</sup> − 1) Bytes (字節)。VARCHAR(N) 的 N 是指字元數，而不是 Bytes，能儲存多少個字必須依字元集 (Character Set) 決定。。其中，VARCHAR 需要多 1 到 2 個Bytes 來儲存值的長度，以及多 1 byte 儲存是否允許為 Null。
以 latin1 字元集來說，1 字元為 1 Byte；所以 VARCHAR 實際上最多能宣告
 65532 (65535 - 2 - 1) 個字元。而我們常用的 utf8mb4 字元集，1 字元需要 4 Bytes。所以 VARCHAR 最多能儲存 16383 (65532 / 4) 個字元。

TEXT 跟 VARCHAR 基本相同， 最多能保存 65535 Bytes (字節)。
跟 VARCHAR 的區別是：
1. TEXT 只能有固定的最大長度，而 VARCHAR 的最大長度為可變的。
2. TEXT 需要 2 個 Bytes 來儲存值的長度。
3. TEXT 不可以有默認值。
4. 查詢速度：VARCHAR > TEXT



## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
原本的 HTTP 是無紀錄狀態。而 Cookie 是網站伺服器儲存在使用者瀏覽器中的一部分資訊。使用 Cookie 就可以紀錄 HTTP 狀態。

建立與使用 Cookie：
收到一個 HTTP request 時，伺服器可以傳送一個 Set-Cookie 的 response header，把 Cookie 存於瀏覽器中。可以註明 Cookie 的有效或終止時間，超過後 Cookie 將不再發送。此外，也可以限制 Cookie 不傳送到特定的網域或路徑。當再訪問同個網頁時，瀏覽器會把符合條件（沒有過期且同個 domain 下）的 Cookie 隨著 request 被放在 HTTP header 內，傳給同個伺服器。伺服器認得這個 Cookie 就能記住使用者的資訊。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1. 更改 Cookie 的 value，就可能可以使用他人的 username。
2. 資料庫儲存的是明文密碼，若被駭客入侵，就能知道使用者的密碼了。
3. XSS (Cross-site Scripting)攻擊。使用者可以在留言區填入 `<script></script>` 程式碼，對網站進行進行一些惡意攻擊 (例如：竊取他人的資料) 或引導到釣魚網站等。
4. SQL Injection (駭客填字遊戲)。藉由使用者輸入的文字，影響 SQL 語法的執行。

### 參考資料
* [菜鳥工程師 肉豬: MySQL VARCHAR最大長度限制(maximum length)](https://matthung0807.blogspot.com/2019/06/mysql-varcharmaximum-length.html)
* [Difference between VARCHAR and TEXT in MySQL - Stack Overflow](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql)



